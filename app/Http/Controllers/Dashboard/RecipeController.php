<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Inertia\Inertia;
use App\Models\Recipe;
use App\Models\HealthTag;
use App\Models\AllergyTag;
use App\Models\NutritionTag;
use App\Models\DietTag;
use Illuminate\Support\Facades\Storage;
use App\Models\Ingredient;
use App\Models\Step;
use Illuminate\Validation\Rule;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use App\Models\Article;


class RecipeController extends Controller
{

 
public function publicPage(Request $request) 
{

    $filters = $request->filters ?? [];

    $recipes = Recipe::with([
        'dietTags',
        'healthTags',
        'allergyTags',
        'nutritionTags',
    ])
    ->when($filters, function ($query) use ($filters) {
        $query->whereHas('dietTags', function ($q) use ($filters) {
            $q->whereIn('name', $filters);
        })->orWhereHas('healthTags', function ($q) use ($filters) {
            $q->whereIn('name', $filters);
        })->orWhereHas('allergyTags', function ($q) use ($filters) {
            $q->whereIn('name', $filters);
        })->orWhereHas('nutritionTags', function ($q) use ($filters) {
            $q->whereIn('name', $filters);
        })->orWhereIn('kategori_hidangan', $filters)
          ->orWhereIn('metode_memasak', $filters);
    })
    ->get();

// Map gambar to full URL or default
$recipes = $recipes->map(function ($recipe) {
    $recipe->gambar = $recipe->gambar
        ? asset('storage/' . $recipe->gambar)
        : asset('images/default.jpg');
    return $recipe;
});

return Inertia::render('Recipe/Index', [
    'recipes' => $recipes,
    'activeFilters' => $filters,
    'filterOptions' => [
        'diet' => DietTag::all(),
        'health' => HealthTag::all(),
        'allergy' => AllergyTag::all(),
        'nutrition' => NutritionTag::all(),
        'dish' => Recipe::distinct()->pluck('kategori_hidangan')->filter()->values(),
        'cooking' => Recipe::distinct()->pluck('metode_memasak')->filter()->values(),
    ],
    
]);
}

public function show($slug)
{
    $resep = Recipe::with([
        'ingredients',
        'steps',
        'nutrition',
        'healthTags',
        'allergyTags',
        'nutritionTags',
        'dietTags'
    ])->where('slug', $slug)->first();

    if (!$resep) {
        abort(404);
    }

    $recipeImage = $resep->gambar
        ? asset('storage/' . $resep->gambar)
        : asset('images/default.jpg');

    $resep->gambar = $recipeImage;

    // Gabungkan semua tag ke satu koleksi
    $tags = collect([

        ['kategori' => 'Kategori Kesehatan', 'items' => $resep->healthTags],
        ['kategori' => 'Kategori Alergi', 'items' => $resep->allergyTags],
        ['kategori' => 'Kategori Nutrisi', 'items' => $resep->nutritionTags],
        ['kategori' => 'Kategori Diet', 'items' => $resep->dietTags],
    ])
    ->flatMap(function ($group) {
        return collect($group['items'])->map(function ($tag) use ($group) {
            return [
                'label' => $tag->name,
                'kategori' => $group['kategori'],
            ];
        });
    })
    ->values();

    return Inertia::render('Recipe/DetailResep', [
        'resep' => $resep,
        'tags' => $tags,
    ]);
}
public function kategori($kategori)
{
    $kategoriMap = [
        'diet' => DietTag::class,
        'kondisi' => HealthTag::class, // 'kondisi' di frontend → HealthTag di backend
        'alergi' => AllergyTag::class,
        'nutrisi' => NutritionTag::class,
    ];

    // Kalau kategori termasuk relasi tag (many-to-many)
    if (isset($kategoriMap[$kategori])) {
        $tagModel = $kategoriMap[$kategori];

        // Ambil semua subkategori (tag) dengan id, name, dan slug
        $subcategories = $tagModel::all(['id', 'name']);

        // Ambil semua resep yang punya relasi ke tag tersebut
        $relationName = match ($kategori) {
            'diet' => 'dietTags',
            'kondisi' => 'healthTags',
            'alergi' => 'allergyTags',
            'nutrisi' => 'nutritionTags',
        };

        $recipes = Recipe::with([
            'dietTags', 'healthTags', 'allergyTags', 'nutritionTags'
        ])->whereHas($relationName)->get();
    }

    // Kalau kategori langsung dari kolom recipe: 'hidangan' atau 'metode'
    elseif (in_array($kategori, ['hidangan', 'metode'])) {
        $column = $kategori === 'hidangan' ? 'kategori_hidangan' : 'metode_memasak';

        // Subkategori dikumpulkan dari kolom terkait
        $subcategories = Recipe::select($column)
            ->distinct()
            ->whereNotNull($column)
            ->get()
            ->map(function ($item) use ($column) {
                return [
                    'name' => ucwords(str_replace(['-', '_'], ' ', $item->$column)),
                    'slug' => $item->$column,
                ];
            });

        $recipes = Recipe::whereNotNull($column)->get();
    }

    // Jika kategori tidak dikenali
    else {
        abort(404);
    }

    // Format gambar resep
    $recipes->each(function ($recipe) {
        $recipe->gambar = $recipe->gambar
            ? asset('storage/' . $recipe->gambar)
            : asset('images/default.jpg');
    });

    return Inertia::render('Recipe/Kategori', [
        'kategoriSlug' => $kategori,
        'recipes' => $recipes,
        'subcategories' => $subcategories,
    ]);
}
public function subkategori($kategori, $subkategori)
{
    $kategoriMap = [
        'diet' => [DietTag::class, 'dietTags'],
        'kondisi' => [HealthTag::class, 'healthTags'],
        'alergi' => [AllergyTag::class, 'allergyTags'],
        'nutrisi' => [NutritionTag::class, 'nutritionTags'],
    ];

    if (isset($kategoriMap[$kategori])) {
        [$model, $relation] = $kategoriMap[$kategori];

        // Ambil tag berdasarkan nama yang diformat dari slug
        $tagName = str_replace('-', ' ', $subkategori);
        $tag = $model::where('name', $tagName)->firstOrFail(); // bisa juga pakai 'slug' kalau kamu punya

        $recipes = Recipe::with($relation)
            ->whereHas($relation, fn($q) => $q->where($q->getModel()->getTable() . '.id', $tag->id))
            ->get();
    } elseif (in_array($kategori, ['hidangan', 'metode'])) {
        $column = $kategori === 'hidangan' ? 'kategori_hidangan' : 'metode_memasak';
        $recipes = Recipe::where($column, $subkategori)->get();
    } else {
        abort(404);
    }

    $recipes->each(fn($r) => $r->gambar = $r->gambar ? asset('storage/' . $r->gambar) : asset('images/default.jpg'));

    return Inertia::render('Recipe/Subkategori', [
        'kategoriSlug' => $kategori,
        'subkategoriSlug' => $subkategori,
        'recipes' => $recipes,
    ]);
}


public function index()
{
    $totalResep = Recipe::count();
    $totalArtikel = Article::count(); // ✅ Tambahan count artikel

    $recipes = Recipe::with([
        'ingredients', 'steps', 'nutrition',
        'healthTags', 'allergyTags', 'nutritionTags', 'dietTags'
    ])->get();

    $articles = Article::with('category')->latest()->get();

    return Inertia::render('Dashboard/Admin/Index', [
        'totalResep' => $totalResep,
        'totalArtikel' => $totalArtikel, // ✅ Kirim ke frontend

        'recipes' => $recipes->map(function ($recipe) {
            return [
                'id' => $recipe->id,
                'judul' => $recipe->judul,
                'slug' => $recipe->slug,
                'gambar' => $recipe->gambar
                    ? asset('storage/' . $recipe->gambar)
                    : asset('images/default.jpg'),
                'kategori_hidangan' => $recipe->kategori_hidangan,
                'metode_memasak' => $recipe->metode_memasak,
                'diet_tags' => $recipe->dietTags->map(fn($t) => ['name' => $t->name]),
                'health_tags' => $recipe->healthTags->map(fn($t) => ['name' => $t->name]),
                'allergy_tags' => $recipe->allergyTags->map(fn($t) => ['name' => $t->name]),
                'nutrition_tags' => $recipe->nutritionTags->map(fn($t) => ['name' => $t->name]),
            ];
        }),

        'articles' => $articles->map(function ($article) {
            $imagePath = $article->image_path
                ? str_replace('public/', '', $article->image_path)
                : null;

            return [
                'id' => $article->id,
                'title' => $article->title,
                'slug' => $article->slug,
                'description' => $article->short_description,
                'image' => ($imagePath && \Storage::disk('public')->exists($imagePath))
                    ? asset('storage/' . $imagePath)
                    : asset('images/default-article.jpg'),
                'category' => $article->category?->name,
                'date' => $article->created_at->format('d M Y'),
            ];
        }),

        'kategoriHidangan' => Recipe::KATEGORI_HIDANGAN,
        'metodeMemasak' => Recipe::METODE_MEMASAK,

        'healthTags' => HealthTag::all()->map(fn($tag) => [
            'label' => $tag->name,
            'value' => $tag->id,
        ]),
        'allergyTags' => AllergyTag::all()->map(fn($tag) => [
            'label' => $tag->name,
            'value' => $tag->id,
        ]),
        'nutritionTags' => NutritionTag::all()->map(fn($tag) => [
            'label' => $tag->name,
            'value' => $tag->id,
        ]),
        'dietTags' => DietTag::all()->map(fn($tag) => [
            'label' => $tag->name,
            'value' => $tag->id,
        ]),
    ]);
}

public function list()
{
    $recipes = Recipe::with([
        'ingredients', 'steps', 'nutrition',
        'healthTags', 'allergyTags', 'nutritionTags', 'dietTags'
    ])->get();

    return Inertia::render('Dashboard/Recipe/ListRecipe', [
        'recipes' => $recipes->map(function ($recipe) {
            return [
                'id' => $recipe->id,
                'judul' => $recipe->judul,
                'slug' => $recipe->slug,
                'gambar' => $recipe->gambar,
                'kategori_hidangan' => $recipe->kategori_hidangan,
                'metode_memasak' => $recipe->metode_memasak,
                'diet_tags' => $recipe->dietTags->map(fn($t) => ['name' => $t->name]),
                'health_tags' => $recipe->healthTags->map(fn($t) => ['name' => $t->name]),
                'allergy_tags' => $recipe->allergyTags->map(fn($t) => ['name' => $t->name]),
                'nutrition_tags' => $recipe->nutritionTags->map(fn($t) => ['name' => $t->name]),
            ];
        }),
    ]);
}
 

    public function create()
    {
        return Inertia::render('Dashboard/Recipe/CreateRecipe', [
            'kategoriHidangan' => Recipe::KATEGORI_HIDANGAN,
            'metodeMemasak' => Recipe::METODE_MEMASAK,
            'healthTags' => HealthTag::select('id', 'name')->get(),
            'allergyTags' => AllergyTag::select('id', 'name')->get(),
            'nutritionTags' => NutritionTag::select('id', 'name')->get(),
            'dietTags' => DietTag::select('id', 'name')->get(),
            'takaranOptions' => Ingredient::TAKARAN,
        ]);
    }

public function store(Request $request)
{
    $validated = $request->validate([
        'judul' => 'required|string|max:255',
        'slug' => 'nullable|string|unique:recipes',
        'gambar' => 'required|image|max:10240',
        'kalori' => 'required|numeric',
        'durasi' => 'required|numeric',
        'cook' => 'required|numeric',
        'kategori_hidangan' => 'required|string',
        'metode_memasak' => 'required|string',

        'ingredients' => 'required|array|min:1',
        'ingredients.*.nama' => 'required|string',
        'ingredients.*.jumlah' => 'required|string',
        'ingredients.*.takaran' => 'required|string|in:gram,ml,sdt,sdm',

        'steps' => 'required|array|min:1',
        'steps.*.deskripsi' => 'required|string',

   'nutritions' => 'required|array',
    'nutritions.*.jumlah' => 'nullable|numeric',
    'nutritions.*.takaran' => 'required|in:gram,mg,kcal,IU',
    'nutritions.*.nama' => 'required|string|max:255',



        'health_tags' => 'array',
        'health_tags.*' => 'exists:health_tags,id',
        'allergy_tags' => 'array',
        'allergy_tags.*' => 'exists:allergy_tags,id',
        'nutrition_tags' => 'array',
        'nutrition_tags.*' => 'exists:nutrition_tags,id',
        'diet_tags' => 'array',
        'diet_tags.*' => 'exists:diet_tags,id',
    ]);

    // Simpan gambar
    $gambarPath = null;
    if ($request->hasFile('gambar')) {
        $gambarPath = $request->file('gambar')->store('recipes', 'public');
    }

    // Simpan data utama resep
    $recipe = Recipe::create([
        'judul' => $validated['judul'],
        'slug' => $validated['slug'],
        'gambar' => $gambarPath,
        'kalori' => $validated['kalori'],
        'durasi' => $validated['durasi'],
        'cook' => $validated['cook'],
        'kategori_hidangan' => $validated['kategori_hidangan'],
        'metode_memasak' => $validated['metode_memasak'],
        'user_id' => auth()->id(),
    ]);

    // Simpan ingredients
    $recipe->ingredients()->createMany($validated['ingredients']);

    // Simpan steps dengan urutan
    $stepsWithOrder = collect($validated['steps'])->map(function ($step, $index) {
        return [
            'urutan' => $index + 1,
            'deskripsi' => $step['deskripsi'],
        ];
    })->toArray();
    $recipe->steps()->createMany($stepsWithOrder);

    $recipe->nutrition()->createMany($validated['nutritions']);

    // Sinkronisasi tag
    $recipe->healthTags()->sync($validated['health_tags'] ?? []);
    $recipe->allergyTags()->sync($validated['allergy_tags'] ?? []);
    $recipe->nutritionTags()->sync($validated['nutrition_tags'] ?? []);
    $recipe->dietTags()->sync($validated['diet_tags'] ?? []);

    return redirect()->route('dashboard')->with('success', 'Resep berhasil dibuat.');
}
public function edit($id)
{
    $recipe = Recipe::with([
        'ingredients', 'steps', 'nutrition',
        'healthTags', 'allergyTags', 'nutritionTags', 'dietTags'
    ])->findOrFail($id);

    return Inertia::render('Dashboard/Recipe/EditRecipe', [
        'resep' => $recipe, // ✅ Harus ada ini
        'healthTags' => HealthTag::all(),
        'allergyTags' => AllergyTag::all(),
        'nutritionTags' => NutritionTag::all(),
        'dietTags' => DietTag::all(),
    ]);
}


    public function destroy(Request $request, $id)
    {
        $user = $request->user();
        if ($user->role !== 'admin') abort(403, 'Unauthorized');

        $recipe = Recipe::findOrFail($id);
        $recipe->delete();

        return redirect()->route('dashboard')->with('success', 'Recipe deleted.');
    }

public function update(Request $request, $id)
{
    $recipe = Recipe::findOrFail($id);

    $validated = $request->validate([
        'judul' => 'sometimes|required|string|max:255',
        'slug' => [
            'nullable',
            'string',
            Rule::unique('recipes')->ignore($recipe->id),
        ],
        'gambar' => 'nullable|image|max:10240',
        'kalori' => 'sometimes|required|numeric',
        'durasi' => 'sometimes|required|numeric',
        'cook' => 'sometimes|required|numeric',
        'kategori_hidangan' => 'sometimes|required|string',
        'metode_memasak' => 'sometimes|required|string',

        'ingredients' => 'sometimes|required|array|min:1',
        'ingredients.*.nama' => 'required_with:ingredients|string',
        'ingredients.*.jumlah' => 'required_with:ingredients|string',
        'ingredients.*.takaran' => 'required_with:ingredients|string|in:gram,ml,sdt,sdm',

        'steps' => 'sometimes|required|array|min:1',
        'steps.*.deskripsi' => 'required_with:steps|string',

        'nutritions' => 'sometimes|required|array',
        'nutritions.*.jumlah' => 'nullable|numeric',
        'nutritions.*.takaran' => 'required_with:nutritions|in:gram,mg,kcal,IU',
        'nutritions.*.nama' => 'required_with:nutritions|string|max:255',

        'health_tags' => 'sometimes|array',
        'health_tags.*' => 'exists:health_tags,id',

        'allergy_tags' => 'sometimes|array',
        'allergy_tags.*' => 'exists:allergy_tags,id',

        'nutrition_tags' => 'sometimes|array',
        'nutrition_tags.*' => 'exists:nutrition_tags,id',

        'diet_tags' => 'sometimes|array',
        'diet_tags.*' => 'exists:diet_tags,id',
    ]);

    // Update gambar jika ada file baru
    if ($request->hasFile('gambar')) {
        if ($recipe->gambar && Storage::disk('public')->exists($recipe->gambar)) {
            Storage::disk('public')->delete($recipe->gambar);
        }

        $gambarPath = $request->file('gambar')->store('recipes', 'public');
        $recipe->gambar = $gambarPath;
    }

    // Update field utama (gunakan fill hanya jika $fillable sudah benar)
    $recipe->judul = $validated['judul'] ?? $recipe->judul;
    $recipe->slug = $validated['slug'] ?? $recipe->slug;
    $recipe->kalori = $validated['kalori'] ?? $recipe->kalori;
    $recipe->durasi = $validated['durasi'] ?? $recipe->durasi;
    $recipe->cook = $validated['cook'] ?? $recipe->cook;
    $recipe->kategori_hidangan = $validated['kategori_hidangan'] ?? $recipe->kategori_hidangan;
    $recipe->metode_memasak = $validated['metode_memasak'] ?? $recipe->metode_memasak;
    $recipe->save();

    // Update ingredients
    if (isset($validated['ingredients'])) {
        $recipe->ingredients()->delete();
        $recipe->ingredients()->createMany($validated['ingredients']);
    }

    // Update steps (dengan urutan)
    if (isset($validated['steps'])) {
        $recipe->steps()->delete();
        $stepsWithOrder = collect($validated['steps'])->map(function ($step, $index) {
            return [
                'urutan' => $index + 1,
                'deskripsi' => $step['deskripsi'],
            ];
        })->toArray();
        $recipe->steps()->createMany($stepsWithOrder);
    }

    // Update nutrition
    if (isset($validated['nutritions'])) {
        $recipe->nutrition()->delete();
        $recipe->nutrition()->createMany($validated['nutritions']);
    }

    // Sync tag relationships
    if (isset($validated['health_tags'])) {
        $recipe->healthTags()->sync($validated['health_tags']);
    }

    if (isset($validated['allergy_tags'])) {
        $recipe->allergyTags()->sync($validated['allergy_tags']);
    }

    if (isset($validated['nutrition_tags'])) {
        $recipe->nutritionTags()->sync($validated['nutrition_tags']);
    }

    if (isset($validated['diet_tags'])) {
        $recipe->dietTags()->sync($validated['diet_tags']);
    }

    return redirect()
        ->route('dashboard', $recipe->id)
        ->with('success', 'Resep berhasil diperbarui.');
}


    public function saveRecipe($id)
    {
        $user = auth()->user();
        if ($user->role !== 'user') abort(403, 'Only users can save recipes');

        $recipe = Recipe::findOrFail($id);

        if (!$user->savedRecipes()->where('recipe_id', $id)->exists()) {
            $user->savedRecipes()->attach($recipe);
        }

        return redirect()->back()->with('success', 'Recipe saved');
    }

    public function unsaveRecipe($id)
    {
        $user = auth()->user();
        if ($user->role !== 'user') abort(403, 'Only users can unsave recipes');

        $user->savedRecipes()->detach($id);

        return redirect()->back()->with('success', 'Recipe removed from saved list');
    }

    public function getSavedRecipes()
{
    $user = auth()->user();

    // Batasi hanya untuk user biasa
    if ($user->role !== 'user') {
        abort(403, 'Only users can view saved recipes');
    }

    // Ambil resep yang sudah disimpan oleh user
    $savedRecipes = $user->savedRecipes()
        ->with(['ingredients', 'steps', 'nutrition', 'healthTags', 'allergyTags', 'nutritionTags', 'dietTags'])
        ->get();

    // Ubah path gambar menjadi URL publik
    $savedRecipes->transform(function ($recipe) {
        $recipe->gambar = $recipe->gambar
            ? asset('storage/' . $recipe->gambar)
            : asset('images/default.jpg');
        return $recipe;
    });

    // Kirim ke halaman React melalui Inertia
    return Inertia::render('Dashboard/Member/SavedRecipes', [
        'savedRecipes' => $savedRecipes,
    ]);
}
}

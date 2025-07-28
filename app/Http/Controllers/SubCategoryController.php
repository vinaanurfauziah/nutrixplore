<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\HealthTag;
use App\Models\AllergyTag;
use App\Models\NutritionTag;
use App\Models\DietTag;

class SubCategoryController extends Controller
{
    protected $modelMap = [
        'health' => HealthTag::class,
        'allergy' => AllergyTag::class,
        'nutrition' => NutritionTag::class,
        'diet' => DietTag::class,
    ];

    protected $labelMap = [
        'health' => 'Kategori Kesehatan',
        'allergy' => 'Kategori Alergi',
        'nutrition' => 'Kategori Nutrisi',
        'diet' => 'Kategori Diet',
    ];

    public function index()
    {
        $data = collect($this->labelMap)->flatMap(function ($label, $type) {
            $modelClass = $this->modelMap[$type];
            return $modelClass::select('id', 'name')->get()->map(function ($item) use ($label, $type) {
                return [
                    'id' => $item->id,
                    'name' => $item->name,
                    'category' => $label,
                    'type' => $type,
                ];
            });
        });

        return Inertia::render('Dashboard/Recipe/CategoryRecipe/Index', [
            'subcategories' => $data,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'type' => 'required|in:health,allergy,nutrition,diet',
            'name' => 'required|string|max:255',
        ]);

        $modelClass = $this->modelMap[$validated['type']];

        if ($modelClass::where('name', $validated['name'])->exists()) {
            return redirect()->back()
                ->withErrors(['name' => 'Tag sudah ada.'])
                ->withInput();
        }

        $modelClass::create(['name' => $validated['name']]);

        return redirect()->route('dashboard.recipe.category-recipe')
            ->with('success', 'Tag berhasil ditambahkan.');
    }

    public function edit($type, $id)
    {
        if (!isset($this->modelMap[$type])) {
            abort(404, 'Kategori tidak ditemukan.');
        }

        $modelClass = $this->modelMap[$type];
        $tag = $modelClass::findOrFail($id);

        return Inertia::render('Dashboard/Recipe/CategoryRecipe/Edit', [
            'tag' => [
                'id' => $tag->id,
                'name' => $tag->name,
                'label' => $this->labelMap[$type],
                'type' => $type,
            ],
        ]);
    }
public function update(Request $request, $type, $id)
{
    if (!isset($this->modelMap[$type])) {
        abort(404, 'Kategori tidak ditemukan.');
    }

    $validated = $request->validate([
        'name' => 'required|string|max:255',
    ]);

    $modelClass = $this->modelMap[$type];
    $tag = $modelClass::findOrFail($id);
    $tag->update(['name' => $validated['name']]);

    return redirect()->route('dashboard.recipe.category-recipe')
        ->with('success', 'Tag berhasil diperbarui.');
}

public function destroy(Request $request, $type, $id)
{
    if (!isset($this->modelMap[$type])) {
        abort(404, 'Kategori tidak ditemukan.');
    }

    $modelClass = $this->modelMap[$type];
    $tag = $modelClass::findOrFail($id);
    $tag->delete();

    return redirect()->route('dashboard.recipe.category-recipe')
        ->with('success', 'Tag berhasil dihapus.');
}
}

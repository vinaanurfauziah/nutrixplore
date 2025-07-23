<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Dashboard\RecipeController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Models\MeasurementUnit;
use Illuminate\Support\Facades\File;


Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/recipe', function () {
    return Inertia::render('Recipe/Index');
})->name('recipe');

// Route::get('/recipe/hidangan', function () {
//     return Inertia::render('Recipe/Hidangan');
// })->name('recipe.hidangan');
// // tes
// Route::get('/recipe/kategori/hidangan', function () {
//     return Inertia::render('Recipe/Kategori');
// })->name('recipe.kategori.hidangan');

// tes doang yg kategori resep
// tes
Route::get('/recipe/hidangan', function () {
    return Inertia::render('Recipe/Kategori');
})->name('recipe.kategori.hidangan');


Route::get('/article', fn () => Inertia::render('Article/Index'));

Route::get('/article/{slug}', function ($slug) {
    return Inertia::render('Article/DetailArticle', ['slug' => $slug]);
});

Route::get('/recipe/{kategoriSlug}/{subkategoriSlug}', function ($kategoriSlug, $subkategoriSlug) {
    return Inertia::render('Recipe/Subkategori', [
        'kategoriSlug' => $kategoriSlug,
        'subkategoriSlug' => $subkategoriSlug,
    ]);
})->name('recipe.subkategori');

Route::get('/recipe/{kategori}/{subkategori}/{slug}', function ($kategori, $subkategori, $slug) {
    return Inertia::render('Recipe/DetailResep', [
        'kategori' => $kategori,
        'subkategori' => $subkategori,
        'slug' => $slug,
    ]);
});

Route::get('/dashboard/kelola-admin/edit/{id}', function ($id) {
    return Inertia::render('Dashboard/Admin/KelolaAdmin/Edit', [
        'id' => $id,
    ]);
})->middleware(['auth', 'verified'])->name('dashboard.kelola-admin.edit');

Route::get('/dashboard/article/edit/{slug}', function ($slug) {
    return Inertia::render('Dashboard/Article/EditArticle', [
        'slug' => $slug,
    ]);
})->middleware(['auth', 'verified'])->name('dashboard.article.edit');
// di atas tes

Route::get('/dashboard/article/category/edit/{id}', function ($id) {
    return Inertia::render('Dashboard/Article/EditCategoryArticle', [
        'categoryId' => $id,
    ]);
})->middleware(['auth', 'verified'])->name('dashboard.article.category.edit');

Route::get('/dashboard/article/category/create', function () {
    return Inertia::render('Dashboard/Article/CreateCategoryArticle');
})->middleware(['auth', 'verified'])->name('dashboard.article.category.create');

// tes sub kategori
Route::get('/dashboard/recipe/category-recipe/edit-subkategori/{slug}', function ($slug) {
    return Inertia::render('Dashboard/Recipe/CategoryRecipe/EditSubkategori', [
        'slug' => $slug, // cukup kirim slug, nanti ambil datanya di frontend (kategoriData.js)
    ]);
});


Route::get('/recipe/{kategoriSlug}', function ($kategoriSlug) {
    return Inertia::render('Recipe/Kategori', [
        'kategoriSlug' => $kategoriSlug,
    ]);
})->name('recipe.kategori');

// batas tes
Route::get('/recipe/detailResep', function () {
    return Inertia::render('Recipe/DetailResep');
})->name('recipe.detailResep');

Route::get('/recipe/hidangan/pembuka', function () {
    return Inertia::render('Recipe/Hidangan/HidanganPembuka');
})->name('recipe.hidangan.pembuka');

Route::get('/article', function () {
    return Inertia::render('Article/Index');
})->name('article');

Route::get('/article/detailArticle', function () {
    return Inertia::render('Article/DetailArticle');
})->name('article.detailArticle');

Route::get('/dashboardMember/memberDashboardPage', function () {
    return Inertia::render('DashboardMember/MemberDashboardPage');
})->name('dashboardMember.memberDashboardPage');

Route::get('/about', function () {
    return Inertia::render('About/About');
})->name('about');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard/Admin/Index');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/dashboard/recipe', function () {
    return Inertia::render('Dashboard/Recipe/ListRecipe');
})->middleware(['auth', 'verified'])->name('dashboard.recipe.list');

Route::get('/dashboard/recipe/create', function () {
    return Inertia::render('Dashboard/Recipe/CreateRecipe');
})->middleware(['auth', 'verified'])->name('dashboard.recipe.create');

Route::get('/dashboard/recipe/edit/{slug}', function ($slug) {
    $jsonPath = resource_path('js/data/resepData.json');

    if (!File::exists($jsonPath)) {
        abort(404, 'File resepData.json tidak ditemukan');
    }

    $allRecipes = json_decode(file_get_contents($jsonPath), true);

    $found = null;

    foreach ($allRecipes as $kategori => $subkategori) {
        foreach ($subkategori as $sub => $resepList) {
            foreach ($resepList as $resep) {
                if (isset($resep['slug']) && $resep['slug'] === $slug) {
                    $found = $resep;
                    break 3;
                }
            }
        }
    }

    if (!$found) {
        abort(404, 'Resep tidak ditemukan');
    }

    return Inertia::render('Dashboard/Recipe/EditRecipe', [
        'slug' => $slug,
        'resep' => $found,
    ]);
})->middleware(['auth', 'verified'])->name('dashboard.recipe.edit');

Route::post('/dashboard/recipe', [RecipeController::class, 'store'])
    ->middleware(['auth', 'verified'])
    ->name('dashboard.recipe.store');

Route::get('/dashboard/recipe/measurement-units', function () {
    return Inertia::render('Dashboard/Recipe/MeasurementUnits/Index');
})->middleware(['auth', 'verified'])->name('dashboard.recipe.measurement-units');

Route::get('/dashboard/recipe/measurement-units/create', function () {
    return Inertia::render('Dashboard/Recipe/MeasurementUnits/Create');
})->middleware(['auth', 'verified'])->name('dashboard.recipe.measurement-units.create');

Route::get('/dashboard/recipe/measurement-units/{id}/edit', function ($id) {
    return Inertia::render('Dashboard/Recipe/MeasurementUnits/Edit', [
        'id' => $id, // sementara hanya kirim ID
    ]);
})->middleware(['auth', 'verified'])->name('dashboard.recipe.measurement-units.edit');


Route::put('/dashboard/recipe/measurement-units/{id}', [MeasurementUnitController::class, 'update'])->name('dashboard.recipe.measurement-units.update');

Route::get('/dashboard/recipe/category-recipe', function () {
    return Inertia::render('Dashboard/Recipe/CategoryRecipe/Index');
})->middleware(['auth', 'verified'])->name('dashboard.recipe.category-recipe');

Route::get('/dashboard/recipe/category-recipe/create', function () {
    return Inertia::render('Dashboard/Recipe/CategoryRecipe/Create');
})->middleware(['auth', 'verified'])->name('dashboard.recipe.category-recipe.create');

Route::get('/dashboard/article', function () {
    return Inertia::render('Dashboard/Article/ListArticle');
})->middleware(['auth', 'verified'])->name('dashboard.article.list');

Route::get('/dashboard/article/create', function () {
    return Inertia::render('Dashboard/Article/CreateArticle');
})->middleware(['auth', 'verified'])->name('dashboard.article.create');

Route::get('/dashboard/article/category', function () {
    return Inertia::render('Dashboard/Article/CategoryArticle');
})->middleware(['auth', 'verified'])->name('dashboard.article.category');

Route::get('/dashboard/profile', function () {
    return Inertia::render('Profile/SharedProfile');
})->middleware(['auth', 'verified'])->name('dashboard.profile');

Route::get('/member/dashboard', function () {
    return Inertia::render('Dashboard/Member/Index');
})->name('member.dashboard');

Route::get('/dashboardMember/saved-recipes', function () {
    return Inertia::render('Dashboard/Member/SavedRecipes');
})->name('dashboardMember.saved.recipes');

Route::get('/dashboardMember/saved-articles', function () {
    return Inertia::render('Dashboard/Member/SavedArticles');
})->name('dashboardMember.saved.articles');

Route::get('/dashboardMember/profile', function () {
    return Inertia::render('Profile/SharedProfile', [
        'mustVerifyEmail' => Auth::user() instanceof \Illuminate\Contracts\Auth\MustVerifyEmail,
        'status' => session('status'),
    ]);
})->middleware(['auth', 'verified'])->name('dashboardMember.profile');

Route::middleware(['auth', 'verified'])
    ->prefix('dashboard/kelola-admin')
    ->name('dashboard.kelola-admin.')
    ->group(function () {
        Route::get('/list', fn() => Inertia::render('Dashboard/Admin/KelolaAdmin/List'))->name('list');
        Route::get('/create', fn() => Inertia::render('Dashboard/Admin/KelolaAdmin/Create'))->name('create');
    });

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});
//Routes for Recipe
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/recipes', [RecipeController::class, 'index'])->name('recipes.index');
    Route::get('/recipes/create', [RecipeController::class, 'create'])->name('recipes.create');
    Route::post('/recipes', [RecipeController::class, 'store'])->name('recipes.store');
    Route::get('/recipes/{slug}', [RecipeController::class, 'show'])->name('recipes.show');
    Route::get('/recipes/{id}/edit', [RecipeController::class, 'edit'])->name('recipes.edit');
    Route::put('/recipes/{id}', [RecipeController::class, 'update'])->name('recipes.update');
    Route::delete('/recipes/{id}', [RecipeController::class, 'destroy'])->name('recipes.destroy');

    Route::post('/recipes/{id}/save', [RecipeController::class, 'saveRecipe'])->name('recipes.save');
    Route::delete('/recipes/{id}/unsave', [RecipeController::class, 'unsaveRecipe'])->name('recipes.unsave');
    Route::get('/saved-recipes', [RecipeController::class, 'getSavedRecipes'])->name('recipes.saved');
});
require __DIR__.'/auth.php';

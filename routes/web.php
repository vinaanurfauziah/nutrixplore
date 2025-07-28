<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Dashboard\RecipeController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Models\MeasurementUnit;
use Illuminate\Support\Facades\File;
use App\Http\Controllers\SubCategoryController;
use App\Http\Controllers\AdminController;
use App\Models\User;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\ArticleCategoryController;








Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});
Route::get('/about', fn () => Inertia::render('About/About'))->name('about');
Route::get('/recipe', [RecipeController::class, 'publicPage'])->name('recipe');


Route::get('/recipe/hidangan', fn () => Inertia::render('Recipe/Kategori'))->name('recipe.kategori.hidangan');

Route::get('/article', fn () => Inertia::render('Article/Index'))->name('article');
Route::get('/article/{slug}', fn ($slug) => Inertia::render('Article/DetailArticle', ['slug' => $slug]))->name('article.detailArticle');

Route::get('/recipe/{kategoriSlug}/{subkategoriSlug}', fn ($kategoriSlug, $subkategoriSlug) => Inertia::render('Recipe/Subkategori', compact('kategoriSlug', 'subkategoriSlug')))->name('recipe.subkategori');
Route::get('/recipe/{slug}', [RecipeController::class, 'show']);

Route::get('/dashboard', [RecipeController::Class , 'index'])
    ->middleware(['auth', 'verified'])
    ->name('dashboard');
// Route untuk Recipe

Route::get('/dashboard/recipe', [RecipeController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard.recipe.list');
Route::get('/dashboard/recipe/recipelist', [RecipeController::class, 'list'])->middleware(['auth', 'verified'])->name('dashboard.recipe.alllist');
Route::get('/dashboard/recipe/create', [RecipeController::class, 'create'])
    ->middleware(['auth', 'verified', 'role:admin']) // contoh pakai role
    ->name('dashboard.recipe.create');
Route::post('/dashboard/recipe', [RecipeController::class, 'store'])
    ->middleware(['auth', 'verified', 'role:admin'])
    ->name('dashboard.recipe.store');
Route::get('/dashboard/resep/{id}/edit', [RecipeController::class, 'edit'])->name('dashboard.recipe.edit');

Route::delete('/dashboard/recipe/{id}', [RecipeController::class, 'destroy'])
->middleware(['auth', 'verified', 'role:admin'])
    ->name('dashboard.recipe.destroy');
Route::put('/dashboard/recipe/{id}', [RecipeController::class, 'update'])->name('dashboard.recipe.update');

// Route untuk Measurement Unit
Route::get('/dashboard/recipe/measurement-units', fn () => Inertia::render('Dashboard/Recipe/MeasurementUnits/Index'))->middleware(['auth', 'verified'])->name('dashboard.recipe.measurement-units');
Route::get('/dashboard/recipe/measurement-units/create', fn () => Inertia::render('Dashboard/Recipe/MeasurementUnits/Create'))->middleware(['auth', 'verified'])->name('dashboard.recipe.measurement-units.create');
Route::get('/dashboard/recipe/measurement-units/{id}/edit', fn ($id) => Inertia::render('Dashboard/Recipe/MeasurementUnits/Edit', compact('id')))->middleware(['auth', 'verified'])->name('dashboard.recipe.measurement-units.edit');
// ✅ Route untuk Tag
Route::get('/dashboard/recipe/category-recipe', [SubCategoryController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard.recipe.category-recipe');
Route::get('/dashboard/recipe/category-recipe/create', fn () => Inertia::render('Dashboard/Recipe/CategoryRecipe/Create'))
    ->middleware(['auth', 'verified', 'role:admin'])
    ->name('dashboard.recipe.category-recipe.create');
Route::post('/dashboard/recipe/category-recipe/create', [SubCategoryController::class, 'store'])
    ->middleware(['auth', 'verified', 'role:admin'])
    ->name('dashboard.tags.store');
Route::get('/dashboard/recipe/category-recipe/edit/{type}/{id}', [SubCategoryController::class, 'edit'])->name('dashboard.subcategories.edit');
Route::put('/dashboard/recipe/category-recipe/{type}/{id}', [SubCategoryController::class, 'update'])->name('dashboard.subcategories.update');
Route::delete('/dashboard/recipe/category-recipe/{type}/{id}', [SubCategoryController::class, 'destroy'])->name('dashboard.subcategories.destroy');



Route::get('/dashboard/article', fn () => Inertia::render('Dashboard/Article/ListArticle'))->middleware(['auth', 'verified'])->name('dashboard.article.list');
Route::get('/dashboard/article/create',)->middleware(['auth', 'verified'])->name('dashboard.article.create');
Route::get('/dashboard/article/edit/{slug}', fn ($slug) => Inertia::render('Dashboard/Article/EditArticle', compact('slug')))->middleware(['auth', 'verified'])->name('dashboard.article.edit');

Route::prefix('dashboard')->middleware(['auth', 'verified', 'role:admin'])->group(function () {
    Route::get('article', [ArticleController::class, 'index'])->name('dashboard.article.index');
    Route::get('article/list', [ArticleController::class, 'list'])->name('dashboard.article.list');
    Route::get('article/create', [ArticleController::class, 'create'])->name('dashboard.article.create');
    Route::get('article/{article}/edit', [ArticleController::class, 'edit'])->name('dashboard.article.edit');
    Route::post('article/store', [ArticleController::class, 'store'])->name('dashboard.article.store');
    Route::put('article/{article}', [ArticleController::class, 'update'])->name('dashboard.article.update');
    Route::delete('article/{article}', [ArticleController::class, 'destroy'])->name('dashboard.article.destroy');
    
});


Route::get('/dashboard/article/category', [ArticleCategoryController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard.article.category');
Route::get('/dashboard/article/category/create', fn () => Inertia::render('Dashboard/Article/CreateCategoryArticle'))->middleware(['auth', 'verified'])->name('dashboard.article.category.create');
Route::post('/dashboard/article/category/store', [ArticleCategoryController::class, 'store'])->middleware(['auth', 'verified'])->name('dashboard.article.category.store');
Route::get('/dashboard/article/category/edit/{id}', [ArticleCategoryController::class, 'edit'])->middleware(['auth', 'verified'])->name('dashboard.article.category.edit');
Route::put('/dashboard/article/category/{articleCategory}', [ArticleCategoryController::class, 'update'])->middleware(['auth', 'verified'])->name('dashboard.article.category.update');
Route::delete('/dashboard/article/category/{articleCategory}', [ArticleCategoryController::class, 'destroy'])->middleware(['auth', 'verified'])->name('dashboard.article.category.destroy');
Route::get('/dashboard/article/category/list', [ArticleCategoryController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard.article.category.list');



// Route untuk Admin Management
Route::middleware(['auth', 'verified'])->prefix('dashboard/kelola-admin')->name('dashboard.kelola-admin.')->group(function () {
    Route::get('/list', [AdminController::class, 'index'])->name('list');
    Route::get('/create', [AdminController::class, 'create'])->name('create');
    Route::post('/store', [AdminController::class, 'store'])->name('store');
    Route::get('/{id}/edit', [AdminController::class, 'edit'])->name('edit');
    Route::put('/{id}', [AdminController::class, 'update'])->name('update');
    Route::delete('/{id}', [AdminController::class, 'destroy'])->name('destroy');
});


Route::get('/dashboard/profile', fn () => Inertia::render('Profile/SharedProfile'))->middleware(['auth', 'verified'])->name('dashboard.profile');
Route::get('/dashboard/member/Index', fn () => Inertia::render('Dashboard/Member/Index'))->name('dashboardMember.DashboardPage');
Route::get('/dashboard/member/saved-recipes', fn () => Inertia::render('Dashboard/Member/SavedRecipes'))->name('dashboardMember.saved.recipes');
Route::get('/dashboard/member/saved-articles', fn () => Inertia::render('Dashboard/Member/SavedArticles'))->name('dashboardMember.saved.articles');
Route::get('/dashboard/member/profile', fn () => Inertia::render('Profile/SharedProfile', [
    'mustVerifyEmail' => Auth::user() instanceof Illuminate\Contracts\Auth\MustVerifyEmail,
    'status' => session('status'),
]))->middleware(['auth', 'verified'])->name('dashboardMember.profile');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware(['auth', 'role:admin'])->group(function () {
    Route::resource('recipes', RecipeController::class)->except(['show', 'create', 'edit']);
    Route::post('recipes/{id}/save', [RecipeController::class, 'saveRecipe'])->name('recipes.save');
    Route::post('recipes/{id}/unsave', [RecipeController::class, 'unsaveRecipe'])->name('recipes.unsave');
    Route::get('recipes/saved', [RecipeController::class, 'getSavedRecipes'])->name('recipes.saved');
});

require __DIR__.'/auth.php';

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
use App\Http\Controllers\Guest;
use App\Http\Controllers\MemberController;
use App\Http\Controllers\MeasurementController ;

Route::get('/', [Guest::class, 'index'])->name('home');
Route::get('/about', fn () => Inertia::render('About/About'))->name('about');
Route::get('/recipe', [RecipeController::class, 'publicPage'])->name('recipe');
Route::get('/recipe/kategori/{kategori}', [RecipeController::class, 'kategori']);
Route::get('/recipe/{kategori}/{subkategori}', [RecipeController::class, 'subkategori']);


Route::get('/recipe/hidangan', fn () => Inertia::render('Recipe/Kategori'))->name('recipe.kategori.hidangan');

Route::get('/article', [ArticleController::class,'listArticle'])->name('article');
Route::get('/article/{slug}', [ArticleController::class, 'show'])->name('article.show');



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
Route::get(
    '/dashboard/recipe/measurement-units',
    [MeasurementController::class, 'index']
)->middleware(['auth', 'verified'])->name('dashboard.recipe.measurement-units');
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





Route::prefix('dashboard')->middleware(['auth', 'verified', 'role:admin'])->group(function () {
    Route::get('article/list', [ArticleController::class, 'adminList'])->name('dashboard.article.list');
    Route::get('article/create', [ArticleController::class, 'create'])->name('dashboard.article.create');
    Route::get('article/edit/{slug}', [ArticleController::class, 'edit'])->name('dashboard.article.edit');
    Route::post('article/store', [ArticleController::class, 'store'])->name('dashboard.article.store');
    Route::put('article/update', [ArticleController::class, 'update'])->name('dashboard.article.update');
    Route::delete('article/{id}', [ArticleController::class, 'destroy'])->name('dashboard.article.destroy');
    
});


Route::get('/dashboard/article/category', [ArticleCategoryController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard.article.category');
Route::get('/dashboard/article/category/create', fn () => Inertia::render('Dashboard/Article/CreateCategoryArticle'))->middleware(['auth', 'verified'])->name('dashboard.article.category.create');
Route::post('/dashboard/article/category/store', [ArticleCategoryController::class, 'store'])->middleware(['auth', 'verified'])->name('dashboard.article.category.store');
Route::get('/dashboard/article/category/edit/{articleCategory}', [ArticleCategoryController::class, 'edit'])->name('dashboard.article.category.edit');
Route::put('/dashboard/article/category/{articleCategory}', [ArticleCategoryController::class, 'update'])
    ->name('dashboard.article.category.update');

Route::delete('/dashboard/article/category/{articleCategory}', [ArticleCategoryController::class, 'destroy'])->middleware(['auth', 'verified'])->name('dashboard.article.category.destroy');
Route::get('/dashboard/article/category/list', [ArticleCategoryController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard.article.category.list');

Route::middleware(['auth'])->group(function () {
    Route::post('/articles/save/{article}', [ArticleController::class, 'save'])->name('articles.save');
    Route::delete('/articles/unsave/{article}', [ArticleController::class, 'unsave'])->name('articles.unsave');
});


// Route untuk Admin Management
Route::middleware(['auth', 'verified'])->prefix('dashboard/kelola-admin')->name('dashboard.kelola-admin.')->group(function () {
    Route::get('/list', [AdminController::class, 'index'])->name('list');
    Route::get('/create', [AdminController::class, 'create'])->name('create');
    Route::post('/store', [AdminController::class, 'store'])->name('store');
    Route::get('/{id}/edit', [AdminController::class, 'edit'])->name('edit');
    Route::put('/{id}', [AdminController::class, 'update'])->name('update');
    Route::delete('/{id}', [AdminController::class, 'destroy'])->name('destroy');
});




Route::middleware(['auth'])->group(function () {
    Route::post('/recipes/save/{id}', [RecipeController::class, 'saveRecipe'])->name('recipes.save');
    Route::post('/recipes/unsave/{id}', [RecipeController::class, 'unsaveRecipe'])->name('recipes.unsave');
  
});
Route::get('/dashboard/profile', fn () => Inertia::render('Profile/SharedProfile'))->middleware(['auth', 'verified'])->name('dashboard.profile');
Route::get('/dashboard/member/Index', [MemberController::class,'savedContent'])->name('dashboardMember.DashboardPage');
Route::get('/dashboard/member/saved-recipes', [RecipeController::class, 'getSavedRecipes'])->name('dashboardMember.saved.recipes');
Route::get('/dashboard/member/saved-articles', [ArticleController::class, 'getSavedArticles'])
    ->name('dashboardMember.saved.articles');
Route::get('/dashboard/profile', fn () => Inertia::render('Profile/SharedProfile'))->middleware(['auth', 'verified'])->name('dashboard.profile');
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


require __DIR__.'/auth.php';

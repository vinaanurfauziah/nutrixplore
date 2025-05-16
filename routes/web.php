<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/recipe', function () {
    return Inertia::render('Recipe');
})->name('recipe');

Route::get('/recipe/hidangan', function () {
    return Inertia::render('Recipe/Hidangan');
})->name('recipe.hidangan');

Route::get('/recipe/detailResep', function () {
    return Inertia::render('Recipe/DetailResep');
})->name('recipe.detailResep');

Route::get('/recipe/hidangan/pembuka', function () {
    return Inertia::render('Recipe/Hidangan/HidanganPembuka');
})->name('recipe.hidangan.pembuka');

Route::get('/article', function () {
    return Inertia::render('Article');
})->name('article');

Route::get('/article/detailArticle', function () {
    return Inertia::render('Article/DetailArticle');
})->name('article.detailArticle');

Route::get('/dashboardMember/dashboard', function () {
    return Inertia::render('DashboardMember/Dashboard');
})->name('dashboardMember.dashboard');

Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

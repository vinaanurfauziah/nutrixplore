<?php

namespace App\Http\Controllers;

use App\Models\Recipe;
use App\Models\Article;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use App\Support\MediaStorage;


class Guest extends Controller
{
    
public function index()
{
    // Ambil resep terbaru
    $latestRecipes = Recipe::latest()->take(4)->get();
    $latestRecipes->transform(function ($recipe) {
        $recipe->gambar = MediaStorage::url($recipe->gambar, 'images/default.jpg');
        return $recipe;
    });

    // Ambil artikel terbaru + relasi kategori
    $latestArticles = Article::with('category')->latest()->take(8)->get();

    $latestArticles->transform(function ($article) {
        return [
            'id' => $article->id,
            'title' => $article->title,
            'slug' => $article->slug,
            'description' => $article->short_description,
            'content' => $article->content,
            'image' => MediaStorage::url($article->image_path, 'images/default-article.jpg'),
            'category' => $article->category ? [
                'id' => $article->category->id,
                'name' => $article->category->name,
            ] : null,
        ];
    });

    return Inertia::render('Welcome', [
        'recipes' => $latestRecipes,
        'articles' => $latestArticles,
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'phpVersion' => PHP_VERSION,
    ]);
}
}

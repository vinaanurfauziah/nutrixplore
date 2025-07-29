<?php

namespace App\Http\Controllers;

use App\Models\Recipe;
use App\Models\Article;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;


class Guest extends Controller
{
    
public function index()
{
    // Ambil resep terbaru
    $latestRecipes = Recipe::latest()->take(4)->get();
    $latestRecipes->transform(function ($recipe) {
        $recipe->gambar = $recipe->gambar
            ? asset('storage/' . $recipe->gambar)
            : asset('images/default.jpg');
        return $recipe;
    });

    // Ambil artikel terbaru + relasi kategori
    $latestArticles = Article::with('category')->latest()->take(8)->get();

    $latestArticles->transform(function ($article) {
        $imagePath = $article->image_path
            ? str_replace('public/', '', $article->image_path)
            : null;

        return [
            'id' => $article->id,
            'title' => $article->title,
            'slug' => $article->slug,
            'description' => $article->short_description,
            'content' => $article->content,
            'image' => ($imagePath && Storage::disk('public')->exists($imagePath))
                ? asset('storage/' . $imagePath)
                : asset('images/default-article.jpg'),
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

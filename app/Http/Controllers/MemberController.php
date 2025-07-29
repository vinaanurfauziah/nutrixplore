<?php

namespace App\Http\Controllers;
use App\Models\Article;
use App\Models\Recipe;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Inertia\Inertia;






class MemberController extends Controller
{
     public function savedContent()
    {
       $user = Auth::user();

        if ($user->role !== 'user') {
            abort(403, 'Only users can access this dashboard.');
        }

        // Ambil 4 resep terbaru yang disimpan
        $savedRecipes = $user->savedRecipes()
            ->with(['ingredients', 'steps', 'nutrition', 'healthTags', 'allergyTags', 'nutritionTags', 'dietTags'])
            ->latest()
            ->take(4)
            ->get()
            ->transform(function ($recipe) {
                $recipe->gambar = $recipe->gambar
                    ? asset('storage/' . $recipe->gambar)
                    : asset('images/default.jpg');
                return $recipe;
            });

        // Ambil 4 artikel terbaru yang disimpan
        $savedArticles = $user->savedArticles()
            ->with('category')
            ->latest()
            ->take(4)
            ->get()
            ->transform(function ($article) {
                return [
                    'id' => $article->id,
                    'title' => $article->title,
                    'slug' => $article->slug,
                    'description' => $article->short_description,
                    'imageUrl' => $article->image_path
                        ? asset(str_replace('public/', 'storage/', $article->image_path))
                        : asset('images/default.jpg'),
                    'category' => $article->category ? $article->category->name : null,
                ];
            });

        return Inertia::render('Dashboard/Member/Index', [
           'recipes' => $savedRecipes,
    'articles' => $savedArticles,
        ]);
    }
}

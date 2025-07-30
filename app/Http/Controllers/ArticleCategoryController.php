<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\ArticleCategory;

class ArticleCategoryController extends Controller
{
    public function index()
    {
        $categories = ArticleCategory::withCount('articles')->get();

        return Inertia::render('Dashboard/Article/CategoryArticle', [
            'categories' => $categories,
        ]);
    }

    public function create()
    {
        return Inertia::render('Dashboard/Article/CreateCategory');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'type' => 'nullable|string|max:255',
        ]);

        ArticleCategory::create($validated);

        return redirect()->route('dashboard.article.category')->with('success', 'Kategori berhasil dibuat.');
    }

    public function edit(ArticleCategory $articleCategory)
    {
        return Inertia::render('Dashboard/Article/EditCategoryArticle', [
            'category' => $articleCategory,
        ]);
    }

    public function update(Request $request, ArticleCategory $articleCategory)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
        ]);

        $articleCategory->update($validated);

        return redirect()->route('dashboard.article.category')->with('success', 'Kategori berhasil diperbarui.');
    }

    public function destroy(ArticleCategory $articleCategory)
    {
        $articleCategory->delete();

        return redirect()->route('dashboard.article.category')->with('success', 'Kategori berhasil dihapus.');
    }
}

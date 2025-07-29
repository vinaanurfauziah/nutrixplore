<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\ArticleCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;

class ArticleController extends Controller
{
    

    public function create()
    {
        return Inertia::render('Dashboard/Article/CreateArticle', [
            'categories' => ArticleCategory::select('id', 'name')->get(),
        ]);
    }
   
public function show(Article $article)
{
    return Inertia::render('Dashboard/Article/ListArticle', [
        'article' => $article->load('category'),
    ]);
}

    public function list()
    {
        return Inertia::render('Dashboard/Article/ListArticle', [
            'articles' => Article::with('category')->latest()->get(),
        ]);
    }

// Menampilkan semua artikel (misalnya untuk frontend publik)
public function publicIndex()
{
    return Inertia::render('Article/List', [
        'articles' => Article::with('category')->latest()->get(),
    ]);
}


    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'short_description' => 'nullable|string',
            'content' => 'required|string',
            'category_id' => 'required|exists:article_categories,id',
            'image' => 'nullable|image|max:10240',
        ]);

        $imagePath = null;
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('public/articles');
        }

        Article::create([
            'title' => $validated['title'],
            'slug' => Str::slug($validated['title']),
            'short_description' => $validated['short_description'],
            'content' => $validated['content'],
            'category_id' => $validated['category_id'],
            'image_path' => $imagePath,
        ]);

        return redirect()->route('dashboard.article.list')->with('success', 'Artikel berhasil ditambahkan');
    }

public function edit(Article $article)
{
    $article->load('category');

    return Inertia::render('Dashboard/Article/EditArticle', [
        'article' => [
            'id' => $article->id,
            'slug' => $article->slug,
            'title' => $article->title,
            'short_description' => $article->short_description,
            'content' => $article->content,
            'category' => $article->category ? [
                'id' => $article->category->id,
                'name' => $article->category->name,
            ] : null,
        ],
        'categories' => ArticleCategory::select('id', 'name')->get(),
    ]);
}
    public function update(Request $request, Article $article)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'short_description' => 'nullable|string',
            'content' => 'required|string',
            'category_id' => 'required|exists:article_categories,id',
            'image' => 'nullable|image|max:10240',
        ]);

        if ($request->hasFile('image')) {
            if ($article->image_path) {
                Storage::delete($article->image_path);
            }
            $article->image_path = $request->file('image')->store('public/articles');
        }

        $article->update([
            'title' => $validated['title'],
            'slug' => Str::slug($validated['title']),
            'short_description' => $validated['short_description'],
            'content' => $validated['content'],
            'category_id' => $validated['category_id'],
            'image_path' => $article->image_path,
        ]);

        return redirect()->route('dashboard.article.list')->with('success', 'Artikel berhasil diperbarui');
    }

public function destroy($id)
{
    $article = Article::findOrFail($id);
    $article->delete();

    return redirect()->back()->with('message', 'Artikel berhasil dihapus');
}
}
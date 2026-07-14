<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\ArticleCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use App\Support\MediaStorage;

class ArticleController extends Controller
{
    public function create()
    {
        return Inertia::render('Dashboard/Article/CreateArticle', [
            'categories' => ArticleCategory::select('id', 'name')->get(),
        ]);
    }

public function listArticle()
{
    $articles = Article::with('category')->latest()->get();

    $articles->transform(function ($article) {
        return [
            'id' => $article->id,
            'title' => $article->title,
            'slug' => $article->slug,
            'short_description' => $article->short_description,
            'content' => $article->content,
            'image' => MediaStorage::url($article->image_path, 'images/default-article.jpg'),
            'category' => $article->category ? [
                'id' => $article->category->id,
                'name' => $article->category->name,
            ] : null,
        ];
    });

    return Inertia::render('Article/Index', [
        'articles' => $articles,
    ]);
}


    public function show($slug)
    {
        $article = Article::with('category')->where('slug', $slug)->firstOrFail();

        return Inertia::render('Article/DetailArticle', [
            'article' => [
                'id' => $article->id,
                'title' => $article->title,
                'slug' => $article->slug,
                'description' => $article->short_description,
                'content' => $article->content,
                'image' => MediaStorage::url($article->image_path, 'images/default-article.jpg'),
                'category' => $article->category?->name,
                'tags' => [], // Tambahkan jika ada relasi tags
                'date' => $article->created_at->format('d M Y'),
            ],
        ]);
    }

    public function publicIndex()
    {
        return Inertia::render('Article/List', [
            'articles' => Article::with('category')->latest()->get(),
        ]);
    }

    public function adminList()
    {
        $articles = Article::with('category')->latest()->get();

        $articles->transform(function ($article) {
            return [
                'id' => $article->id,
                'title' => $article->title,
                'slug' => $article->slug,
                'short_description' => $article->short_description,
                'content' => $article->content,
                'image' => MediaStorage::url($article->image_path, 'images/default-article.jpg'),
                'category' => $article->category ? [
                    'id' => $article->category->id,
                    'name' => $article->category->name,
                ] : null,
            ];
        });

        return Inertia::render('Dashboard/Article/ListArticle', [
            'articles' => $articles,
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
            $imagePath = MediaStorage::put($request->file('image'), 'articles');
        }

        Article::create([
            'title' => $validated['title'],
            'slug' => $this->uniqueSlug($validated['title']),
            'short_description' => $validated['short_description'],
            'content' => $validated['content'],
            'category_id' => $validated['category_id'],
            'image_path' => $imagePath,
        ]);

        return redirect()->route('dashboard.article.list')->with('success', 'Artikel berhasil ditambahkan');
    }

    public function edit(string $slug)
    {
        $article = Article::with('category')->where('slug', $slug)->firstOrFail();
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

    public function update(Request $request, string $slug)
    {
        $article = Article::where('slug', $slug)->firstOrFail();

        $validated = $request->validate([
            'title' => [
                'required',
                'string',
                'max:255',
                Rule::unique('articles', 'title')->ignore($article->id),
            ],
            'short_description' => 'nullable|string',
            'content' => 'required|string',
            'category_id' => 'required|exists:article_categories,id',
            'image' => 'nullable|image|max:10240',
        ]);

        if ($request->hasFile('image')) {
            MediaStorage::delete($article->image_path);
            $article->image_path = MediaStorage::put($request->file('image'), 'articles');
        }

        $article->update([
            'title' => $validated['title'],
            'slug' => $this->uniqueSlug($validated['title'], $article->id),
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
        MediaStorage::delete($article->image_path);
        $article->delete();

        return redirect()->back()->with('message', 'Artikel berhasil dihapus');
    }

    public function save(Article $article)
    {
        $user = auth()->user();

        if (!$user) {
            return redirect()->route('login')->with('error', 'Silakan login untuk menyimpan artikel.');
        }

        $user->savedArticles()->syncWithoutDetaching($article->id);

        return back()->with('success', 'Artikel berhasil disimpan ke daftar simpanan.');
    }

    public function unsave(Article $article)
    {
        $user = auth()->user();

        if (!$user) {
            return redirect()->route('login')->with('error', 'Silakan login untuk menghapus simpanan artikel.');
        }

        $user->savedArticles()->detach($article->id);

        return back()->with('success', 'Artikel dihapus dari daftar simpanan.');
    }

    public function getSavedArticles()
    {
        $user = auth()->user();

        if ($user->role !== 'user') {
            abort(403, 'Only users can view saved articles');
        }

        $savedArticles = $user->savedArticles()->with('category')->get();

        $savedArticles->transform(function ($article) {
            return [
                'id' => $article->id,
                'title' => $article->title,
                'slug' => $article->slug,
                'short_description' => $article->short_description,
                'content' => $article->content,
                'image' => MediaStorage::url($article->image_path, 'images/default.jpg'),
                'category' => $article->category ? [
                    'id' => $article->category->id,
                    'name' => $article->category->name,
                ] : null,
            ];
        });

        return Inertia::render('Dashboard/Member/SavedArticles', [
            'savedArticles' => $savedArticles,
        ]);
    }

    private function uniqueSlug(string $title, ?int $ignoreId = null): string
    {
        $baseSlug = Str::slug($title);
        $slug = $baseSlug;
        $counter = 2;

        while (
            Article::where('slug', $slug)
                ->when($ignoreId, fn ($query) => $query->where('id', '!=', $ignoreId))
                ->exists()
        ) {
            $slug = "{$baseSlug}-{$counter}";
            $counter++;
        }

        return $slug;
    }
}

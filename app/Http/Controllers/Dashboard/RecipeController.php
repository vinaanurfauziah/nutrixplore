<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class RecipeController extends Controller
{
    public function store(Request $request)
{
    $validated = $request->validate([
        'name' => 'required|string|max:255',
        'image' => 'nullable|image|max:10240',
        'prepTime' => 'required|numeric',
        'cookTime' => 'required|numeric',
        'servings' => 'required|numeric',
        'dish' => 'nullable|string',
        'diet' => 'nullable|string',
        'allergy' => 'nullable|string',
        'nutrition' => 'nullable|string',
        'method' => 'nullable|string',
        'ingredients' => 'required|array',
        'steps' => 'required|array',
    ]);

    // Jika ada gambar diupload
    if ($request->hasFile('image')) {
        $validated['image'] = $request->file('image')->store('recipes', 'public');
    }

    // Simpan ke database (sementara hanya log ke debug)
    \Log::info('Resep baru:', $validated);

    // Redirect balik ke daftar resep
    return redirect()->route('dashboard.recipe.list')
        ->with('success', 'Resep berhasil ditambahkan!');
}

}

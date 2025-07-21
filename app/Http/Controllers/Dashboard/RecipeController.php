<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Models\Recipe;
use App\Models\HealthTag;

class RecipeController extends Controller
{
    public function index()
    {
        return Recipe::with(['ingredients', 'steps', 'nutrition', 'healthTags'])->get();
    }

    public function show($slug)
    {
        return Recipe::with(['ingredients', 'steps', 'nutrition', 'healthTags'])->where('slug', $slug)->firstOrFail();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'judul' => 'required|string',
            'slug' => 'required|string|unique:recipes,slug',
            'gambar' => 'required|string',
            'kalori' => 'required|integer',
            'durasi' => 'required|integer',
            'cook' => 'required|integer',
            'kategori_hidangan' => ['required', Rule::in(Recipe::KATEGORI_HIDANGAN)],
            'metode_memasak' => ['required', Rule::in(Recipe::METODE_MEMASAK)],
        ]);

        $recipe = Recipe::create($validated);

        return response()->json($recipe, 201);
    }

    public function update(Request $request, $id)
    {
        $recipe = Recipe::findOrFail($id);

        $validated = $request->validate([
            'judul' => 'sometimes|string',
            'slug' => 'sometimes|string|unique:recipes,slug,' . $id,
            'gambar' => 'sometimes|string',
            'kalori' => 'sometimes|integer',
            'durasi' => 'sometimes|integer',
            'cook' => 'sometimes|integer',
            'kategori_hidangan' => ['required', Rule::in(Recipe::KATEGORI_HIDANGAN)],
            'metode_memasak' => ['required', Rule::in(Recipe::METODE_MEMASAK)],
        ]);

        $recipe->update($validated);

        return response()->json($recipe);
    }

    public function destroy($id)
    {
        $recipe = Recipe::findOrFail($id);
        $recipe->delete();

        return response()->json(['message' => 'Recipe deleted']);
    }
    public function saveRecipe($id)
{
    $user = auth()->user();
    $recipe = Recipe::findOrFail($id);

    if (!$user->savedRecipes()->where('recipe_id', $id)->exists()) {
        $user->savedRecipes()->attach($recipe);
    }

    return response()->json(['message' => 'Recipe saved']);
}
public function unsaveRecipe($id)
{
    $user = auth()->user();
    $user->savedRecipes()->detach($id);

    return response()->json(['message' => 'Recipe removed from saved list']);
}
public function getSavedRecipes()
{
    $user = auth()->user();
    $savedRecipes = $user->savedRecipes()->with(['ingredients', 'steps', 'nutrition', 'healthTags'])->get();

    return response()->json($savedRecipes);
}
}
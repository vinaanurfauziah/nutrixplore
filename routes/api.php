<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Dashboard\RecipeController;
use App\Models\Recipe;
use App\Models\HealthTag;
use App\Models\Ingredient;
use App\Models\Step;
use App\Models\Nutrition;
use App\Models\HealthRecipe;
use App\Models\User;
use App\Models\HealthTagRecipe;


Route::middleware('auth:sanctum')->prefix('recipes')->group(function () {
    Route::get('/', [RecipeController::class, 'index']);
    Route::get('/{slug}', [RecipeController::class, 'show']);

    // Admin-only
    Route::post('/', [RecipeController::class, 'store']);
    Route::put('/{id}', [RecipeController::class, 'update']);
    Route::delete('/{id}', [RecipeController::class, 'destroy']);

    // User-only: simpan, unsave, lihat simpanan
    Route::post('/{id}/save', [RecipeController::class, 'saveRecipe']);
    Route::delete('/{id}/unsave', [RecipeController::class, 'unsaveRecipe']);
    Route::get('/saved/list', [RecipeController::class, 'getSavedRecipes']);
});
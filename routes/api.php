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

// Public route
Route::get('/recipes', [RecipeController::class, 'index']);
Route::get('/recipes/{id}', [RecipeController::class, 'show']);

// Private route (requires login)
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/recipes', [RecipeController::class, 'store']);
    Route::put('/recipes/{id}', [RecipeController::class, 'update']);
    Route::delete('/recipes/{id}', [RecipeController::class, 'destroy']);
});

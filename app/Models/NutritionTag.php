<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class NutritionTag extends Model
{
    protected $fillable = ['name'];

    public function recipes()
    {
        return $this->belongsToMany(Recipe::class, 'recipe_nutrition_tag');
    }
}

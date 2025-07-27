<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class NutritionTag extends Model
{
    protected $fillable = ['name'];

    public function recipes()
    {
        return $this->belongsToMany(Recipe::class, 'nutrition_tag_recipe');
    }
}

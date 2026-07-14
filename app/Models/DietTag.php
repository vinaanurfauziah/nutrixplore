<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DietTag extends Model
{
        protected $fillable = ['name'];

        public function recipes()
        {
             return $this->belongsToMany(Recipe::class, 'recipe_diet_tag');
        }
 }

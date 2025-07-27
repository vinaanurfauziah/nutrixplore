<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

    class HealthTag extends Model
    {
    protected $fillable = ['name'];

        public function recipes()
        {
             return $this->belongsToMany(Recipe::class, 'health_tag_recipe');
        }
    }

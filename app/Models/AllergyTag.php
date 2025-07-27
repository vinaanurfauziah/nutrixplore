<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AllergyTag extends Model
{
    protected $fillable = ['name'];

    public function recipes()
    {
        return $this->belongsToMany(Recipe::class, 'allergy_tag_recipe');
    }
}

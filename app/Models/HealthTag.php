<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HealthTag extends Model
{
  public function recipes() {  
    return $this->belongsToMany(Recipe::class, 'health_recipe');  
}

}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Step extends Model
{
  
    protected $fillable = ['recipe_id', 'urutan', 'deskripsi'];

    public function recipe(): BelongsTo
    {
        return $this->belongsTo(Recipe::class);
    }
}
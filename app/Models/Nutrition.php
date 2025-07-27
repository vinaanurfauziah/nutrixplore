<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Nutrition extends Model
{
 protected $fillable = ['recipe_id', 'jumlah', 'takaran', 'nama'];

    public function recipe(): BelongsTo
    {
        return $this->belongsTo(Recipe::class);
    }

public const TAKARAN = [
        'gram',
        'mg',
        'kcal',
        'IU',
    ];
}
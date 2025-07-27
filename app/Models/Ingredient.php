<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Ingredient extends Model
{
    protected $fillable = ['nama','takaran', 'jumlah', 'recipe_id'];

    public const TAKARAN = [
        'gram',
        'ml',
        'sdt',
        'sdm',
    ];
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ArticleCategory extends Model
{
      protected $fillable = ['name', 'slug'];

    public function articles()
    {
        return $this->hasMany(Article::class, 'category_id');
    }
}

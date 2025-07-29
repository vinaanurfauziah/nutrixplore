<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\User;


class Article extends Model
{
    
    protected $fillable = [
        'title',
        'slug',
        'short_description',
        'content',
        'image_path',
        'category_id',
    ];

    public function category()
    {
        return $this->belongsTo(ArticleCategory::class, 'category_id');
    }
    public function savedByUsers()
{
    return $this->belongsToMany(User::class, 'article_user')->withTimestamps();
}
}

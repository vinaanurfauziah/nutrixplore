<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Recipe extends Model
{
     const KATEGORI_HIDANGAN = [
        'Hidangan Pembuka',
        'Sarapan',
        'Hidangan Utama',
        'Hidangan Penutup',
        'Minuman',
        'Pelengkap',
        'Cemilan',
        'Hidangan Berkuah'
    ];

    const METODE_MEMASAK = [
        'Merebus',
        'Menggoreng',
        'Mengukus',
        'Memanggang',
        'Menumis',
        'Merebus Perlahan',
        'Menggulai (Stewing)',
        'Menggoreng Cepat(Stir Frying)'
    ];

    protected $fillable = [
        'judul', 'slug', 'gambar', 'kalori', 'durasi', 'cook',
        'kategori_hidangan', 'metode_memasak',
        'metode_memasak'
    ];

    public function healthTags()
    {
        return $this->belongsToMany(HealthTag::class);
    }


    public function ingredients() {
        return $this->hasMany(Ingredient::class);
    }

    public function steps() {
        return $this->hasMany(Step::class);
    }

    public function nutrition() {
        return $this->hasOne(Nutrition::class);
    }
    public function scopeFilterByCategory($query, $category)
    {
        return $query->where('kategori_hidangan', $category);
    }
    public function savedByUsers()
{
    return $this->belongsToMany(User::class, 'recipe_user')->withTimestamps();
}
    
}

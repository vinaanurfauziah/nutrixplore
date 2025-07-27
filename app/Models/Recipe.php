<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Recipe extends Model
{
     const KATEGORI_HIDANGAN = [
        'Hidangan Pembuka', 'Sarapan', 'Hidangan Utama', 'Hidangan Penutup', 'Minuman', 'Pelengkap', 'Cemilan', 'Hidangan Berkuah'
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
       
    ];

    
    
    public function ingredients() {
        return $this->hasMany(Ingredient::class);
    }
    
    public function steps() {
        return $this->hasMany(Step::class);
    }
    
   public function nutrition()
{
    return $this->hasMany(Nutrition::class);
}

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function savedByUsers()
    {
        return $this->belongsToMany(User::class, 'recipe_user')->withTimestamps();
    }
    
    public function healthTags()
    {
        return $this->belongsToMany(HealthTag::class , 'recipe_health_tag');
    }
    
public function nutritionTags() {
    return $this->belongsToMany(NutritionTag::class, 'recipe_nutrition_tag');
}

public function allergyTags() {
    return $this->belongsToMany(AllergyTag::class, 'recipe_allergy_tag');
}

public function dietTags() {
    return $this->belongsToMany(DietTag::class, 'recipe_diet_tag');
}  
}

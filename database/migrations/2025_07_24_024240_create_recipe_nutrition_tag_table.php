<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
       Schema::create('recipe_nutrition_tag', function (Blueprint $table) {
    $table->id();
    $table->foreignId('recipe_id')->constrained()->onDelete('cascade');
    $table->foreignId('nutrition_tag_id')->constrained()->onDelete('cascade');
});
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('recipe_nutrition_tag');
    }
};

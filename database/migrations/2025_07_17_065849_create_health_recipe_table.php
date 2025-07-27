<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
       Schema::create('recipe_health_tag', function (Blueprint $table) {
         $table->id();
         $table->foreignId('recipe_id')->constrained()->onDelete('cascade');
         $table->foreignId('health_tag_id')->constrained()->onDelete('cascade');
}); 

    }
    
    public function down()
    {
        Schema::dropIfExists('health_recipe');
    }
};

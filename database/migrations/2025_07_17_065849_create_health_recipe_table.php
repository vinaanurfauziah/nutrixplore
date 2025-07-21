<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('health_recipe', function (Blueprint $table) {
            $table->foreignId('recipe_id')->constrained()->onDelete('cascade');
            $table->foreignId('health_tag_id')->constrained()->onDelete('cascade');
            $table->primary(['recipe_id', 'health_tag_id']);
        });
    }

    public function down()
    {
        Schema::dropIfExists('health_recipe');
    }
};

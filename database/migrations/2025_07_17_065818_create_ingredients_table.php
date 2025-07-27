<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
     public function up()
    {
        Schema::create('ingredients', function (Blueprint $table) {
            $table->id();
            $table->foreignId('recipe_id')->constrained()->onDelete('cascade');
            $table->string('nama');
            $table->string('jumlah');
            $table->enum('takaran', [
                'gram',
                'ml',
                'sdt',
                'sdm',
            ]);
            
            $table->timestamps();
        });

    }

    public function down()
    {
        Schema::dropIfExists('ingredients');
    }
};
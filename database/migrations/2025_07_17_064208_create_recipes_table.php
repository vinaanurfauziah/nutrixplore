<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('recipes', function (Blueprint $table) {
           $table->id();
            $table->foreignId('user_id')->nullable()->constrained()->nullOnDelete();
            $table->string('judul');
            $table->string('slug')->unique();
            $table->string('gambar')->nullable();
            $table->integer('kalori');
            $table->integer('durasi');
            $table->integer('cook');
            $table->string('kategori_hidangan');
            $table->string('metode_memasak');
            $table->timestamps();
       
        });
    }

    public function down()
    {
        Schema::dropIfExists('recipes');
    }
};

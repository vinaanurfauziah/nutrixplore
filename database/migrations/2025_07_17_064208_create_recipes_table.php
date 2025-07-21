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
            $table->string('judul');
            $table->string('slug')->unique();
            $table->string('gambar');
            $table->integer('kalori');
            $table->integer('durasi');
            $table->integer('cook');
            $table->enum('kategori_hidangan', [
                'Hidangan Pembuka',
                'Sarapan',
                'Hidangan Utama',
                'Hidangan Penutup',
                'Minuman',
                'Pelengkap',
                'Cemilan',
                'Hidangan Berkuah'
            ]);
            $table->enum('metode_memasak', [
                'Merebus',
                'Menggoreng',
                'Mengukus',
                'Memanggang',
                'Menumis',
                'Merebus Perlahan',
                'Menggulai (Stewing)',
                'Menggoreng Cepat(Stir Frying)'
            ]);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('recipes');
    }
};

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{public function up()
    {
        Schema::create('nutritions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('recipe_id')->constrained()->onDelete('cascade');
            $table->integer('energi');
            $table->string('karbohidrat');
            $table->string('protein');
            $table->string('lemak');
            $table->string('serat');
            $table->string('kalium');
            $table->string('kalsium');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('nutritions');
    }
};
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
     public function up()
    {
       Schema::create('health_tags', function (Blueprint $table) {
     $table->id();
    $table->string('name')->unique();
    $table->timestamps();

});
    }

    public function down()
    {
        Schema::dropIfExists('health_tags');
    }
};

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
   Schema::table('recipe_user', function (Blueprint $table) {
            $table->timestamps(); // Tambah created_at dan updated_at
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
       Schema::table('recipe_user', function (Blueprint $table) {
            $table->dropTimestamps(); // Hapus jika rollback
        });
    }
};

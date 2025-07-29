<?php

namespace App\Providers;

use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Route; 
use App\Http\Middleware\RoleMiddleware;
use Illuminate\Support\Facades\URLs;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
      if (env('APP_ENV') === 'production') {
            URL::forceScheme('https');
        }

        Vite::prefetch(concurrency: 3);
        Route::aliasMiddleware('role', RoleMiddleware::class);
    }
}
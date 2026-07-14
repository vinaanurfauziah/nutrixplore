<?php

use Illuminate\Http\Request;
use Illuminate\Foundation\Application;

define('LARAVEL_START', microtime(true));

$storagePath = '/tmp/storage';

foreach ([
    $storagePath.'/framework/cache/data',
    $storagePath.'/framework/sessions',
    $storagePath.'/framework/views',
    $storagePath.'/logs',
] as $directory) {
    if (! is_dir($directory)) {
        mkdir($directory, 0777, true);
    }
}

$environmentDefaults = [
    'APP_CONFIG_CACHE' => '/tmp/bootstrap/cache/config.php',
    'APP_EVENTS_CACHE' => '/tmp/bootstrap/cache/events.php',
    'APP_PACKAGES_CACHE' => '/tmp/bootstrap/cache/packages.php',
    'APP_ROUTES_CACHE' => '/tmp/bootstrap/cache/routes.php',
    'APP_SERVICES_CACHE' => '/tmp/bootstrap/cache/services.php',
    'CACHE_STORE' => 'array',
    'LOG_CHANNEL' => 'stderr',
    'SESSION_DRIVER' => 'cookie',
    'VIEW_COMPILED_PATH' => $storagePath.'/framework/views',
];

if (! is_dir('/tmp/bootstrap/cache')) {
    mkdir('/tmp/bootstrap/cache', 0777, true);
}

foreach ($environmentDefaults as $key => $value) {
    if (getenv($key) === false) {
        putenv("{$key}={$value}");
        $_ENV[$key] = $value;
        $_SERVER[$key] = $value;
    }
}

if (file_exists($maintenance = $storagePath.'/framework/maintenance.php')) {
    require $maintenance;
}

require __DIR__.'/../vendor/autoload.php';

/** @var Application $app */
$app = require_once __DIR__.'/../bootstrap/app.php';

$app->handleRequest(Request::capture());

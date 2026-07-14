<?php

namespace App\Support;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

class MediaStorage
{
    public static function put(UploadedFile $file, string $directory): string
    {
        return $file->store($directory, self::disk());
    }

    public static function delete(?string $path): void
    {
        if (! $path || self::isExternalUrl($path)) {
            return;
        }

        Storage::disk(self::disk())->delete(self::normalizePath($path));
    }

    public static function url(?string $path, string $fallback): string
    {
        if (! $path) {
            return asset($fallback);
        }

        if (self::isExternalUrl($path)) {
            return $path;
        }

        return Storage::disk(self::disk())->url(self::normalizePath($path));
    }

    private static function disk(): string
    {
        $disk = config('filesystems.default', 'public');

        return $disk === 'local' ? 'public' : $disk;
    }

    private static function isExternalUrl(string $path): bool
    {
        return str_starts_with($path, 'http://') || str_starts_with($path, 'https://');
    }

    private static function normalizePath(string $path): string
    {
        return ltrim(str_replace(['public/', 'storage/'], '', $path), '/');
    }
}

FROM node:22-alpine AS frontend

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY resources ./resources
COPY public ./public
COPY vite.config.mjs postcss.config.mjs tailwind.config.mjs jsconfig.json ./
RUN npm run build

FROM php:8.3-apache AS runtime

ENV APACHE_DOCUMENT_ROOT=/var/www/html/public \
    APP_ENV=production \
    APP_DEBUG=false \
    LOG_CHANNEL=stderr \
    CACHE_STORE=array \
    SESSION_DRIVER=cookie \
    QUEUE_CONNECTION=sync

RUN apt-get update \
    && apt-get install -y --no-install-recommends libpq-dev libzip-dev unzip \
    && docker-php-ext-install -j"$(nproc)" pdo_pgsql zip \
    && a2enmod rewrite headers \
    && sed -ri 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf \
    && sed -ri 's/Listen 80/Listen 8000/' /etc/apache2/ports.conf \
    && sed -ri 's/<VirtualHost \*:80>/<VirtualHost *:8000>/' /etc/apache2/sites-available/*.conf \
    && rm -rf /var/lib/apt/lists/*

COPY --from=composer:2 /usr/bin/composer /usr/local/bin/composer

WORKDIR /var/www/html

COPY . .
COPY --from=frontend /app/public/build ./public/build

RUN composer install --no-dev --prefer-dist --no-interaction --optimize-autoloader \
    && mkdir -p storage/framework/cache/data storage/framework/sessions storage/framework/views storage/logs bootstrap/cache \
    && chown -R www-data:www-data storage bootstrap/cache

COPY docker/entrypoint.sh /usr/local/bin/nutrixplore-entrypoint
RUN chmod +x /usr/local/bin/nutrixplore-entrypoint

EXPOSE 8000

ENTRYPOINT ["nutrixplore-entrypoint"]
CMD ["apache2-foreground"]

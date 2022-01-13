const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .vue()
    .sass('resources/sass/app.scss', 'public/css');
mix.styles([
	'resources/css/bootstrap.min.css',
	'resources/css/common.css',
	'resources/css/main.css',
	'resources/css/responsive.css'
	],'public/css/all.css');
mix.js([
	'resources/scripts/script.js'
	],'public/js/all.js')
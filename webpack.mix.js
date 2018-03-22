let mix = require('laravel-mix');

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

mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css')
   .disableNotifications()
   .browserSync({proxy:'http://spa.localhost',
    files: [
        'public/lib/css/app.css',  // Generated .css file
        'public/lib/js/app.js',    // Generated .js file
        'public/**/*.+(html|php)',           // Generic .html and/or .php files [no specific platform]
        'laravel/resources/views/**/*.php',  // Laravel-specific view files
        'craft/templates/**/*.+(html|twig)'  // Craft-specific templates, as html and/or twig
    ]


});

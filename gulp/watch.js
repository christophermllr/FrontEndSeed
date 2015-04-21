/**
 * Created by jmongiat on 8/31/14.
 */
var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'main-bower-files', 'express', 'json-proxy', 'uglify-save-license', 'tiny-lr', 'opn', 'wiredep']
});

// Configs
var configDir = require('require-dir')('./config');
var source = configDir.sourceConfig;
var build = configDir.buildConfig;

function handleReload(event) {
    console.log('Reloading... :)');
    $.tinyLr.changed(event.path);
}

//---------------
// WATCH
//---------------

// Rerun the task when a file changes
gulp.task('watch', function () {

    gulp.watch(source.scripts.watch, ['scripts:app']);
    gulp.watch(source.styles.app.watch, ['styles:app']);
    gulp.watch(source.styles.themes.watch, ['styles:themes']);
    gulp.watch(source.bootstrap.watch, ['styles:app']); //bootstrap
    gulp.watch(source.templates.views.watch, ['templates:views']);
    gulp.watch(source.templates.app.watch, ['templates:app']);

    gulp.watch([
        './app/**',
        './index.html'
    ]).on('change', handleReload);
});

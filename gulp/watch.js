/**
 * Created by jmongiat on 8/31/14.
 */
"use strict";

var gulp = require('gulp'),
    config = require('./config/config'),
    $ = require('gulp-load-plugins')({
        pattern: ['gulp-*', 'tiny-lr']
    });


function handleReload(event) {
    console.log('Reloading... :)');
    $.tinyLr.changed(event.path);
}

//---------------
// WATCH
//---------------

// Rerun the task when a file changes
gulp.task('watch', ['start'], function () {

    gulp.watch(config.source.scripts.watch, ['scripts-app']);
    gulp.watch(config.source.scripts.typescript, ['compile-typescript']);
    gulp.watch(config.source.styles.app.watch, ['styles-app']);
    gulp.watch(config.source.styles.themes.watch, ['styles-themes']);
    gulp.watch(config.source.bootstrap.watch, ['styles-app']); //bootstrap
    gulp.watch(config.source.templates.views.watch, ['templates-views']);
    gulp.watch(config.source.templates.app.watch, ['templates-app']);

    gulp.watch([
        './.tmp/**'
    ]).on('change', handleReload);
});

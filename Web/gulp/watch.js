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
gulp.task('watch', ['compile-all'], function () {
    
    gulp.watch(config.paths.source.base + "/**/" + config.globs.javascript, ['scripts-app']);
    gulp.watch(config.paths.source.base + "/**/" + config.globs.typescript, ['compile-typescript']);
    gulp.watch(config.paths.source.base + "/**/" + config.globs.less, ['styles-app']);
    gulp.watch(config.paths.source.base + "/**/" + config.globs.jade, ['templates']);

    gulp.watch([config.paths.temp.base + '/**'
    ]).on('change', handleReload);
});

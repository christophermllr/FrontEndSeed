/**
 * Created by jmongiat on 8/31/14.
 */
"use strict";

var gulp = require('gulp'),
    path = require('path'),
    config = require('./config/config'),
    $ = require('gulp-load-plugins')({
        pattern: ['gulp-*', 'browser-sync']
    });


var browserSync = $.browserSync.get(config.browserSyncName);

//---------------
// WATCH
//---------------

// Rerun the task when a file changes
gulp.task('watch', ['compile-all'], function () {
    
    gulp.watch(config.paths.source.base + "/**/" + config.globs.javascript, ['scripts-app']);
    gulp.watch(config.paths.source.base + "/**/" + config.globs.typescript, ['compile-typescript']);
    gulp.watch(config.paths.source.base + "/**/" + config.globs.less, ['styles-app']);
    gulp.watch(config.paths.source.base + "/**/" + config.globs.jade, ['templates']);
    //Watch our temp to do the reload
    gulp.watch([config.paths.temp.base + '/**']).on('change', browserSync.reload);
});

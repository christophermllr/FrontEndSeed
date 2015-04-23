/**
 * Created by jmongiat on 9/2/2014.
 */
"use strict";

var gulp = require('gulp'),
    path = require('path'),
    config = require('./config/config'),
    $ = require('gulp-load-plugins')({
        pattern: ['gulp-*', 'del']
    });

var assets = $.useref.assets();


/*
 * Cleans output files and temporary files
 */
gulp.task('clean', function () {
    $.del([
        config.build.tempFolder,
        config.build.distFolder,
        config.build.appFolder
    ]);
});

gulp.task('compile', ['dist'], function () {
    
});
gulp.task('compile-dev', ['dev'], function () {

});


// Set is production build flag
// build for production (minify)
gulp.task('build', ['prod', 'default']);

gulp.task('prod', function () {
    config.build.isProduction = true;
});

// build option to
// build with sourcemaps (no minify)
gulp.task('sourcemaps', ['usesources', 'default']);
gulp.task('usesources', function () {
    config.build.useSourceMaps = true;
});

gulp.task('dev', ['start'], function () {

    gulp.src([config.build.html.all])
        .pipe(assets)
        .pipe(assets.restore())
        .pipe($.useref())
        .pipe(gulp.dest(path.join(config.build.root, config.build.devFolder)));
});
gulp.task('dist', ['prod', 'start'], function () {

    gulp.src([config.build.html.all])
        .pipe(assets)
        .pipe(assets.restore())
        .pipe($.useref())
        .pipe(gulp.dest(path.join(config.build.root, config.build.distFolder)));
});

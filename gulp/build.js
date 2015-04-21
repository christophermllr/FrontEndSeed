/**
 * Created by jmongiat on 9/2/2014.
 */
"use strict";

var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'main-bower-files']
});
var gulpSync = $.sync(gulp);


// Configs
var configDir = require('require-dir')('./config');
var source = configDir.sourceConfig;
var build = configDir.buildConfig;


/*
 * Cleans output files and temporary files
 */
gulp.task('clean', function () {
    return gulp.src([
        build.tempFolder,
        build.distFolder,
        build.appFolder,
        build.mainPage
    ], {
        read: false
    })
        .pipe($.rimraf());
});

// Set is production build flag
// build for production (minify)
gulp.task('build', ['prod', 'default']);
gulp.task('prod', function () {
    build.isProduction = true;
});

// build option to
// build with sourcemaps (no minify)
gulp.task('sourcemaps', ['usesources', 'default']);
gulp.task('usesources', function () {
    build.useSourceMaps = true;
});
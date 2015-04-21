/**
 * Created by jmongiat on 9/2/2014.
 */
"use strict";

var gulp = require('gulp');
var path = require('path');
var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'main-bower-files']
});
var gulpSync = $.sync(gulp);

var assets = $.useref.assets();

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
        build.html.main
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

gulp.task('dev', function () {


    gulp.src([build.html.main, build.html.pages])
            .pipe(assets)
            .pipe($.debug())
            .pipe(assets.restore())
            .pipe($.useref())
            .pipe(gulp.dest(path.join(build.root, build.devFolder)));
});
gulp.task('dist', function () {


    gulp.src([build.html.main, build.html.pages])
        .pipe(assets)
        .pipe($.debug())
        .pipe(assets.restore())
        .pipe($.useref())
        .pipe(gulp.dest(path.join(build.root, build.distFolder)));
});
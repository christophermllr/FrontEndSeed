/**
 * Created by jmongiat on 9/2/2014.
 */
"use strict";

var gulp = require('gulp'),
    path = require('path'),
    config = require('./config/config'),
    $ = require('gulp-load-plugins')({
        pattern: ['gulp-*', 'del', 'run-sequence']
    });

var assets = $.useref.assets();


gulp.task('build', ['dist', 'clean-dist', 'compile-dist']);
gulp.task('build-dev', ['dev', 'compile-dev']);


/*
 * Cleans output files and temporary files
 */
gulp.task('clean', function () {
    $.del.sync([
        config.build.tempFolder
    ]);
});

gulp.task('clean-dev', ['clean'], function () {
    $.del.sync([
      path.join(config.build.root, config.build.devFolder)
    ]);
});
gulp.task('clean-dist', ['clean'], function () {
    $.del.sync([
      path.join(config.build.root, config.build.distFolder)
    ]);
});


/*
 * Sets build configuration to isProduction
 */

gulp.task('dist', ['clean-dist'], function () {
    config.build.isProduction = true;
});
gulp.task('dev', ['clean-dev'], function () {
    config.build.isProduction = false;
});




gulp.task('compile-all', ['compile-assets', 'compile-templates']);
gulp.task('compile-templates', ['inject-jade'], function () {
    $.runSequence(['templates-app', 'templates-views']);
});

gulp.task('compile-assets', [
    'inject-typescript',
    'inject-less',
    'compile-typescript',
    'scripts-app',
    'styles-app',
    'styles-themes',
    'inject-jade'
]);



gulp.task('compile-dev', ['dev', 'compile-all', 'templates-app', 'templates-views'], function () {

    gulp.src([config.build.html])
        .pipe(assets)
        .pipe($.rev())
        .pipe(assets.restore())
        .pipe($.useref())
        .pipe($.revReplace())
        .pipe(gulp.dest(path.join(config.build.root, config.build.devFolder)));
});
gulp.task('compile-dist', ['dist', 'compile-all', 'templates-app', 'templates-views'], function () {

    gulp.src([config.build.html])
        .pipe(assets)
        .pipe($.rev())
        .pipe(assets.restore())
        .pipe($.useref())
        .pipe($.revReplace())
        .pipe(gulp.dest(path.join(config.build.root, config.build.distFolder)));
});



// build option to
// build with sourcemaps (no minify)
gulp.task('sourcemaps', ['usesources', 'default']);
gulp.task('usesources', function () {
    config.build.useSourceMaps = true;
});
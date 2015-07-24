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
var semanticTemp = config.paths.temp.semantic + "/**";
 
gulp.task('build', ['dist', 'clean-dist', 'compile-dist']);
gulp.task('build-dev', ['dev', 'compile-dev']);

/*
 * Sets build configuration to isProduction
 */
gulp.task('dist', ['clean-dist'], function () {
    config.isProduction = true;
});
gulp.task('dev', ['clean-dev'], function () {
    config.isProduction = false;
});

// build option to
// build with sourcemaps (no minify)
gulp.task('sourcemaps', ['usesources', 'default']);
gulp.task('usesources', function () {
    config.useSourceMaps = true;
});
/**
 * Main Gulp starting point
 */
"use strict";

var gulp = require('gulp'),
    config = require('./gulp/config/config'),
    $ = require('gulp-load-plugins')({
        pattern: ['gulp-*', 'run-sequence']
    });

var gulpSync = $.sync(gulp);

//Load related gulp files
require('require-dir')('./gulp');

gulp.task('compile-all', ['compile-assets', 'compile-templates']);
gulp.task('compile-templates', ['inject-jade'], function() {
    $.runSequence(['templates-app', 'templates-views']);
});
gulp.task('compile-assets', [
    'inject-typescript',
    'inject-less',
    'compile-typescript',
    'scripts-app',
    'styles-app',
    'styles-themes'
]);

// default (run without no minify)
gulp.task('default', function () {
    $.runSequence(['clean', 'compile-all', 'serve']);
    $.util.log($.util.colors.cyan('************'));
    $.util.log($.util.colors.cyan('* All Done *'), 'You can start editing your code, LiveReload will update your browser after any change..');
    $.util.log($.util.colors.cyan('************'));
});

/// <vs />
/**
 * Created by jmongiat on 8/31/14.
 */
"use strict";

var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'main-bower-files']
});
var gulpSync = $.sync(gulp);

// Configs
var configDir = require('require-dir')('./gulp/config');
var vendor = configDir.vendorConfig;
var source = configDir.sourceConfig;
var build = configDir.buildConfig;

//Load related gulp files
require('require-dir')('./gulp');


gulp.task('start', [
    'scripts:app',
//'scripts:vendor',
    'styles:app',
    'styles:themes',
    'templates:app',
    'templates:views',
    'dev',
    'serve'
]);



// default (run without no minify)
gulp.task('default',
    [
        'start'
    ], function () {
        $.util.log($.util.colors.cyan('************'));
        $.util.log($.util.colors.cyan('* All Done *'), 'You can start editing your code, LiveReload will update your browser after any change..');
        $.util.log($.util.colors.cyan('************'));
    });

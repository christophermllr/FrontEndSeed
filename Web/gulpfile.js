/**
 * Main Gulp starting point
 */
"use strict";

var gulp = require('gulp'),
    config = require('./gulp/config/config'),
    $ = require('gulp-load-plugins')({
        pattern: ['gulp-*', 'run-sequence']
    });

//Load related gulp files
require('require-dir')('./gulp');

// default (run without no minify)
gulp.task('default', ['compile-all', 'serve']);

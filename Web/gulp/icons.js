/**
 * Tasks for plugging icon dependencies into the environment
 */

'use strict';

var gulp = require('gulp'),
    path = require('path'),
    config = require('./config/config'),
    $ = require('gulp-load-plugins')({
        pattern: ['gulp-*']
    });

gulp.task('icons', function(){
	gulp.src('src/less/themes/default/assets/**')
        .pipe($.debug())
        .pipe(gulp.dest('.tmp/css/themes/default/assets'));
});
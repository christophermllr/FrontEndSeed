/**
 * Created by jmongiat on 9/2/2014.
 */
"use strict";

var gulp = require('gulp'),
    path = require('path'),
    config = require('./config/config'),
    $ = require('gulp-load-plugins')({
        pattern: ['gulp-*', 'del', 'fs-extra']
    });



    /*
     * Cleans output files and temporary files
     */
gulp.task('clean', function (cb) {      
    $.fsExtra.emptyDir(config.paths.output.dev.base, cb);
});

gulp.task('clean-dist', function (cb) {    
    $.fsExtra.emptyDir(config.paths.output.dist, cb);
    
});
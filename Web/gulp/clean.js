/**
 * Created by jmongiat on 9/2/2014.
 */
"use strict";

var gulp = require('gulp'),
    path = require('path'),
    config = require('./config/config'),
    $ = require('gulp-load-plugins')({
        pattern: ['gulp-*', 'del', 'vinyl-paths']
    });



    /*
     * Cleans output files and temporary files
     */
gulp.task('clean', function () { 
      
    gulp.src(config.paths.output.dev.base, {read:false})
        .pipe($.vinylPaths($.del))
        .pipe($.plumber());
});


gulp.task('clean-dist', function () {
    
    var delPaths = [];

    for(var key in config.paths.clean)
    {
        delPaths.push(path.join(config.root, config.paths.output.dist, config.paths.clean[key]));
    }
    $.del.sync(delPaths);
});
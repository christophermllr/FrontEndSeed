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

/*
 * Cleans output files and temporary files
 */
gulp.task('clean', function () {
    $.del.sync([
        config.paths.temp.base
    ]);
});

gulp.task('clean-dev', ['clean'], function () {

    var delPaths = [];

    for(var key in config.paths.clean)
    {
        delPaths.push(path.join(config.root, config.paths.output.dev, config.paths.clean[key]));
    }
    $.del.sync(delPaths);
});
gulp.task('clean-dist', ['clean'], function () {
    
    var delPaths = [];

    for(var key in config.paths.clean)
    {
        delPaths.push(path.join(config.root, config.paths.output.dist, config.paths.clean[key]));
    }
    $.del.sync(delPaths);
});
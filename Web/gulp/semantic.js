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
  
  
gulp.task('semantic', function(){
    var semanticPath = path.join(config.semantic.base, config.semantic.paths.output.packaged);
    semanticPath = semanticPath + "/**";
    
    gulp.src(semanticPath)
        .pipe(gulp.dest(config.paths.temp.semantic));
})

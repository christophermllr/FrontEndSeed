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
    
var semanticTemp = config.paths.output.dev.semantic + "/**";

var assets = $.useref.assets();
gulp.task('compile-all', ['compile-assets', 'compile-templates']);

gulp.task('compile-templates', function () {
    $.runSequence(['templates']);
});

gulp.task('compile-assets', [
    'inject',
    'compile-typescript',
    'bower-files',
    'semantic',
    'scripts-app',
    'styles-app',
    'styles-themes'
]);

gulp.task('compile-dev', ['dev', 'compile-all', 'templates'], function () {

    var outpath = path.join(config.root, config.paths.output.dev);

    gulp.src(config.paths.output.dev.base + "/**/" + config.globs.html)
        .pipe(assets)
        .pipe(assets.restore())
        .pipe($.useref())
        .pipe($.revReplace())
        .pipe(gulp.dest(outpath));   
            
    gulp.src(semanticTemp)
        .pipe(gulp.dest(path.join(outpath, 'semantic')));
});

gulp.task('compile-dist', ['dist', 'compile-all', 'templates'], function () {

    var outpath = path.join(config.root,  config.paths.output.dist)
    
    gulp.src(config.paths.output.dev.base + "/**/" + config.globs.html)
        .pipe(assets)
        .pipe($.if('*.js', $.uglify()))
        .pipe($.rev())
        .pipe(assets.restore())
        .pipe($.useref())
        .pipe($.revReplace())
        .pipe(gulp.dest(path.join(config.root, config.paths.output.dist)));
              
    gulp.src(semanticTemp)
        .pipe($.debug())
        .pipe(gulp.dest(path.join(outpath, 'semantic')));
});
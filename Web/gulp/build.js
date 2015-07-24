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

gulp.task('build', ['dist', 'clean-dist', 'compile-dist']);
gulp.task('build-dev', ['dev', 'compile-dev']);

/*
 * Cleans output files and temporary files
 */
gulp.task('clean', function () {
    $.del.sync([
        config.paths.output.dev.base
    ]);
});

gulp.task('clean-dev', ['clean'], function () {

    var delPaths = [];

    for(var key in config.paths.clean)
    {
        delPaths.push(path.join(config.root, config.paths.output.dist, config.paths.clean[key]));
    }
    $.del.sync(delPaths);
});
gulp.task('clean-dist', ['clean'], function () {
    $.del.sync([
    ]);
});


/*
 * Sets build configuration to isProduction
 */
gulp.task('dist', ['clean-dist'], function () {
    config.isProduction = true;
});
gulp.task('dev', ['clean-dev'], function () {
    config.isProduction = false;
});

gulp.task('compile-all', ['compile-assets', 'compile-templates']);

gulp.task('compile-templates', function () {
    $.runSequence(['templates']);
});

gulp.task('compile-assets', [
    'inject-typescript',
    'inject-less',
    'compile-typescript',
    'bower-files',
    'semantic',
    'scripts-app',
    'styles-app',
    'styles-themes',
]);

gulp.task('semantic', function(){
    var semanticPath = path.join(config.semantic.base, config.semantic.paths.output.packaged);
    semanticPath = semanticPath + "/**";
    
    gulp.src(semanticPath)
        .pipe($.debug())
        .pipe(gulp.dest(path.join(config.paths.output.dev.base, 'semantic/dist')));
})

gulp.task('compile-dev', ['dev', 'compile-all', 'templates'], function () {

    var outpath = path.join(config.root, config.paths.output.dev)

    gulp.src(config.paths.output.dev.base + "/**/" + config.globs.html)
        .pipe(assets)
        .pipe($.rev())
        .pipe(assets.restore())
        .pipe($.useref())
        .pipe($.revReplace())
        .pipe(gulp.dest(outpath));   
        
    var semanticPath = path.join(config.semantic.base, config.semantic.paths.output.packaged);
    semanticPath = semanticPath + "/**";
    
    gulp.src(semanticPath)
        .pipe(gulp.dest(path.join(outpath, 'semantic/dist')));
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
      
    var semanticPath = path.join(config.semantic.base, config.semantic.paths.output.packaged);
    semanticPath = semanticPath + "/**";

    gulp.src(semanticPath)
        .pipe(gulp.dest(path.join(outpath, 'semantic/dist')));
});

// build option to
// build with sourcemaps (no minify)
gulp.task('sourcemaps', ['usesources', 'default']);
gulp.task('usesources', function () {
    config.useSourceMaps = true;
});
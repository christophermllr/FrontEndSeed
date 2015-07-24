/*
 JADE Template processing
 */
"use strict";
var gulp = require('gulp'),
    config = require('./config/config'),
    $ = require('gulp-load-plugins')({
        pattern: ['gulp-*', 'main-bower-files']
    });
var assets = $.useref.assets();

// Error handler
function handleError(err) {
    console.log(err.toString());
    this.emit('end');
}   

// Javscript Application files
gulp.task('scripts-app', function () {
    return gulp.src(config.paths.source.base + "/**/" + config.globs.javascript)
        .pipe($.angularFilesort())
        .pipe(config.useSourceMaps ? $.sourcemaps.init() : $.util.noop())
        .pipe($.ngAnnotate())
        .pipe(config.isProduction ? $.uglify({preserveComments: 'some'}) : $.util.noop())
        .pipe(config.useSourceMaps ? $.sourcemaps.write() : $.util.noop())
        .pipe(gulp.dest(config.paths.output.dev.scripts));
});


gulp.task("bower-files", function(){
   gulp.src($.mainBowerFiles(), {base:config.paths.source.bower})
        .pipe(gulp.dest(config.paths.output.dev.lib));
});
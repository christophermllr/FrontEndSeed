/*
 JADE Template processing
 */
"use strict";

var gulp = require('gulp'),
    config = require('./config/config'),
    $ = require('gulp-load-plugins')({
        pattern: ['gulp-*']
    });

// Error handler
function handleError(err) {
    console.log(err.toString());
    this.emit('end');
}

gulp.task('templates',
    [
        'templates:app',
        'templates:views'
    ]);


//Wrapper task for all templates
gulp.task('templates', ['templates:app', 'templates:views']);

// Root App Templates
gulp.task('templates:app', ['scripts:app', 'styles:app', 'styles:themes', 'bootstrap', 'inject-jade'], function () {
    return gulp.src(config.source.templates.app.files)
        .pipe($.jade())
        .on("error", handleError)
        .pipe($.htmlPrettify({
            indent_char: ' ',
            indent_size: 3,
            unformatted: ['a', 'sub', 'sup', 'b', 'i', 'u']
        }))
        .pipe(gulp.dest(config.build.templates.app));
});

// Views
gulp.task('templates:views', [ 'scripts:app', 'styles:app', 'styles:themes', 'bootstrap', 'inject-jade'], function () {
    return gulp.src(config.source.templates.views.files)
        .pipe($.jade())
        .on("error", handleError)
        .pipe($.htmlPrettify({
            indent_char: ' ',
            indent_size: 3,
            unformatted: ['a', 'sub', 'sup', 'b', 'i', 'u']
        }))
        .pipe(gulp.dest(config.build.templates.views));
});


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

// JS APP
gulp.task('scripts-app', ['inject-typescript'], function () {
    // Minify and copy all JavaScript (except vendor scripts)
    return gulp.src(config.source.scripts.app)
        .pipe($.angularFilesort())
        .pipe(config.build.useSourceMaps ? $.sourcemaps.init() : $.util.noop())
        .pipe(config.build.isProduction ? $.ngAnnotate() : $.util.noop())
        .on("error", handleError)
        .pipe(config.build.isProduction ? $.uglify({preserveComments: 'some'}) : $.util.noop())
        .on("error", handleError)
        .pipe(config.build.useSourceMaps ? $.sourcemaps.write() : $.util.noop())
        .pipe(gulp.dest(config.build.scripts.app));
});

// VENDOR BUILD
gulp.task('scripts:vendor', ['scripts:vendor:base', 'scripts:vendor:app']);

//  This will be included vendor files statically
gulp.task('scripts:vendor:base', ['inject-typescript'], function () {

    // Minify and copy all JavaScript (except vendor scripts)
    return gulp.src(config.vendor.base.source)
        .pipe($.expectFile(vendor.base.source))
        .pipe(build.isProduction ? $.uglify({preserveComments: 'some'}) : $.util.noop())
        .pipe($.concat(config.vendor.base.name))
        .pipe(gulp.dest(config.vendor.base.dest));
});

// copy file from bower folder into the app vendor folder
gulp.task('scripts:vendor:app', function () {

    var jsFilter = $.filter('**/*.js');
    var cssFilter = $.filter('**/*.css');

    return gulp.src(config.vendor.app.source, {base: config.source.bower.bowerDir})
        .pipe($.expectFile(config.vendor.app.source))
        .pipe(jsFilter)
        .pipe(config.build.isProduction ? $.uglify({preserveComments: 'some'}) : $.util.noop())
        .pipe(jsFilter.restore())
        .pipe(cssFilter)
        .pipe(config.build.isProduction ? $.uglify({preserveComments: 'some'}) : $.util.noop())
        .pipe(cssFilter.restore())
        .pipe(gulp.dest(config.vendor.app.dest));

});
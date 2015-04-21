/*
 JADE Template processing
 */
"use strict";

var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'main-bower-files']
});

// Configs
var configDir = require('require-dir')('./config');
var vendor = configDir.vendorConfig;
var source = configDir.sourceConfig;
var build = configDir.buildConfig;
var options = configDir.options;

// Error handler
function handleError(err) {
    console.log(err.toString());
    this.emit('end');
}

// JS APP
gulp.task('scripts:app', function () {
    // Minify and copy all JavaScript (except vendor scripts)
    return gulp.src(source.scripts.app)
        .pipe($.angularFilesort())
        .pipe(build.useSourceMaps ? $.sourcemaps.init() : $.util.noop())
        //.pipe($.concat(build.scripts.app.main))
        .pipe(build.isProduction ? $.ngAnnotate() : $.util.noop())
        .on("error", handleError)
        .pipe(build.isProduction ? $.uglify({preserveComments: 'some'}) : $.util.noop())
        .on("error", handleError)
        .pipe(build.useSourceMaps ? $.sourcemaps.write() : $.util.noop())
        .pipe(gulp.dest(build.scripts.app.dir));
});

// VENDOR BUILD
gulp.task('scripts:vendor', ['scripts:vendor:base', 'scripts:vendor:app']);

//  This will be included vendor files statically
gulp.task('scripts:vendor:base', function () {

    // Minify and copy all JavaScript (except vendor scripts)
    return gulp.src(vendor.base.source)
        .pipe($.expectFile(vendor.base.source))
        .pipe(build.isProduction ? $.uglify({ preserveComments: 'some'}) : $.util.noop())
        .pipe($.concat(vendor.base.name))
        .pipe(gulp.dest(vendor.base.dest));
});

// copy file from bower folder into the app vendor folder
gulp.task('scripts:vendor:app', function () {

    var jsFilter = $.filter('**/*.js');
    var cssFilter = $.filter('**/*.css');

    return gulp.src(vendor.app.source, {base: source.bower.bowerDir})
        .pipe($.expectFile(vendor.app.source))
        .pipe(jsFilter)
        .pipe(build.isProduction ? $.uglify({ preserveComments: 'some' }) : $.util.noop())
        .pipe(jsFilter.restore())
        .pipe(cssFilter)
        .pipe(build.isProduction ? $.uglify({ preserveComments: 'some' }) : $.util.noop())
        .pipe(cssFilter.restore())
        .pipe(gulp.dest(vendor.app.dest));

});
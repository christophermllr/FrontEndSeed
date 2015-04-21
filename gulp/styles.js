/**
 * Created by jmongiat on 8/31/14.
 */
var gulp = require('gulp');

var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'through2', 'main-bower-files', 'express', 'json-proxy', 'uglify-save-license', 'tiny-lr', 'opn', 'wiredep']
});


// Configs
var configDir = require('require-dir')('./config');
var vendor = configDir.vendorConfig;
var source = configDir.sourceConfig;
var build = configDir.buildConfig;


// Error handler
function handleError(err) {
    console.log(err.toString());
    this.emit('end');
}


// Wrapper task for running all styles
gulp.task('styles', ['bootstrap', 'styles:app', 'styles:themes']);


// APP LESS
gulp.task('styles:app', function () {
    return gulp.src(source.styles.app.main)
        .pipe(build.useSourceMaps ? $.sourcemaps.init() : $.util.noop())
        .pipe($.less({
            paths: [source.styles.app.dir]
        }))
        .on("error", handleError)
        .pipe(build.isProduction ? $.minifyCss() : $.util.noop())
        .pipe(build.useSourceMaps ? $.sourcemaps.write() : $.util.noop())
        .pipe(gulp.dest(build.styles));
});


// LESS THEMES
gulp.task('styles:themes', function () {
    return gulp.src(source.styles.themes.main)
        .pipe($.less({
            paths: [source.styles.themes.dir]
        }))
        .on("error", handleError)
        .pipe(gulp.dest(build.styles));
});

// BOOSTRAP
gulp.task('bootstrap', function () {
    return gulp.src(source.bootstrap.main)
        .pipe($.less({
            paths: [source.bootstrap.dir]
        }))
        .on("error", handleError)
        .pipe(gulp.dest(build.styles));
});


/**
 * Compilation of LESS files
 */
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

// APP LESS
gulp.task('styles-app', function () {
    return gulp.src(config.source.styles.app.main)
        .pipe(config.build.useSourceMaps ? $.sourcemaps.init() : $.util.noop())
        .pipe($.less())
        .pipe(config.build.isProduction ? $.minifyCss() : $.util.noop())
        .pipe(config.build.useSourceMaps ? $.sourcemaps.write() : $.util.noop())
        .pipe(gulp.dest(config.build.styles));
});


// LESS THEMES
gulp.task('styles-themes', function () {
    return gulp.src(config.source.styles.themes.main)
        .pipe(config.build.useSourceMaps ? $.sourcemaps.init() : $.util.noop())
        .pipe($.less())
        .pipe(config.build.isProduction ? $.minifyCss() : $.util.noop())
        .pipe(config.build.useSourceMaps ? $.sourcemaps.write() : $.util.noop())
        .pipe(gulp.dest(config.build.styles));
});

// BOOSTRAP
gulp.task('bootstrap', function () {
    return gulp.src(config.source.bootstrap.main)
        .pipe($.less())
        .on("error", handleError)
        .pipe(gulp.dest(config.build.styles));
});


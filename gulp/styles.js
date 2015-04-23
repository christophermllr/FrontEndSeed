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


// Wrapper task for running all styles
gulp.task('styles', ['bootstrap', 'styles:app', 'styles:themes']);


// APP LESS
gulp.task('styles:app', ['clean', 'scripts:app'], function () {
    return gulp.src(config.source.styles.app.main)
        .pipe(config.build.useSourceMaps ? $.sourcemaps.init() : $.util.noop())
        .pipe($.less({
            paths: [config.source.styles.app.dir]
        }))
        .on("error", handleError)
        .pipe(config.build.isProduction ? $.minifyCss() : $.util.noop())
        .pipe(config.build.useSourceMaps ? $.sourcemaps.write() : $.util.noop())
        .pipe(gulp.dest(config.build.styles));
});


// LESS THEMES
gulp.task('styles:themes', ['clean', 'scripts:app'], function () {
    return gulp.src(config.source.styles.themes.main)
        .pipe($.less({
            paths: [config.source.styles.themes.dir]
        }))
        .on("error", handleError)
        .pipe(config.build.isProduction ? $.minifyCss() : $.util.noop())
        .pipe(config.build.useSourceMaps ? $.sourcemaps.write() : $.util.noop())
        .pipe(gulp.dest(config.build.styles));
});

// BOOSTRAP
gulp.task('bootstrap', ['clean', 'scripts:app'], function () {
    return gulp.src(config.source.bootstrap.main)
        .pipe($.less({
            paths: [config.source.bootstrap.dir]
        }))
        .on("error", handleError)
        .pipe(gulp.dest(config.build.styles));
});


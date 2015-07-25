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
    gulp.src(config.paths.source.lessMain)
        .pipe(config.useSourceMaps ? $.sourcemaps.init() : $.util.noop())
        .pipe($.less())
        .pipe(config.isProduction ? $.minifyCss() : $.util.noop())
        .pipe(config.useSourceMaps ? $.sourcemaps.write() : $.util.noop())
        .pipe(gulp.dest(config.paths.output.dev.styles));
});


// LESS THEMES
gulp.task('styles-themes', function () {
    gulp.src(config.paths.source.styles.themes + "/**/" + config.globs.less)
        .pipe(config.useSourceMaps ? $.sourcemaps.init() : $.util.noop())
        .pipe($.less())
        .pipe(config.isProduction ? $.minifyCss() : $.util.noop())
        .pipe(config.useSourceMaps ? $.sourcemaps.write() : $.util.noop())
        .pipe(gulp.dest(config.paths.output.dev.styles));
});

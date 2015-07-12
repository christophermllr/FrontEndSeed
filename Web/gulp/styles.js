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
    return gulp.src(config.paths.source.lessMain)
        .pipe(config.useSourceMaps ? $.sourcemaps.init() : $.util.noop())
        .pipe($.less({
            paths: [config.paths.source.styles]
        }))
        .pipe(config.isProduction ? $.minifyCss() : $.util.noop())
        .pipe(config.useSourceMaps ? $.sourcemaps.write() : $.util.noop())
        .pipe(gulp.dest(config.paths.temp.styles));
});


// LESS THEMES
gulp.task('styles-themes', function () {
    return gulp.src(config.paths.source.styles.themes + "/**/" + config.globs.less)
        .pipe(config.useSourceMaps ? $.sourcemaps.init() : $.util.noop())
        .pipe($.less())
        .pipe(config.isProduction ? $.minifyCss() : $.util.noop())
        .pipe(config.useSourceMaps ? $.sourcemaps.write() : $.util.noop())
        .pipe(gulp.dest(config.paths.temp.styles));
});



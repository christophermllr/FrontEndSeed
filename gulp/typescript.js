/**
 * Created by jmongiat on 4/21/15.
 */
var gulp = require('gulp'),
    config = require('./config/config'),
    $ = require('gulp-load-plugins')({
        pattern: ['gulp-*']
    });

gulp.task('ts-lint', function () {
    return gulp.src(config.source.scripts.typescript)
        .pipe($.tslint())
        .pipe($.tslint.report('prose'));
});
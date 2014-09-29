/**
 * Created by jmongiat on 9/2/2014.
 */
var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'main-bower-files', 'express', 'json-proxy', 'uglify-save-license', 'tiny-lr', 'opn', 'wiredep']
});

var karmaConfig = __dirname + '/../test/karma.conf.js';

/**
 * Run test once and exit
 */
gulp.task('test', ['wiredep'], function (done) {
    $.karma.server.start({
        configFile: karmaConfig,
        singleRun: true
    }, done);
});

/**
 * Watch for file changes and re-run tests on each change
 */
gulp.task('tdd', ['wiredep'], function (done) {
    $.karma.server.start({
        configFile: karmaConfig
    }, done);
});
/**
 * Runs unit testing using karma
 */
var gulp = require('gulp'),
    $ = require('gulp-load-plugins')({
        pattern: ['gulp-*', 'karma']
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
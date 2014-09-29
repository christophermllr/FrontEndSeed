/**
 * Created by jmongiat on 9/2/2014.
 */
var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'tiny-lr', 'karma']
});

var karma = require('karma').server;
/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
    karma.start({
        configFile: __dirname + '/../test/karma.conf.js',
        singleRun: true
    }, done);
});

/**
 * Watch for file changes and re-run tests on each change
 */
gulp.task('tdd', function (done) {
    karma.start({
        configFile: __dirname + '/../test/karma.conf.js'
    }, done);
});
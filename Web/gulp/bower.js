var gulp = require('gulp'),
    config = require('./config/config'),
    $ = require('gulp-load-plugins')({
        pattern: ['gulp-*']
    });



// Root App Templates
gulp.task('bower-install', function () {
    return $.bower();
});
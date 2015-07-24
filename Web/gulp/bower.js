var gulp = require('gulp'),
    config = require('./config/config'),
    $ = require('gulp-load-plugins')({
        pattern: ['gulp-*', 'main-bower-files']
    });



// Root App Templates
gulp.task('bower-install', function () {
    return $.bower();
});

gulp.task("bower-files", function(){
   gulp.src($.mainBowerFiles(), {base:config.paths.source.bower})
        .pipe(gulp.dest(config.paths.output.dev.lib));
});
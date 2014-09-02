/**
 * Created by jmongiat on 8/31/14.
 */
var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'main-bower-files']
});

var options = {
    folders: {
        distFolder: 'dist',
        tempFolder: '.tmp',
        appFolder: 'app'
    }
}


//Load related gulp files
require('require-dir')('./gulp');


gulp.task('default', ['clean'], function() {
    // place code for your default task here
});

gulp.task('clean', function() {
    return gulp.src([options.folders.tempFolder,
            options.folders.distFolder
        ], {
            read: false
        })
        .pipe($.rimraf());
})


gulp.task('prettify', function() {
    gulp.src('./gulpfile.js')
        .pipe($.jsbeautifier({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('./')) // edit in place

    gulp.src('./app/**/*.html')
        .pipe($.jsbeautifier({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('./app')) // edit in place
});

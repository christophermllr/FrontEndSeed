/**
 * Created by jmongiat on 9/2/2014.
 */
var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'main-bower-files', 'express', 'json-proxy', 'uglify-save-license', 'tiny-lr', 'opn', 'wiredep']
});



gulp.task('prettify', function() {

    console.log('Prettifying... ఠ_ఠ')

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

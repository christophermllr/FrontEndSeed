/**
 * Created by jmongiat on 8/31/14.
 */
var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license']
});



gulp.task('watch', function () {
    gulp.watch('app/styles/**/*.less', ['styles']);
    gulp.watch('bower.json', ['wiredep']);
});

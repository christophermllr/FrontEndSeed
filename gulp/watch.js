/**
 * Created by jmongiat on 8/31/14.
 */
var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'main-bower-files', 'express', 'json-proxy', 'uglify-save-license', 'tiny-lr', 'opn', 'wiredep', 'karma']
});



gulp.task('watch', function () {
    gulp.watch('app/styles/**/*.less', ['styles']);
    gulp.watch('bower.json', ['wiredep']);
    gulp.watch('app/scripts/**/*.js',['prettify'])

    gulp.watch([
        'app/*.html',
        '.tmp/styles/**/*.css',
        'app/scripts/**/*.js',
        'app/images/**/*'
    ]).on('change', handleReload);
});


function handleReload(event) {
    console.log('Reloading... :)')
    $.tinyLr.changed(event.path);
}
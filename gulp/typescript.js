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

/**
 * Compile TypeScript and include references to library and app .d.ts files.
 */
gulp.task('compile-typescript', ['inject-typescript'], function () {
    var sourceTsFiles = [config.source.scripts.typescript,                //path to typescript files                         
                         config.source.scripts.referenceFile];     //reference to app.d.ts files

    sourceTsFiles = sourceTsFiles.concat(config.source.scripts.typings);

    var tsResult = gulp.src(sourceTsFiles)
                       .pipe($.sourcemaps.init())
                       .pipe($.typescript({
                           target: 'ES5',
                           declarationFiles: false,
                           noExternalResolve: true
                       }));

    tsResult.dts.pipe(gulp.dest(config.build.scripts.app.dir));
    return tsResult.js
                    .pipe($.sourcemaps.write('.'))
                    .pipe(gulp.dest(config.build.scripts.app.dir));
});

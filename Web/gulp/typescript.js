/**
 * Created by jmongiat on 4/21/15.
 */
var gulp = require('gulp'),
    config = require('./config/config'),
    $ = require('gulp-load-plugins')({
        pattern: ['gulp-*']
    });

gulp.task('ts-lint', function () {
    return gulp.src(config.paths.source.base + "/**/" + config.globs.typescript)
        .pipe($.tslint())
        .pipe($.tslint.report('prose'));
});

/**
 * Compile TypeScript and include references to library and app .d.ts files.
 */
gulp.task('compile-typescript', function () {
    var sourceTsFiles = [config.paths.source.base + "/**/" + config.globs.typescript,
                         config.paths.source.tsd,
                         config.paths.typings + "/**/" + config.globs.typescript];

    var tsResult = gulp.src(sourceTsFiles)
                       .pipe($.sourcemaps.init())
                       .pipe($.typescript({
                           target: 'ES5',
                           declarationFiles: false,
                           noExternalResolve: false
                       }));

    tsResult.dts.pipe(gulp.dest(config.paths.output.dev.scripts));
    return tsResult.js
                    .pipe(config.isProduction ? $.uglify({preserveComments: 'some'}) : $.util.noop())
                    .pipe($.sourcemaps.write())
                    .pipe(gulp.dest(config.paths.output.dev.scripts));
});

/**
 * Compile TypeScript and include references to library and app .d.ts files.
 */
gulp.task('compile-typescript-tests', function () {
    var sourceTsFiles = [config.paths.test.base + "/**/" + config.globs.typescript,
                         config.paths.source.tsd,
                         config.paths.typings + "/**/" + config.globs.typescript];

    var tsResult = gulp.src(sourceTsFiles)
                       .pipe($.sourcemaps.init())
                       .pipe($.typescript({
                           target: 'ES5',
                           declarationFiles: false,
                           noExternalResolve: false
                       }));

    tsResult.dts.pipe(gulp.dest(config.paths.output.test));
    return tsResult.js
                    .pipe(config.isProduction ? $.uglify({preserveComments: 'some'}) : $.util.noop())
                    .pipe($.sourcemaps.write())
                    .pipe(gulp.dest(config.paths.output.test));
});
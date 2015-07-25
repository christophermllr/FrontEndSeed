/**
 * Tasks for plugging file dependencies into the environment
 */

'use strict';

var gulp = require('gulp'),
    path = require('path'),
    config = require('./config/config'),
    $ = require('gulp-load-plugins')({
        pattern: ['gulp-*', 'main-bower-files', 'wiredep']
    });
var wiredep = $.wiredep.stream;

/*
* Primary task for injecting into source files
*/
gulp.task('inject', ['inject-jade', 'inject-typescript']);


// Injects all references into jade files
gulp.task('inject-jade', ['inject-typescript', 'compile-typescript', 'scripts-app'], function () {
    
    var angularSources = gulp.src(path.join(config.paths.output.dev.scripts, '/**/' + config.globs.javascript)).pipe($.angularFilesort());
    var bowerSources = gulp.src($.mainBowerFiles(), {read:false});

    return gulp.src(config.paths.source.base + "/**/" + config.globs.jade)
        .pipe($.inject(angularSources, {
            read: false,
            ignorePath: config.paths.output.dev.base,
            addRootSlash: false,
        }))
        .pipe($.inject(bowerSources, {
            name:'bower', 
            ignorePath:'bower_components', 
            addRootSlash:false, 
            addPrefix:'lib'
        }))       
        .pipe(gulp.dest(config.paths.source.base));

});

gulp.task('inject-typescript', function () {
    var sourceFiles = ['!' + config.paths.source.tsd,
                       config.paths.source.base + "/**/" + config.globs.typescript,
                       config.paths.typings + "/**/" + config.globs.typescript];

  
    var sources = gulp.src(sourceFiles);

    gulp.src(config.paths.source.tsd)
        .pipe($.inject(sources, {
            starttag: '//{',
            endtag: '//}',
            relative: true,
            transform: function (filepath) {
                return '/// <reference path="' + filepath + '" />';
            }
        }))
        .pipe(gulp.dest(config.paths.typings));

});

gulp.task('inject-karma', ['inject-typescript'], function () {

    // Wire up the karma configuration file with Bower dependencies
    gulp.src('test/karma.conf.js')
        .pipe(wiredep({
            devDependencies: true,

            fileTypes: {
                js: {
                    block: /(([\s\t]*)\/\/\s*bower:*(\S*))(\n|\r|.)*?(\/\/\s*endbower)/gi,
                    detect: {
                        js: /'(.*\.js)'/gi
                    },
                    replace: {
                        js: '\'{{filePath}}\','
                    }
                }
            }
        }))
        .pipe(gulp.dest('test'));

});

    var angularSources = gulp.src(path.join(config.paths.output.dev.scripts, '/**/*.js')).pipe($.angularFilesort());


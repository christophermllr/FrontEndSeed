/**
 * Tasks for plugging file dependencies into the environment
 */

'use strict';

var gulp = require('gulp'),
    config = require('./config/config'),
    $ = require('gulp-load-plugins')({
        pattern: ['gulp-*', 'main-bower-files', 'wiredep']
    });

var wiredep = $.wiredep.stream;


gulp.task('inject-less', ['inject-typescript'], function () {

    //Wire Bower into LESS files
    gulp.src('app/styles/*.less')
        .pipe(wiredep({
            directory: config.source.bowerDir
        }))
        .pipe(gulp.dest(config.build.styles));
});

gulp.task('inject-typescript', function () {
    var sources = gulp.src(config.source.scripts.typings);

    gulp.src(config.source.scripts.referenceFile)
        .pipe($.inject(sources, {
            starttag: '//{',
            endtag: '//}',
            relative: true,
            transform: function (filepath) {
                return '/// <reference path="' + filepath + '" />';
            }
        }))
        .pipe(gulp.dest(config.source.scripts.typingsFolder));

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

gulp.task('inject-jade', ['inject-typescript', 'inject-less'], function () {
    var angularSources = gulp.src(config.source.root + '/**/*.js').pipe($.angularFilesort());


    gulp.src(config.source.templates.app.files, config.source.templates.views.files)
        .pipe($.inject(angularSources, {
            read: false,
            starttag: '//- {{name}}:{{ext}}',
            endtag: '//- endinject',
            relative: true,
            addPrefix: 'js'
        }))
      .pipe(wiredep({
          jade: {
              block: /(([ \t]*)\/\/\s*bower:*(\S*))(\n|\r|.)*?(\/\/\s*endbower)/gi,
              detect: {
                  js: /script\(.*src=['"]([^'"]+)/gi,
                  css: /link\(.*href=['"]([^'"]+)/gi
              },
              replace: {
                  js: 'script(src=\'{{filePath}}\')',
                  css: 'link(rel=\'stylesheet\', href=\'{{filePath}}\')'
              }
          }
      }));

});



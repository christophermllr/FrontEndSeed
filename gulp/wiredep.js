/**
 * Tasks for plugging file dependencies into the environment
 */

'use strict';

var gulp = require('gulp'),
    config = require('./config/config'),
    $ = require('gulp-load-plugins')({
        pattern: ['gulp-*', 'main-bower-files', 'wiredep']
    });


gulp.task('wiredep', function () {
    var wiredep = $.wiredep.stream,
        angularSources = gulp.src(config.source.root + '/**/*.js').pipe($.angularFilesort());

    gulp.src('app/styles/*.less')
        .pipe(wiredep({
            directory: config.source.bowerDir
        }))
        .pipe(gulp.dest(config.build.styles));

    gulp.src('app/*.html')
        .pipe(wiredep({
            directory: config.source.bowerDir,
            exclude: []
        }))
        .pipe(gulp.dest('app'));

    gulp.src(config.source.templates.app.files, config.source.templates.views.files)
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
        }))
        .pipe($.inject(angularSources, {
            read: false,
            starttag: '//- {{name}}:{{ext}}',
            endtag: '//- endinject',
            relative: true,
            addPrefix: 'js'
        }))
        .pipe(gulp.dest(config.source.root));

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

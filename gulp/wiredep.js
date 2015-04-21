'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'main-bower-files', 'express', 'json-proxy', 'uglify-save-license', 'tiny-lr', 'opn', 'wiredep', 'karma']
});


// Configs
var configDir = require('require-dir')('./config');
var source = configDir.sourceConfig;
var build = configDir.buildConfig;

// inject bower components
gulp.task('wiredep', function () {
    var wiredep = $.wiredep.stream;

    var angularSources = gulp.src(source.root + '/**/*.js').pipe($.angularFilesort());

    gulp.src('app/styles/*.less')
        .pipe(wiredep({
            directory: source.bowerDir
        }))
        .pipe(gulp.dest('app/styles'));

    gulp.src('app/*.html')
        .pipe(wiredep({
            directory: source.bowerDir,
            exclude: []
        }))
        .pipe(gulp.dest('app'));
   
    gulp.src(source.templates.app.files, source.templates.views.files)
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
            },
        }))
        .pipe($.inject(angularSources, { 
            read: false, 
            starttag: '//- {{name}}:{{ext}}',
            endtag: '//- endinject',
            relative: true,
            addPrefix: 'js'
        }))
        .pipe(gulp.dest(source.root));

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

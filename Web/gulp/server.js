'use strict';

var gulp = require('gulp'),
    path = require('path'),
    config = require('./config/config'),
    $ = require('gulp-load-plugins')({
        pattern: ['gulp-*', 'express', 'json-proxy', 'browser-sync', 'connect-browser-sync']
    });

var browserSync = $.browserSync.create(config.browserSyncName);

//Main server task
gulp.task('serve', ['watch'], function () {
    startServer(config.jsonProxy.devProxyTarget, config.ports.SERVER_PORT);
});

//QA endpoint
gulp.task('serve:qa', ['watch'], function () {
    startServer(config.jsonProxy.qaProxyTarget, config.ports.SERVER_PORT);
});

//E2E needs
gulp.task('serve:e2e', ['watch'], function () {
    startServer(config.jsonProxy.devProxyTarget, config.ports.E2E_PORT);
});


/*
 Setup the server
 */
function startServer(proxyUrl, serverPort) {

    var app = $.express();    
    app.use($.connectBrowserSync(browserSyncInit(serverPort)))
    app.use(jsonProxyInit(proxyUrl));    
    app.use($.express.static(config.paths.temp.base));
    app.use('/bower_components', $.express.static(config.paths.source.bower));
    app.use('/fonts', $.express.static(config.paths.source.bower + '/bootstrap/fonts/'));
    app.listen(serverPort);
}


//Setup the browser sync
var browserSyncInit = function(serverPort){

    browserSync.init({
        proxy: 'localhost:' + serverPort,
        logSnippet: false,
        snippetOptions: {      
            // Provide a custom Regex for inserting the snippet.
            rule: {
                match: /<\/body>/i,
                fn: function (snippet, match) {
                    return snippet + match;
                }
            }
        }
    });
    return browserSync;
}

//Setup the proxy
var jsonProxyInit = function (proxyUrl) {
    return $.jsonProxy.initialize({
        proxy: {
            forward: {
                '/api': proxyUrl
            }
        }
    });
};
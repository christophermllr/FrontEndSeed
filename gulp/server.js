'use strict';

var gulp = require('gulp'),
    path = require('path'),
    config = require('./config/config'),
    $ = require('gulp-load-plugins')({
        pattern: ['gulp-*', 'express', 'json-proxy', 'tiny-lr', 'opn', 'connect-livereload']
    });




var devProxyTarget = 'http://localhost:9999';
var qaProxyTarget = 'http://localhost:9999';


//Main server task
gulp.task('serve', ['watch'], function () {
    startServer(devProxyTarget, config.ports.SERVER_PORT);
    startLivereload();
    $.opn('http://localhost:' + config.ports.SERVER_PORT);

});

//QA endpoint
gulp.task('serve:qa', ['watch'], function () {
    startServer(qaProxyTarget, config.ports.SERVER_PORT);
    startLivereload();
    $.opn('http://localhost:' + config.ports.SERVER_PORT);
});

//E2E needs
gulp.task('serve:e2e', ['watch'], function () {
    startServer(devProxyTarget, config.ports.E2E_PORT);
});


/*
 Setup the server
 */
function startServer(proxyUrl, serverPort) {
    var app = $.express();

    app.use(jsonProxyInit(proxyUrl));

    app.use($.connectLivereload());
    app.use($.express.static(config.build.tempFolder));
    app.use($.express.static(config.build.appFolder));
    app.use('/bower_components', $.express.static(config.source.bower.bowerDir));
    app.use('/fonts', $.express.static('./bower_components/bootstrap/fonts/'));

    app.listen(serverPort);
}

// We'll need a reference to the tinylr
// object to send notifications of file changes
// further down
function startLivereload() {
    var lr = $.tinyLr();
    lr.listen(config.ports.LIVERELOAD_PORT);
}

function handleReload(event) {
    $.tinylr.changed(event.path);
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
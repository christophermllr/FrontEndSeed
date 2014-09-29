'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'main-bower-files', 'express', 'json-proxy', 'uglify-save-license', 'tiny-lr', 'opn', 'wiredep', 'karma']
});

var LIVERELOAD_PORT = 35729;
var SERVER_PORT = 9000;
var E2E_PORT = 3000;

var devProxyTarget = 'http://localhost:9999';
var qaProxyTarget = 'http://localhost:9999';


//Main server task
gulp.task('serve', ['watch'], function () {
    startServer(devProxyTarget, SERVER_PORT);
    startLivereload();
    $.opn('http://localhost:' + SERVER_PORT);

});

//QA endpoint
gulp.task('serve:qa', ['watch'], function () {
    startServer(qaProxyTarget, SERVER_PORT);
    startLivereload();
    $.opn('http://localhost:' + SERVER_PORT);
});

//E2E needs
gulp.task('serve:e2e', ['watch'], function () {
    startServer(devProxyTarget, E2E_PORT);
});


/*
 Setup the server
 */
function startServer(proxyUrl, serverPort) {

    var app = $.express();

    app.use(jsonProxyInit(proxyUrl));

    app.use(require('connect-livereload')());

    app.use($.express.static('.tmp'));
    app.use($.express.static('app'));

    app.use('/fonts', $.express.static('app/bower_components/bootstrap/fonts/'))

    app.listen(serverPort);
}

// We'll need a reference to the tinylr
// object to send notifications of file changes
// further down
function startLivereload() {
    var lr = $.tinyLr();
    lr.listen(LIVERELOAD_PORT);
}

function handleReload(event) {
    $.tinylr.changed(event.path);
}

//Setup the proxy

var jsonProxyInit = function (proxyUrl) {
    return  $.jsonProxy.initialize({
        proxy: {
            forward: {
                '/api': proxyUrl
            }
        }
    });
};
(function () {

    'use strict';

    var configDir = require('require-dir')('./'),
        ports = {
            LIVERELOAD_PORT: 35729,
            SERVER_PORT: 9000,
            E2E_PORT: 3000
        };

    module.exports.source = configDir.sourceConfig;
    module.exports.build = configDir.buildConfig;
    module.exports.ports = ports;
    module.exports.w3c = configDir.w3cConfig;
})();
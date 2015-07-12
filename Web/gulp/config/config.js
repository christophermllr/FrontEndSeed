(function () {

    'use strict';
    var configDir = require('require-dir')('./');    
    module.exports = configDir.frontEndBuild;
    module.exports.w3c = configDir.w3cConfig;
})();
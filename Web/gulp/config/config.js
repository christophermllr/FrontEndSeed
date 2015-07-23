(function () {

    'use strict';
    var configDir = require('require-dir')('./');    
    var semantic = require('./../../semantic');
    module.exports = configDir.frontEndBuild;
    module.exports.w3c = configDir.w3cConfig;
    module.exports.semantic = semantic;
})();
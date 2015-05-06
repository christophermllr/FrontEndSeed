// VENDOR CONFIG
var vendor = {
    // vendor scripts required to start the app
    base: {
        source: '',//require('./../src/vendor.base.json'),
        dest: './app/js',
        name: 'base.js'
    },
    // vendor scripts to make to app work. Usually via lazy loading
    app: {
        source: '',//require('./../src/vendor.json'),
        dest: './vendor'
    }
};

module.exports = vendor;
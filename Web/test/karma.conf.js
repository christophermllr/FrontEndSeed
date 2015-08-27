// Karma configuration
// Generated on Sun Sep 28 2014 17:41:20 GMT-0500 (CDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '../dev/',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
        // bower
        "lib/angular/angular.js",
        "lib/angular-ui-router/release/angular-ui-router.js",
        "lib/jquery/dist/jquery.js",
        "lib/angular-mocks/angular-mocks.js",
        // endbower
        // js
        "js/shared/editor-form/editor-form-module.js",
        "js/shared/editor-form/editor-form-directive.js",
        "js/shared/core/IViewModel.js",
        "js/shared/core/INamed.js",
        "js/shared/core/IIdentified.js",
        "js/underscore/underscore-module.js",
        "js/taskpane/taskpane-module.js",
        "js/taskpane/taskpane-directive.js",
        "js/projects/project-module.js",
        "js/projects/add-project-controller.js",
        "js/projects/IAddProjectViewModel.js",
        "js/module-a/module-a-module.js",
        "js/module-a/module-a-demo-controller.js",
        "js/module-a/IDemoModel.js",
        "js/main.js",
        "js/navigation/navigation-controller.js",
        "js/module-b/module-b.js",
        "js/module-b/module-b-index-controller.js",
        "js/core/INamed.js",
        "js/core/IIdentified.js"
        // endjs
          ,
          "test/**/*.js"
        ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],
  });
};

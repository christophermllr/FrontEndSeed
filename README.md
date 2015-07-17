FrontEndSeed
============

This project serves as a basic structure for your front end code and build.   The key features of the build process include:

* Live preview and re-load system that allows you to edit, save, and automatically preview your files in the browser
* LESS stylesheet compilation
* Jade template compilation for HTML code
* A JSON proxy that allows you to hit a REST API without configuring CORS
* Automated unit testing with Karma, Jasmine, and phantomjs

# Using the build system

Once you've installed all of the NPM and Bower dependencies, you can simply run `gulp` command line.   This compiles and runs the default LiveReload server and system.  

## Prerequisites

In order for front-end dev you should install the following items:

* Node - [http://nodejs.org](http://nodejs.org)
* Gulp js plugin - See below

### Installing gulp
The build leverages [gulpjs](http://www.gulpjs.com) for automating the build project.   Gulp is delivered a s a node js module
. In order to install the packages, run the following command in the command prompt after node is installed

```
npm install -g gulp
```

### Key gulp tasks

There are several useful tasks  in gulp to get you going, ultimately you can run ``gulp`` and the default task will create a livereload server on port 9000

Other tasks of interest include ``gulp build`` which runs a dist build and places it under the *build\dist* folder, or ``gulp build-dev`` which creates a dev build and places it under the *build\dev* folder

## Dev Dependencies

- [browser-sync](https://github.com/git+https:/): Live CSS Reload &amp; Browser Syncing
- [connect-browser-sync](https://github.com/schmich/connect-browser-sync): Connect middleware for BrowserSync.
- [del](https://github.com/git+https:/): Delete files/folders using globs
- [express](https://github.com/strongloop/express): Fast, unopinionated, minimalist web framework
- [gulp](https://github.com/git+https:/): The streaming build system
- [gulp-angular-filesort](https://github.com/klei/gulp-angular-filesort): Automatically sort AngularJS app files depending on module definitions and usage
- [gulp-concat](https://github.com/git+https:/): Concatenates files
- [gulp-csso](https://github.com/ben-eb/gulp-csso): Minify CSS with CSSO.
- [gulp-debug](https://github.com/sindresorhus/gulp-debug): Debug vinyl file streams to see what files are run through your gulp pipeline
- [gulp-html-prettify](https://github.com/colynb/gulp-html-prettify): HTML Prettify Plugin for Gulp
- [gulp-if](https://github.com/robrich/gulp-if): Conditionally run a task
- [gulp-inject](https://github.com/klei/gulp-inject): A javascript, stylesheet and webcomponent injection plugin for Gulp, i.e. inject file references into your index.html
- [gulp-inject-reload](https://github.com/Schmicko/gulp-inject-reload): Injects a Live Reload script into your files
- [gulp-jade](https://github.com/git+https:/): Compile Jade templates
- [gulp-jade-usemin](https://github.com/gdi2290/gulp-jade-usemin): Gulp plugin for running usemin on Jade files
- [gulp-less](https://github.com/plus3network/gulp-less): Less for Gulp
- [gulp-load-plugins](https://github.com/jackfranklin/gulp-load-plugins): Automatically load any gulp plugins in your package.json
- [gulp-minify-css](https://github.com/git+https:/): Minify css with clean-css.
- [gulp-minify-html](https://github.com/git+https:/): Minify html with minimize.
- [gulp-ng-annotate](https://github.com/Kagami/gulp-ng-annotate): Add angularjs dependency injection annotations with ng-annotate
- [gulp-rev](https://github.com/sindresorhus/gulp-rev): Static asset revisioning by appending content hash to filenames: unicorn.css =&gt; unicorn-098f6bcd.css
- [gulp-rev-replace](https://github.com/jamesknelson/gulp-rev-replace): Rewrite occurences of filenames which have been renamed by gulp-rev
- [gulp-sourcemaps](https://github.com/floridoo/gulp-sourcemaps): Source map support for Gulp.js
- [gulp-sync](https://github.com/kaminaly/gulp-sync): sync for dependency tasks of gulp.task method
- [gulp-tslint](https://github.com/panuhorsmalahti/gulp-tslint): TypeScript linter Gulp plugin
- [gulp-typescript](https://github.com/git+https:/): A typescript compiler for gulp with incremental compilation support.
- [gulp-uglify](https://github.com/terinjokes/gulp-uglify): Minify files with UglifyJS.
- [gulp-useref](https://github.com/jonkemp/gulp-useref): Parse build blocks in HTML files to replace references to non-optimized scripts or stylesheets.
- [gulp-util](https://github.com/git+https:/): Utility functions for gulp plugins
- [gulp-watch](https://github.com/floatdrop/gulp-watch): Watch, that actually is an endless stream
- [jasmine](https://github.com/jasmine/jasmine-npm): Command line jasmine
- [json-proxy](https://github.com/steve-jansen/json-proxy): Grunt plugin / CLI utility / Express middleware to proxy API requests to remote servers without CORS or JSONP.
- [karma](https://github.com/karma-runner/karma): Spectacular Test Runner for JavaScript.
- [karma-jasmine](https://github.com/karma-runner/karma-jasmine): A Karma plugin - adapter for Jasmine testing framework.
- [karma-phantomjs-launcher](https://github.com/karma-runner/karma-phantomjs-launcher): A Karma plugin. Launcher for PhantomJS.
- [require-dir](https://github.com/aseemk/requireDir): Helper to require() directories.
- [run-sequence](https://github.com/OverZealous/run-sequence): Run a series of dependent gulp tasks in order
- [wiredep](https://github.com/taptapship/wiredep): Wire Bower dependencies to your source code.

## File Structure
There are several key files in the file system that are used for the build process.  These are highlighted in the listing below.

```
Project Root
|   Web
	+-- gulfile.js - The primary buildfile for the system, loads the files with the Gulp folder
	+-- gulp - Folder contains most of the build logic and configuration
	|   +-- buildConfig.js - The build target and destination folder configuration parameters 
	|   +-- e2e-test.js - Placeholder for running end-to-end automated tests
	|   +-- options.js - Some common settings used by the live 
	|   +-- scripts.js - Preparation of Javascript files
	|   +-- server.js - The hosting of code in an Expressje server
	|   +-- sourceConfig.js - Configuration parameters used to locate your source (JS, Jade, and LESS) files for compilation 
	|   +-- styles.js - A set of gulp tasks for managing and building LESS files
	|   +-- templates.js - A set of gulp tasks for managing and building Jade files
	|   +-- unit-test.js - A set of gulp tasks for running the Karma, Jasmine, and PhantomJs-based unit testing
	|   +-- vendorConfig.js - Configuration parameters used to setup the 3rd party librarys
	|   +-- w3cConfig.js - w3c Validation configuration parameters
	|   +-- watch.js - A set of tasks for watching, recompiling, and reloading the files
	|   +-- wiredep.js - A set of tasks for automatically wiring bower dependencies into source files

```

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


## File Structure
There are several key files in the file system that are used for the build process.  These are highlighted in the listing below.

```
Project root 
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

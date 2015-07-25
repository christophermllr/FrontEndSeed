/**
 * Created by jmongiat on 9/2/2014.
 */
(function () {

"use strict";

var gulp = require('gulp'),
    path = require('path'),
    config = require('./config/config'),
    $ = require('gulp-load-plugins')({
        pattern: ['gulp-*', 'del', 'run-sequence']
    });
  
var semanticExcludes= '!' + path.join(config.semantic.base, config.semantic.paths.output.uncompressed) +  "**";
var notSemanticComponents= '!' + path.join(config.semantic.base, config.semantic.paths.output.uncompressed);    
var semanticPath = path.join(config.semantic.base, config.semantic.paths.output.packaged) + "**";
var semanticItemsCollection = [semanticExcludes, notSemanticComponents, semanticPath];

  
gulp.task('semantic', function(){
    gulp.src(semanticItemsCollection)
        .pipe(gulp.dest(config.paths.output.dev.semantic));
})  

module.exports.semanticItems  = semanticItemsCollection;
})();
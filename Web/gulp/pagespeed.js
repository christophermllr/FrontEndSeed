
/**
 * Created by jmongiat on 9/2/2014.
 */
"use strict";

var gulp = require('gulp'),
    path = require('path'),
    psi = require('psi'),
    config = require('./config/config'),
    $ = require('gulp-load-plugins')({
        pattern: ['gulp-*', 'psi']
    });

    var printResults = function(err, data, cb){
        if(err){
            console.error(err);
        }
        console.info(data);
        cb();
    }
	
    gulp.task('psi-mobile', function(cb){
       return psi.output('http://frontend-seed-dev.azurewebsites.net/', {
           nokey: 'true',
           strategy: 'mobile'
       }, function(err,data){
           printResults(err, data, cb)
       });
    });
    
    
	var pageSpeed = function(site, options, cb){
        return psi(site, options, cb);
    }
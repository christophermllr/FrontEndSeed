(function(){
	'use strict';
	
	var gulp = require('gulp'),
    config = require('./../config/config'),
    $ = require('gulp-load-plugins')({
        pattern: ['gulp-*','gulp-deploy-azure-cdn']
    });

	gulp.task('deploy-azure-cdn', function(){
		gulp.src(deployItems())
			.pipe($.debug())
			.pipe($.deployAzureCdn(deployOptions()));
	});
	
	gulp.task('cdnify-html', function(){

		
		gulp.src(cdnifyItems())
			.pipe($.debug())
			.pipe($.cdnify(cdnifyOptions()))
			.pipe(gulp.dest(config.paths.output.dist));
	});

	var deployItems = function(){
		return [
			config.paths.output.dist + "/**/" + config.globs.css,
			config.paths.output.dist + "/**/" + config.globs.javascript,
			config.paths.output.dist + "/**/*.{ttf,woff,svg,eot,png}"
		];
	}
	
	var cdnifyItems = function(){
		var cdnify = [config.paths.output.dist + '/**/' + config.globs.html];
		return cdnify;
	}
	
	var cdnifyOptions = function(){
		return {
			base:'http://wmpfrontendseeddev.blob.core.windows.net/assets/'
		}
	} 
	var deployOptions = function(){
		var accountName = 'wmpfrontendseeddev';
		var accountKey = 'OpGgNqQ27DLWC2rpuP7LlBtSYTEoEBWdcsZ2SEzeEMGOyzDnwYAlTsZE2DcWxS9avPYbNK+R0gLkAV0zh1jy1Q==';
		var containerName = 'assets'
		var options = {
			containerName: containerName,
			serviceOptions: [accountName, accountKey],
			zip:true
		}
		
		
		return options;
		  
	}
})()
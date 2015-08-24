/// <reference path='../../../typings/tsd.d.ts' />
module EditorForm {
    'use strict';
    
	export function EditorFormDirective() : ng.IDirective{
		return {	
			restrict:'EA',
			transclude:true,
			scope: {
				saveEnabled:'=',
				saveDisabled:'=',
				formTitle: '@'				
			},
			templateUrl:'shared/editor-form/editor-form-template.html'
		}	
	}		
	var module = angular.module('EditorForm');
	module.directive('editorForm', EditorFormDirective);
	
}
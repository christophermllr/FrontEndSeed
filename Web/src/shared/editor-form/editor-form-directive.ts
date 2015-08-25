/// <reference path='../../../typings/tsd.d.ts' />
module EditorForm {
    'use strict';
    
	export function EditorFormDirective() : ng.IDirective{
		var controller = function($log){
				var self = this;				
				self.test = '123';
				self.cancel = function(){
					$log.info('cancel');
					$log.info(self);
					self.discard();
				}
			};
		
		return {	
			restrict:'EA',
			transclude:true,
			scope: {				
				discard:'&',
				saveEnabled:'=',
				saveDisabled:'=',
				formTitle: '@'							
			},
			bindToController: true,
			controller: controller,
			controllerAs:'vm',
			templateUrl:'shared/editor-form/editor-form-template.html'			
		}	
	}		

	var module = angular.module('EditorForm');
	module.directive('editorForm', EditorFormDirective);		
}
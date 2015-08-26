/// <reference path='../../../typings/tsd.d.ts' />
module EditorForm {
    'use strict';		
    export class EditorFormDirectiveController {
		public test = "123";
		
		constructor(private $log: ng.ILogService) {
			var self = this;
			self.test = '123';

		}
		public cancel() {
			this.$log.info('cancel');
			this.onDiscard();
		}
		public save(){
			this.$log.info('save');
			this.onSave();
		}
	}
	export function EditorFormDirective(): ng.IDirective {
		return {
			restrict: 'EA',
			transclude: true,
			scope: {
				onDiscard: '&fesOnDiscard',
				onSave: '&fesOnSave',
				saveEnabled: '=fesSaveEnabled',
				saveDisabled: '=fesSaveDisabled',
				formTitle: '@fesFormTitle'
			},
			bindToController: true,
			controller: EditorFormDirectiveController,
			controllerAs: 'vm',
			templateUrl: 'shared/editor-form/editor-form-template.html'
		}
	}

	var module = angular.module('editorForm');
	module.directive('fesEditorForm', EditorFormDirective);
}
/// <reference path='../../../typings/tsd.d.ts' />



module ProjectTests {

	export class ProjectTestHelpers {
		static moduleName: string = 'fes.projects';
	}

	var $log: ng.ILogService;
	var $controller: ng.IControllerService;


	describe("Add project controller", mainTestSuite);

	function setup() {
		beforeEach(module(ProjectTestHelpers.moduleName));

		beforeEach(() => {
			angular.mock.inject((_$log_, _$controller_) => {
				$controller = _$controller_;
				$log = _$log_;
			})
		});

	}

	function mainTestSuite() {
		
		setup();

		it('Should be defined', () => {
			var target = $controller('AddProjectController', { $log: $log });
			expect(target).toBeDefined();
		});
	}

}
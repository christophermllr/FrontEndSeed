/// <reference path='../../typings/tsd.d.ts' />

module MainSpec {

	describe("Main controller", mainControlerTest);


	function mainControlerTest() {

		var $log: ng.ILogService;
		var $controller: ng.IControllerService;

		beforeEach(module('frontEndSeed'));

		beforeEach(() => {
			angular.mock.inject((_$log_, _$controller_) => {
				$controller = _$controller_;
				$log = _$log_;
			})
		});

		it('Should be defined', () => {
			var target = $controller('MainController', { $log: $log });
			expect(target).toBeDefined();
		});
	}

}
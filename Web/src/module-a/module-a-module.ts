/// <reference path='../../typings/tsd.d.ts' />
module ModuleA {
    'use strict';
    angular.module('moduleA', ['ui.router'])
        .config(["$stateProvider", $stateProvider => {
            $stateProvider.state('moduleA', {
                url: '/module-a',
                templateUrl: 'module-a/index.html',
                controller: 'DemoController as vm'
            });
        }]);
}
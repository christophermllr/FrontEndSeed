/// <reference path='../../typings/tsd.d.ts' />



module ModuleA {
    'use strict';
    angular.module('ModuleA', ['ui.router'])
           .config(["$stateProvider", $stateProvider =>{
                $stateProvider.state('moduleA', {
                    url: '/module-a',
                    templateUrl: 'module-a/index.html',
                    controller: 'demoController as vm'
                });
        }]);
}
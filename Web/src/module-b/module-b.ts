
/// <reference path='../../typings/tsd.d.ts' />
module ModuleB {
    'use strict';
    angular.module('moduleB', ['ui.router'])
           .config(["$stateProvider", $stateProvider =>{
                $stateProvider.state('moduleB', {
                    url: '/module-b',
                    templateUrl: 'module-b/index.html',
                    controller: 'ModuleBIndexController as vm'
                });
        }]);
}
/// <reference path="../typings/tsd.d.ts"/>

module FrontEndSeed {
    'use strict';


    var frontEndSeed = angular.module('frontEndSeed', ['ModuleB', 'ModuleA',, 'EditorForm', 'Projects', 'TaskPane', 'ui.router']);
    frontEndSeed.config([
        '$stateProvider', function ($stateProvider) {
            $stateProvider.
                state('home', {
                    url: '/',                
                }).
                state('backend', {
                    url: '/backend',
                    templateUrl: 'views/backend/backend-home.html',
                    controller: 'backEndController as vm'
                });

        }
    ]);
    frontEndSeed.controller('mainController', [
        '$log', function ($log) {
            $log.info('configuring routes');
        }
    ]);
}
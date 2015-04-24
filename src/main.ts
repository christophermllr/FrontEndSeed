/// <reference path="../typings/tsd.d.ts"/>

module FrontEndSeed {
    'use strict';

    var frontEndSeed = angular.module('frontEndSeed', ['ngRoute', 'backEnd', 'frontEnd']);

    frontEndSeed.config([
        '$routeProvider', function ($routeProvider) {
            $routeProvider.
                when('/', {
                    redirectTo: '/backend',

                }).
                when('/backend', {
                    templateUrl: 'views/backend/backend-home.html',
                    controller: 'backEndController as vm',
                }).
                when('/frontend', {
                    templateUrl: 'views/frontend/frontend-home.html',
                    controller: 'frontEndController as vm',
                }).
                otherwise({
                    redirectTo: '/frontend'
                });

        }
    ]);
    frontEndSeed.controller('mainController', [
        '$log', function ($log) {
            $log.info('configuring routes');
        }
    ]);
}
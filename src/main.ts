/// <reference path="../typings/tsd.d.ts"/>

module FrontEndSeed {
    'use strict';

    var frontEndSeed = angular.module('frontEndSeed', ['ngRoute', 'backEnd', 'frontEnd', 'ui.router']);

    frontEndSeed.config([
        '$stateProvider', function ($stateProvider) {
            $stateProvider.
                state('home', {
                    url: '/',
                    redirectTo: '/backend'

                }).
                state('backend', {
                    url: '/backend',
                    templateUrl: 'views/backend/backend-home.html',
                    controller: 'backEndController as vm'
                }).
                state('frontend', {
                    url: '/frontend',
                    templateUrl: 'views/frontend/frontend-home.html',
                    controller: 'frontEndController as vm'
                })

        }
    ]);
    frontEndSeed.controller('mainController', [
        '$log', function ($log) {
            $log.info('configuring routes');
        }
    ]);
}
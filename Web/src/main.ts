/// <reference path="../typings/tsd.d.ts"/>

module FrontEndSeed {
    'use strict';


    var frontEndSeed = angular.module('frontEndSeed', ['moduleB', 'moduleA', 'editorForm', 'fes.projects', 'taskPane', 'ui.router']);
    frontEndSeed.config([
        '$stateProvider', function ($stateProvider) {
            $stateProvider.
                state('home', {
                    url: '/',                
                });

        }
    ]);
    frontEndSeed.controller('MainController', [
        '$log', function ($log) {
            $log.info('configuring routes');
        }
    ]);
}
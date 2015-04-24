(function () {
    'use strict';

    var frontEndSeed = angular.module('frontEndSeed', [
        // Angular modules 
        //'ngAnimate',
        'ngRoute',

        // Custom modules 
        'backEnd',
        'frontEnd'

        // 3rd Party Modules
    ]);

    frontEndSeed.config([
        '$routeProvider', function ($routeProvider) {
            $routeProvider.
                when('/', {
                    redirectTo: '/backend',
                    
                }).
                when('/backend', {
                    templateUrl: 'views/Backend/BackendHome.html',
                    controller: 'backEndController as vm',
                }).
                 when('/frontend', {
                     templateUrl: 'views/Frontend/FrontendHome.html',
                     controller: 'frontEndController as vm',
                 }).
                otherwise({
                    redirectTo: '/frontend'
                });

        }
    ]);
    frontEndSeed.controller('mainController', [
        '$log', function($log) {
            $log.info('configuring routes');
        }
    ]);
})();
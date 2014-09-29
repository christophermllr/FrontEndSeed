(function () {
    'use strict';

    var frontEndSeed = angular.module('frontEndSeed', [
        // Angular modules 
        //'ngAnimate',
        'ngRoute'

        // Custom modules 

        // 3rd Party Modules
    ]);

    frontEndSeed.config([
        '$routeProvider', function ($routeProvider, $locationProvider) {
            $routeProvider.
                when('/', {
                    redirectTo: '/backend'
                    //controller: 'PhoneListCtrl'
                }).
                when('/backend', {
                    templateUrl: 'scripts/Backend/BackendHome.html',
                    //controller: 'PhoneDetailCtrl'
                }).
                 when('/frontend', {
                     templateUrl: 'scripts/Frontend/FrontendHome.html',
                     //controller: 'PhoneDetailCtrl'
                 }).
                otherwise({
                    redirectTo: '/backend'
                });

            //$locationProvider.html5Mode(true);
        }
    ]);
})();
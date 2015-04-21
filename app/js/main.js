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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgdmFyIGZyb250RW5kU2VlZCA9IGFuZ3VsYXIubW9kdWxlKCdmcm9udEVuZFNlZWQnLCBbXHJcbiAgICAgICAgLy8gQW5ndWxhciBtb2R1bGVzIFxyXG4gICAgICAgIC8vJ25nQW5pbWF0ZScsXHJcbiAgICAgICAgJ25nUm91dGUnLFxyXG5cclxuICAgICAgICAvLyBDdXN0b20gbW9kdWxlcyBcclxuICAgICAgICAnYmFja0VuZCcsXHJcbiAgICAgICAgJ2Zyb250RW5kJ1xyXG5cclxuICAgICAgICAvLyAzcmQgUGFydHkgTW9kdWxlc1xyXG4gICAgXSk7XHJcblxyXG4gICAgZnJvbnRFbmRTZWVkLmNvbmZpZyhbXHJcbiAgICAgICAgJyRyb3V0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRyb3V0ZVByb3ZpZGVyKSB7XHJcbiAgICAgICAgICAgICRyb3V0ZVByb3ZpZGVyLlxyXG4gICAgICAgICAgICAgICAgd2hlbignLycsIHtcclxuICAgICAgICAgICAgICAgICAgICByZWRpcmVjdFRvOiAnL2JhY2tlbmQnLFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSkuXHJcbiAgICAgICAgICAgICAgICB3aGVuKCcvYmFja2VuZCcsIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL0JhY2tlbmQvQmFja2VuZEhvbWUuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ2JhY2tFbmRDb250cm9sbGVyIGFzIHZtJyxcclxuICAgICAgICAgICAgICAgIH0pLlxyXG4gICAgICAgICAgICAgICAgIHdoZW4oJy9mcm9udGVuZCcsIHtcclxuICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9Gcm9udGVuZC9Gcm9udGVuZEhvbWUuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICAgfSkuXHJcbiAgICAgICAgICAgICAgICBvdGhlcndpc2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0VG86ICcvZnJvbnRlbmQnXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgXSk7XHJcbiAgICBmcm9udEVuZFNlZWQuY29udHJvbGxlcignbWFpbkNvbnRyb2xsZXInLCBbXHJcbiAgICAgICAgJyRsb2cnLCBmdW5jdGlvbigkbG9nKSB7XHJcbiAgICAgICAgICAgICRsb2cuaW5mbygnY29uZmlndXJpbmcgcm91dGVzJyk7XHJcbiAgICAgICAgfVxyXG4gICAgXSk7XHJcbn0pKCk7Il0sImZpbGUiOiJtYWluLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
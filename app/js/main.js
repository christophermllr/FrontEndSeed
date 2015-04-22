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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIGZyb250RW5kU2VlZCA9IGFuZ3VsYXIubW9kdWxlKCdmcm9udEVuZFNlZWQnLCBbXG4gICAgICAgIC8vIEFuZ3VsYXIgbW9kdWxlcyBcbiAgICAgICAgLy8nbmdBbmltYXRlJyxcbiAgICAgICAgJ25nUm91dGUnLFxuXG4gICAgICAgIC8vIEN1c3RvbSBtb2R1bGVzIFxuICAgICAgICAnYmFja0VuZCcsXG4gICAgICAgICdmcm9udEVuZCdcblxuICAgICAgICAvLyAzcmQgUGFydHkgTW9kdWxlc1xuICAgIF0pO1xuXG4gICAgZnJvbnRFbmRTZWVkLmNvbmZpZyhbXG4gICAgICAgICckcm91dGVQcm92aWRlcicsIGZ1bmN0aW9uICgkcm91dGVQcm92aWRlcikge1xuICAgICAgICAgICAgJHJvdXRlUHJvdmlkZXIuXG4gICAgICAgICAgICAgICAgd2hlbignLycsIHtcbiAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3RUbzogJy9iYWNrZW5kJyxcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfSkuXG4gICAgICAgICAgICAgICAgd2hlbignL2JhY2tlbmQnLCB7XG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvQmFja2VuZC9CYWNrZW5kSG9tZS5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ2JhY2tFbmRDb250cm9sbGVyIGFzIHZtJyxcbiAgICAgICAgICAgICAgICB9KS5cbiAgICAgICAgICAgICAgICAgd2hlbignL2Zyb250ZW5kJywge1xuICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9Gcm9udGVuZC9Gcm9udGVuZEhvbWUuaHRtbCcsXG4gICAgICAgICAgICAgICAgIH0pLlxuICAgICAgICAgICAgICAgIG90aGVyd2lzZSh7XG4gICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0VG86ICcvZnJvbnRlbmQnXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuICAgIF0pO1xuICAgIGZyb250RW5kU2VlZC5jb250cm9sbGVyKCdtYWluQ29udHJvbGxlcicsIFtcbiAgICAgICAgJyRsb2cnLCBmdW5jdGlvbigkbG9nKSB7XG4gICAgICAgICAgICAkbG9nLmluZm8oJ2NvbmZpZ3VyaW5nIHJvdXRlcycpO1xuICAgICAgICB9XG4gICAgXSk7XG59KSgpOyJdLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
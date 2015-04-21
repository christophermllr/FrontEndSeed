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
                    templateUrl: 'Backend/BackendHome.html',
                    //controller: 'PhoneDetailCtrl'
                }).
                 when('/frontend', {
                     templateUrl: 'Frontend/FrontendHome.html',
                     //controller: 'PhoneDetailCtrl'
                 }).
                otherwise({
                    redirectTo: '/backend'
                });

            //$locationProvider.html5Mode(true);
        }
    ]);
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgdmFyIGZyb250RW5kU2VlZCA9IGFuZ3VsYXIubW9kdWxlKCdmcm9udEVuZFNlZWQnLCBbXHJcbiAgICAgICAgLy8gQW5ndWxhciBtb2R1bGVzIFxyXG4gICAgICAgIC8vJ25nQW5pbWF0ZScsXHJcbiAgICAgICAgJ25nUm91dGUnXHJcblxyXG4gICAgICAgIC8vIEN1c3RvbSBtb2R1bGVzIFxyXG5cclxuICAgICAgICAvLyAzcmQgUGFydHkgTW9kdWxlc1xyXG4gICAgXSk7XHJcblxyXG4gICAgZnJvbnRFbmRTZWVkLmNvbmZpZyhbXHJcbiAgICAgICAgJyRyb3V0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRyb3V0ZVByb3ZpZGVyLCAkbG9jYXRpb25Qcm92aWRlcikge1xyXG4gICAgICAgICAgICAkcm91dGVQcm92aWRlci5cclxuICAgICAgICAgICAgICAgIHdoZW4oJy8nLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3RUbzogJy9iYWNrZW5kJ1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29udHJvbGxlcjogJ1Bob25lTGlzdEN0cmwnXHJcbiAgICAgICAgICAgICAgICB9KS5cclxuICAgICAgICAgICAgICAgIHdoZW4oJy9iYWNrZW5kJywge1xyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnQmFja2VuZC9CYWNrZW5kSG9tZS5odG1sJyxcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnRyb2xsZXI6ICdQaG9uZURldGFpbEN0cmwnXHJcbiAgICAgICAgICAgICAgICB9KS5cclxuICAgICAgICAgICAgICAgICB3aGVuKCcvZnJvbnRlbmQnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnRnJvbnRlbmQvRnJvbnRlbmRIb21lLmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAvL2NvbnRyb2xsZXI6ICdQaG9uZURldGFpbEN0cmwnXHJcbiAgICAgICAgICAgICAgICAgfSkuXHJcbiAgICAgICAgICAgICAgICBvdGhlcndpc2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0VG86ICcvYmFja2VuZCdcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8kbG9jYXRpb25Qcm92aWRlci5odG1sNU1vZGUodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgXSk7XHJcbn0pKCk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
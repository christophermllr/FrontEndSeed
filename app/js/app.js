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
                    templateUrl: 'app/views/Backend/BackendHome.html',
                    controller: 'backEndController as vm',
                }).
                 when('/frontend', {
                     templateUrl: 'app/views/Frontend/FrontendHome.html',
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
(function () {
    'use strict';

    angular
        .module('frontEndSeed')
        .controller('navigationController', navigation_controller);

    navigation_controller.$inject = ['$location', '$scope', '$log']; 

    function navigation_controller($location, $scope, $log) {
        /* jshint validthis:true */
        
        var vm = $scope;
        vm.title = 'navigation_controller';

        vm.isActive = function (viewLocation) {
            $log.info('isactive');
            return viewLocation === $location.path();
        };

        activate();

        function activate() { }
    }
})();

(function () {
    'use strict';

    angular.module('frontEnd', [
        // Angular modules 

        // Custom modules 

        // 3rd Party Modules
        
    ]);
})();
(function () {
    'use strict';

    angular.module('backEnd', [
        // Angular modules 
        // Custom modules 

        // 3rd Party Modules
        
    ]);
})();
(function () {
    'use strict';

    angular
        .module('backEnd')
        .controller('backEndController', backEnd);

    backEnd.$inject = ['$log']; 

    function backEnd($log) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'backEnd';

        activate();

        function activate() { }
    }
})();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJuYXZpZ2F0aW9uL25hdmlnYXRpb24tY29udHJvbGxlci5qcyIsIkZyb250ZW5kL2Zyb250RW5kLm1vZHVsZS5qcyIsIkJhY2tlbmQvYmFja2VuZC5tb2R1bGUuanMiLCJCYWNrZW5kL2JhY2tFbmQuY29udHJvbGxlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICB2YXIgZnJvbnRFbmRTZWVkID0gYW5ndWxhci5tb2R1bGUoJ2Zyb250RW5kU2VlZCcsIFtcclxuICAgICAgICAvLyBBbmd1bGFyIG1vZHVsZXMgXHJcbiAgICAgICAgLy8nbmdBbmltYXRlJyxcclxuICAgICAgICAnbmdSb3V0ZScsXHJcblxyXG4gICAgICAgIC8vIEN1c3RvbSBtb2R1bGVzIFxyXG4gICAgICAgICdiYWNrRW5kJyxcclxuICAgICAgICAnZnJvbnRFbmQnXHJcblxyXG4gICAgICAgIC8vIDNyZCBQYXJ0eSBNb2R1bGVzXHJcbiAgICBdKTtcclxuXHJcbiAgICBmcm9udEVuZFNlZWQuY29uZmlnKFtcclxuICAgICAgICAnJHJvdXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHJvdXRlUHJvdmlkZXIpIHtcclxuICAgICAgICAgICAgJHJvdXRlUHJvdmlkZXIuXHJcbiAgICAgICAgICAgICAgICB3aGVuKCcvJywge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0VG86ICcvYmFja2VuZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9KS5cclxuICAgICAgICAgICAgICAgIHdoZW4oJy9iYWNrZW5kJywge1xyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL3ZpZXdzL0JhY2tlbmQvQmFja2VuZEhvbWUuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ2JhY2tFbmRDb250cm9sbGVyIGFzIHZtJyxcclxuICAgICAgICAgICAgICAgIH0pLlxyXG4gICAgICAgICAgICAgICAgIHdoZW4oJy9mcm9udGVuZCcsIHtcclxuICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvdmlld3MvRnJvbnRlbmQvRnJvbnRlbmRIb21lLmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgIH0pLlxyXG4gICAgICAgICAgICAgICAgb3RoZXJ3aXNlKHtcclxuICAgICAgICAgICAgICAgICAgICByZWRpcmVjdFRvOiAnL2Zyb250ZW5kJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIF0pO1xyXG4gICAgZnJvbnRFbmRTZWVkLmNvbnRyb2xsZXIoJ21haW5Db250cm9sbGVyJywgW1xyXG4gICAgICAgICckbG9nJywgZnVuY3Rpb24oJGxvZykge1xyXG4gICAgICAgICAgICAkbG9nLmluZm8oJ2NvbmZpZ3VyaW5nIHJvdXRlcycpO1xyXG4gICAgICAgIH1cclxuICAgIF0pO1xyXG59KSgpOyIsIihmdW5jdGlvbiAoKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgYW5ndWxhclxyXG4gICAgICAgIC5tb2R1bGUoJ2Zyb250RW5kU2VlZCcpXHJcbiAgICAgICAgLmNvbnRyb2xsZXIoJ25hdmlnYXRpb25Db250cm9sbGVyJywgbmF2aWdhdGlvbl9jb250cm9sbGVyKTtcclxuXHJcbiAgICBuYXZpZ2F0aW9uX2NvbnRyb2xsZXIuJGluamVjdCA9IFsnJGxvY2F0aW9uJywgJyRzY29wZScsICckbG9nJ107IFxyXG5cclxuICAgIGZ1bmN0aW9uIG5hdmlnYXRpb25fY29udHJvbGxlcigkbG9jYXRpb24sICRzY29wZSwgJGxvZykge1xyXG4gICAgICAgIC8qIGpzaGludCB2YWxpZHRoaXM6dHJ1ZSAqL1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciB2bSA9ICRzY29wZTtcclxuICAgICAgICB2bS50aXRsZSA9ICduYXZpZ2F0aW9uX2NvbnRyb2xsZXInO1xyXG5cclxuICAgICAgICB2bS5pc0FjdGl2ZSA9IGZ1bmN0aW9uICh2aWV3TG9jYXRpb24pIHtcclxuICAgICAgICAgICAgJGxvZy5pbmZvKCdpc2FjdGl2ZScpO1xyXG4gICAgICAgICAgICByZXR1cm4gdmlld0xvY2F0aW9uID09PSAkbG9jYXRpb24ucGF0aCgpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGFjdGl2YXRlKCk7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGFjdGl2YXRlKCkgeyB9XHJcbiAgICB9XHJcbn0pKCk7XHJcbiIsIihmdW5jdGlvbiAoKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgYW5ndWxhci5tb2R1bGUoJ2Zyb250RW5kJywgW1xyXG4gICAgICAgIC8vIEFuZ3VsYXIgbW9kdWxlcyBcclxuXHJcbiAgICAgICAgLy8gQ3VzdG9tIG1vZHVsZXMgXHJcblxyXG4gICAgICAgIC8vIDNyZCBQYXJ0eSBNb2R1bGVzXHJcbiAgICAgICAgXHJcbiAgICBdKTtcclxufSkoKTsiLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgIGFuZ3VsYXIubW9kdWxlKCdiYWNrRW5kJywgW1xyXG4gICAgICAgIC8vIEFuZ3VsYXIgbW9kdWxlcyBcclxuICAgICAgICAvLyBDdXN0b20gbW9kdWxlcyBcclxuXHJcbiAgICAgICAgLy8gM3JkIFBhcnR5IE1vZHVsZXNcclxuICAgICAgICBcclxuICAgIF0pO1xyXG59KSgpOyIsIihmdW5jdGlvbiAoKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgYW5ndWxhclxyXG4gICAgICAgIC5tb2R1bGUoJ2JhY2tFbmQnKVxyXG4gICAgICAgIC5jb250cm9sbGVyKCdiYWNrRW5kQ29udHJvbGxlcicsIGJhY2tFbmQpO1xyXG5cclxuICAgIGJhY2tFbmQuJGluamVjdCA9IFsnJGxvZyddOyBcclxuXHJcbiAgICBmdW5jdGlvbiBiYWNrRW5kKCRsb2cpIHtcclxuICAgICAgICAvKiBqc2hpbnQgdmFsaWR0aGlzOnRydWUgKi9cclxuICAgICAgICB2YXIgdm0gPSB0aGlzO1xyXG4gICAgICAgIHZtLnRpdGxlID0gJ2JhY2tFbmQnO1xyXG5cclxuICAgICAgICBhY3RpdmF0ZSgpO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBhY3RpdmF0ZSgpIHsgfVxyXG4gICAgfVxyXG59KSgpO1xyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
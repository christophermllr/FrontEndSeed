(function () {
    'use strict';

    angular
        .module('frontEndSeed')
        .controller('NavigationController', navigation_controller);

    navigation_controller.$inject = ['$location', '$scope', '$log']; 

    function navigation_controller($location, $scope, $log) {
        /* jshint validthis:true */
        
        var vm = $scope;
        vm.title = 'navigation_controller';

        vm.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };

        activate();

        function activate() { }
    }
})();

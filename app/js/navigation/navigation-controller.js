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
            return viewLocation === $location.path();
        };

        activate();

        function activate() { }
    }
})();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJuYXZpZ2F0aW9uL25hdmlnYXRpb24tY29udHJvbGxlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIGFuZ3VsYXJcbiAgICAgICAgLm1vZHVsZSgnZnJvbnRFbmRTZWVkJylcbiAgICAgICAgLmNvbnRyb2xsZXIoJ25hdmlnYXRpb25Db250cm9sbGVyJywgbmF2aWdhdGlvbl9jb250cm9sbGVyKTtcblxuICAgIG5hdmlnYXRpb25fY29udHJvbGxlci4kaW5qZWN0ID0gWyckbG9jYXRpb24nLCAnJHNjb3BlJywgJyRsb2cnXTsgXG5cbiAgICBmdW5jdGlvbiBuYXZpZ2F0aW9uX2NvbnRyb2xsZXIoJGxvY2F0aW9uLCAkc2NvcGUsICRsb2cpIHtcbiAgICAgICAgLyoganNoaW50IHZhbGlkdGhpczp0cnVlICovXG4gICAgICAgIFxuICAgICAgICB2YXIgdm0gPSAkc2NvcGU7XG4gICAgICAgIHZtLnRpdGxlID0gJ25hdmlnYXRpb25fY29udHJvbGxlcic7XG5cbiAgICAgICAgdm0uaXNBY3RpdmUgPSBmdW5jdGlvbiAodmlld0xvY2F0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gdmlld0xvY2F0aW9uID09PSAkbG9jYXRpb24ucGF0aCgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGFjdGl2YXRlKCk7XG5cbiAgICAgICAgZnVuY3Rpb24gYWN0aXZhdGUoKSB7IH1cbiAgICB9XG59KSgpO1xuIl0sImZpbGUiOiJuYXZpZ2F0aW9uL25hdmlnYXRpb24tY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
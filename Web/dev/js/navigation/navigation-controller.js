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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmlnYXRpb24vbmF2aWdhdGlvbi1jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLENBQUMsWUFBWTtJQUNUOztJQUVBO1NBQ0ssT0FBTztTQUNQLFdBQVcsd0JBQXdCOztJQUV4QyxzQkFBc0IsVUFBVSxDQUFDLGFBQWEsVUFBVTs7SUFFeEQsU0FBUyxzQkFBc0IsV0FBVyxRQUFRLE1BQU07OztRQUdwRCxJQUFJLEtBQUs7UUFDVCxHQUFHLFFBQVE7O1FBRVgsR0FBRyxXQUFXLFVBQVUsY0FBYztZQUNsQyxPQUFPLGlCQUFpQixVQUFVOzs7UUFHdEM7O1FBRUEsU0FBUyxXQUFXOzs7QUFHNUIiLCJmaWxlIjoibmF2aWdhdGlvbi9uYXZpZ2F0aW9uLWNvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgIGFuZ3VsYXJcclxuICAgICAgICAubW9kdWxlKCdmcm9udEVuZFNlZWQnKVxyXG4gICAgICAgIC5jb250cm9sbGVyKCduYXZpZ2F0aW9uQ29udHJvbGxlcicsIG5hdmlnYXRpb25fY29udHJvbGxlcik7XHJcblxyXG4gICAgbmF2aWdhdGlvbl9jb250cm9sbGVyLiRpbmplY3QgPSBbJyRsb2NhdGlvbicsICckc2NvcGUnLCAnJGxvZyddOyBcclxuXHJcbiAgICBmdW5jdGlvbiBuYXZpZ2F0aW9uX2NvbnRyb2xsZXIoJGxvY2F0aW9uLCAkc2NvcGUsICRsb2cpIHtcclxuICAgICAgICAvKiBqc2hpbnQgdmFsaWR0aGlzOnRydWUgKi9cclxuICAgICAgICBcclxuICAgICAgICB2YXIgdm0gPSAkc2NvcGU7XHJcbiAgICAgICAgdm0udGl0bGUgPSAnbmF2aWdhdGlvbl9jb250cm9sbGVyJztcclxuXHJcbiAgICAgICAgdm0uaXNBY3RpdmUgPSBmdW5jdGlvbiAodmlld0xvY2F0aW9uKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2aWV3TG9jYXRpb24gPT09ICRsb2NhdGlvbi5wYXRoKCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgYWN0aXZhdGUoKTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gYWN0aXZhdGUoKSB7IH1cclxuICAgIH1cclxufSkoKTtcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
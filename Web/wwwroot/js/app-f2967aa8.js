/// <reference path="../typings/tsd.d.ts"/>
var FrontEndSeed;
(function (FrontEndSeed) {
    'use strict';
    var frontEndSeed = angular.module('frontEndSeed', ['ngRoute', 'backEnd', 'frontEnd', 'ui.router']);
    frontEndSeed.config([
        '$stateProvider',
        function ($stateProvider) {
            $stateProvider.state('home', {
                url: '/',
                redirectTo: '/backend'
            }).state('backend', {
                url: '/backend',
                templateUrl: 'views/backend/backend-home.html',
                controller: 'backEndController as vm'
            }).state('frontend', {
                url: '/frontend',
                templateUrl: 'views/frontend/frontend-home.html',
                controller: 'frontEndController as vm'
            });
        }
    ]);
    frontEndSeed.controller('mainController', [
        '$log',
        function ($log) {
            $log.info('configuring routes');
        }
    ]);
})(FrontEndSeed || (FrontEndSeed = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOlsiRnJvbnRFbmRTZWVkIl0sIm1hcHBpbmdzIjoiQUFBQSwyQ0FBMkM7QUFFM0MsSUFBTyxZQUFZLENBK0JsQjtBQS9CRCxXQUFPLFlBQVksRUFBQyxDQUFDO0lBQ2pCQSxZQUFZQSxDQUFDQTtJQUViQSxJQUFJQSxZQUFZQSxHQUFHQSxPQUFPQSxDQUFDQSxNQUFNQSxDQUFDQSxjQUFjQSxFQUFFQSxDQUFDQSxTQUFTQSxFQUFFQSxTQUFTQSxFQUFFQSxVQUFVQSxFQUFFQSxXQUFXQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUVuR0EsWUFBWUEsQ0FBQ0EsTUFBTUEsQ0FBQ0E7UUFDaEJBLGdCQUFnQkE7UUFBRUEsVUFBVUEsY0FBY0E7WUFDdEMsY0FBYyxDQUNWLEtBQUssQ0FBQyxNQUFNLEVBQUU7Z0JBQ1YsR0FBRyxFQUFFLEdBQUc7Z0JBQ1IsVUFBVSxFQUFFLFVBQVU7YUFFekIsQ0FBQyxDQUNGLEtBQUssQ0FBQyxTQUFTLEVBQUU7Z0JBQ2IsR0FBRyxFQUFFLFVBQVU7Z0JBQ2YsV0FBVyxFQUFFLGlDQUFpQztnQkFDOUMsVUFBVSxFQUFFLHlCQUF5QjthQUN4QyxDQUFDLENBQ0YsS0FBSyxDQUFDLFVBQVUsRUFBRTtnQkFDZCxHQUFHLEVBQUUsV0FBVztnQkFDaEIsV0FBVyxFQUFFLG1DQUFtQztnQkFDaEQsVUFBVSxFQUFFLDBCQUEwQjthQUN6QyxDQUFDLENBQUE7UUFFVixDQUFDO0tBQ0pBLENBQUNBLENBQUNBO0lBQ0hBLFlBQVlBLENBQUNBLFVBQVVBLENBQUNBLGdCQUFnQkEsRUFBRUE7UUFDdENBLE1BQU1BO1FBQUVBLFVBQVVBLElBQUlBO1lBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUNwQyxDQUFDO0tBQ0pBLENBQUNBLENBQUNBO0FBQ1BBLENBQUNBLEVBL0JNLFlBQVksS0FBWixZQUFZLFFBK0JsQiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlUm9vdCI6IkM6L3IvRnJvbnRFbmRTZWVkL1dlYi8iLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdHlwaW5ncy90c2QuZC50c1wiLz5cclxuXHJcbm1vZHVsZSBGcm9udEVuZFNlZWQge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgIHZhciBmcm9udEVuZFNlZWQgPSBhbmd1bGFyLm1vZHVsZSgnZnJvbnRFbmRTZWVkJywgWyduZ1JvdXRlJywgJ2JhY2tFbmQnLCAnZnJvbnRFbmQnLCAndWkucm91dGVyJ10pO1xyXG5cclxuICAgIGZyb250RW5kU2VlZC5jb25maWcoW1xyXG4gICAgICAgICckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xyXG4gICAgICAgICAgICAkc3RhdGVQcm92aWRlci5cclxuICAgICAgICAgICAgICAgIHN0YXRlKCdob21lJywge1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogJy8nLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0VG86ICcvYmFja2VuZCdcclxuXHJcbiAgICAgICAgICAgICAgICB9KS5cclxuICAgICAgICAgICAgICAgIHN0YXRlKCdiYWNrZW5kJywge1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogJy9iYWNrZW5kJyxcclxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL2JhY2tlbmQvYmFja2VuZC1ob21lLmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdiYWNrRW5kQ29udHJvbGxlciBhcyB2bSdcclxuICAgICAgICAgICAgICAgIH0pLlxyXG4gICAgICAgICAgICAgICAgc3RhdGUoJ2Zyb250ZW5kJywge1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogJy9mcm9udGVuZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9mcm9udGVuZC9mcm9udGVuZC1ob21lLmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdmcm9udEVuZENvbnRyb2xsZXIgYXMgdm0nXHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICB9XHJcbiAgICBdKTtcclxuICAgIGZyb250RW5kU2VlZC5jb250cm9sbGVyKCdtYWluQ29udHJvbGxlcicsIFtcclxuICAgICAgICAnJGxvZycsIGZ1bmN0aW9uICgkbG9nKSB7XHJcbiAgICAgICAgICAgICRsb2cuaW5mbygnY29uZmlndXJpbmcgcm91dGVzJyk7XHJcbiAgICAgICAgfVxyXG4gICAgXSk7XHJcbn0iXX0=
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
/// <reference path='../../typings/tsd.d.ts' />
var FrontEnd;
(function (FrontEnd) {
    'use strict';
    angular.module('frontEnd', []);
})(FrontEnd || (FrontEnd = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyb250ZW5kL2Zyb250ZW5kLW1vZHVsZS50cyJdLCJuYW1lcyI6WyJGcm9udEVuZCJdLCJtYXBwaW5ncyI6IkFBQUEsK0NBQStDO0FBSS9DLElBQU8sUUFBUSxDQUdkO0FBSEQsV0FBTyxRQUFRLEVBQUMsQ0FBQztJQUNiQSxZQUFZQSxDQUFDQTtJQUNiQSxPQUFPQSxDQUFDQSxNQUFNQSxDQUFDQSxVQUFVQSxFQUFFQSxFQUFFQSxDQUFDQSxDQUFDQTtBQUNuQ0EsQ0FBQ0EsRUFITSxRQUFRLEtBQVIsUUFBUSxRQUdkIiwiZmlsZSI6ImZyb250ZW5kL2Zyb250ZW5kLW1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJDOi9yL0Zyb250RW5kU2VlZC9XZWIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD0nLi4vLi4vdHlwaW5ncy90c2QuZC50cycgLz5cclxuXHJcblxyXG5cclxubW9kdWxlIEZyb250RW5kIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuICAgIGFuZ3VsYXIubW9kdWxlKCdmcm9udEVuZCcsIFtdKTtcclxufSJdfQ==
/// <reference path='../../typings/tsd.d.ts' />

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyb250ZW5kL2Zyb250ZW5kLW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLEFBQ0EsK0NBRCtDO0FBTzlDIiwiZmlsZSI6ImZyb250ZW5kL2Zyb250ZW5kLW1vZGVsLmpzIiwic291cmNlUm9vdCI6IkM6L3IvRnJvbnRFbmRTZWVkL1dlYi8iLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPScuLi8uLi90eXBpbmdzL3RzZC5kLnRzJyAvPlxyXG5tb2R1bGUgRnJvbnRFbmQge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJRnJvbnRFbmRNb2RlbCB7XHJcbiAgICAgICAgdGl0bGU6IHN0cmluZztcclxuICAgICAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgICAgIGNsaWNrczogbnVtYmVyO1xyXG4gICAgfVxyXG59Il19
/// <reference path='../../typings/tsd.d.ts' />
var FrontEnd;
(function (FrontEnd) {
    "use strict";
    var FrontEndModel = (function () {
        function FrontEndModel(title, description, clicks) {
            this.title = title;
            this.description = description;
            this.clicks = clicks;
        }
        return FrontEndModel;
    })();
    FrontEnd.FrontEndModel = FrontEndModel;
    var FrontEndController = (function () {
        function FrontEndController($log) {
            this.$log = $log;
            $log.info('instantiate front end controller');
            this.model = new FrontEndModel();
            this.activate();
        }
        FrontEndController.prototype.activate = function () {
            this.$log.info('activating front end controller');
            this.model.title = "Front end";
            this.model.description = "A front end model";
            this.model.clicks = 0;
        };
        FrontEndController.prototype.smack = function () {
            this.model.clicks++;
        };
        FrontEndController.$inject = [
            '$log'
        ];
        return FrontEndController;
    })();
    FrontEnd.FrontEndController = FrontEndController;
    angular.module('frontEnd').controller('frontEndController', FrontEnd.FrontEndController);
})(FrontEnd || (FrontEnd = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyb250ZW5kL2Zyb250ZW5kLWNvbnRyb2xsZXIudHMiXSwibmFtZXMiOlsiRnJvbnRFbmQiLCJGcm9udEVuZC5Gcm9udEVuZE1vZGVsIiwiRnJvbnRFbmQuRnJvbnRFbmRNb2RlbC5jb25zdHJ1Y3RvciIsIkZyb250RW5kLkZyb250RW5kQ29udHJvbGxlciIsIkZyb250RW5kLkZyb250RW5kQ29udHJvbGxlci5jb25zdHJ1Y3RvciIsIkZyb250RW5kLkZyb250RW5kQ29udHJvbGxlci5hY3RpdmF0ZSIsIkZyb250RW5kLkZyb250RW5kQ29udHJvbGxlci5zbWFjayJdLCJtYXBwaW5ncyI6IkFBQUEsK0NBQStDO0FBRS9DLElBQU8sUUFBUSxDQXNDZDtBQXRDRCxXQUFPLFFBQVEsRUFBQyxDQUFDO0lBRWJBLFlBQVlBLENBQUNBO0lBQ2JBLElBQWFBLGFBQWFBO1FBQ3RCQyxTQURTQSxhQUFhQSxDQUNIQSxLQUFhQSxFQUFTQSxXQUFtQkEsRUFBU0EsTUFBY0E7WUFBaEVDLFVBQUtBLEdBQUxBLEtBQUtBLENBQVFBO1lBQVNBLGdCQUFXQSxHQUFYQSxXQUFXQSxDQUFRQTtZQUFTQSxXQUFNQSxHQUFOQSxNQUFNQSxDQUFRQTtRQUVuRkEsQ0FBQ0E7UUFDTEQsb0JBQUNBO0lBQURBLENBSkFELEFBSUNDLElBQUFEO0lBSllBLHNCQUFhQSxHQUFiQSxhQUlaQSxDQUFBQTtJQUNEQSxJQUFhQSxrQkFBa0JBO1FBUTNCRyxTQVJTQSxrQkFBa0JBLENBUVBBLElBQXFCQTtZQUFyQkMsU0FBSUEsR0FBSkEsSUFBSUEsQ0FBaUJBO1lBQ3JDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxrQ0FBa0NBLENBQUNBLENBQUNBO1lBRTlDQSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxJQUFJQSxhQUFhQSxFQUFFQSxDQUFDQTtZQUNqQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsRUFBRUEsQ0FBQ0E7UUFDcEJBLENBQUNBO1FBQ09ELHFDQUFRQSxHQUFoQkE7WUFDSUUsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsaUNBQWlDQSxDQUFDQSxDQUFDQTtZQUNsREEsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsS0FBS0EsR0FBR0EsV0FBV0EsQ0FBQ0E7WUFDL0JBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLFdBQVdBLEdBQUdBLG1CQUFtQkEsQ0FBQ0E7WUFDN0NBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLE1BQU1BLEdBQUdBLENBQUNBLENBQUNBO1FBRTFCQSxDQUFDQTtRQUNNRixrQ0FBS0EsR0FBWkE7WUFDSUcsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsTUFBTUEsRUFBRUEsQ0FBQ0E7UUFDeEJBLENBQUNBO1FBbkJhSCwwQkFBT0EsR0FBR0E7WUFDcEJBLE1BQU1BO1NBQ1RBLENBQUNBO1FBa0JOQSx5QkFBQ0E7SUFBREEsQ0F4QkFILEFBd0JDRyxJQUFBSDtJQXhCWUEsMkJBQWtCQSxHQUFsQkEsa0JBd0JaQSxDQUFBQTtJQUVEQSxPQUFPQSxDQUNGQSxNQUFNQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUNsQkEsVUFBVUEsQ0FBQ0Esb0JBQW9CQSxFQUFFQSxRQUFRQSxDQUFDQSxrQkFBa0JBLENBQUNBLENBQUNBO0FBRXZFQSxDQUFDQSxFQXRDTSxRQUFRLEtBQVIsUUFBUSxRQXNDZCIsImZpbGUiOiJmcm9udGVuZC9mcm9udGVuZC1jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IkM6L3IvRnJvbnRFbmRTZWVkL1dlYi8iLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPScuLi8uLi90eXBpbmdzL3RzZC5kLnRzJyAvPlxyXG5cclxubW9kdWxlIEZyb250RW5kIHtcclxuXHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIGV4cG9ydCBjbGFzcyBGcm9udEVuZE1vZGVsIGltcGxlbWVudHMgSUZyb250RW5kTW9kZWwge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0aXRsZT86c3RyaW5nLCBwdWJsaWMgZGVzY3JpcHRpb24/OnN0cmluZywgcHVibGljIGNsaWNrcz86bnVtYmVyKXtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZXhwb3J0IGNsYXNzIEZyb250RW5kQ29udHJvbGxlciB7XHJcblxyXG4gICAgICAgIHB1YmxpYyBtb2RlbDogSUZyb250RW5kTW9kZWw7XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgJGluamVjdCA9IFtcclxuICAgICAgICAgICAgJyRsb2cnXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJpdmF0ZSAkbG9nIDogbmcuSUxvZ1NlcnZpY2UpIHtcclxuICAgICAgICAgICAgJGxvZy5pbmZvKCdpbnN0YW50aWF0ZSBmcm9udCBlbmQgY29udHJvbGxlcicpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5tb2RlbCA9IG5ldyBGcm9udEVuZE1vZGVsKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJpdmF0ZSBhY3RpdmF0ZSgpe1xyXG4gICAgICAgICAgICB0aGlzLiRsb2cuaW5mbygnYWN0aXZhdGluZyBmcm9udCBlbmQgY29udHJvbGxlcicpO1xyXG4gICAgICAgICAgICB0aGlzLm1vZGVsLnRpdGxlID0gXCJGcm9udCBlbmRcIjtcclxuICAgICAgICAgICAgdGhpcy5tb2RlbC5kZXNjcmlwdGlvbiA9IFwiQSBmcm9udCBlbmQgbW9kZWxcIjtcclxuICAgICAgICAgICAgdGhpcy5tb2RlbC5jbGlja3MgPSAwO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgcHVibGljIHNtYWNrKCkge1xyXG4gICAgICAgICAgICB0aGlzLm1vZGVsLmNsaWNrcysrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhbmd1bGFyXHJcbiAgICAgICAgLm1vZHVsZSgnZnJvbnRFbmQnKVxyXG4gICAgICAgIC5jb250cm9sbGVyKCdmcm9udEVuZENvbnRyb2xsZXInLCBGcm9udEVuZC5Gcm9udEVuZENvbnRyb2xsZXIpO1xyXG5cclxufSJdfQ==
/// <reference path='../../typings/tsd.d.ts' />
var BackEnd;
(function (BackEnd) {
    'use strict';
    var backendModule = angular.module('backEnd', []).controller('backEndController', BackEnd.BackEndController);
})(BackEnd || (BackEnd = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhY2tlbmQvYmFja2VuZC5tb2R1bGUudHMiXSwibmFtZXMiOlsiQmFja0VuZCJdLCJtYXBwaW5ncyI6IkFBQUEsK0NBQStDO0FBRS9DLElBQU8sT0FBTyxDQU1iO0FBTkQsV0FBTyxPQUFPLEVBQUMsQ0FBQztJQUVaQSxZQUFZQSxDQUFDQTtJQUViQSxJQUFJQSxhQUFhQSxHQUFHQSxPQUFPQSxDQUFDQSxNQUFNQSxDQUFDQSxTQUFTQSxFQUFFQSxFQUFFQSxDQUFDQSxDQUM1Q0EsVUFBVUEsQ0FBQ0EsbUJBQW1CQSxFQUFFQSx5QkFBaUJBLENBQUNBLENBQUNBO0FBQzVEQSxDQUFDQSxFQU5NLE9BQU8sS0FBUCxPQUFPLFFBTWIiLCJmaWxlIjoiYmFja2VuZC9iYWNrZW5kLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJDOi9yL0Zyb250RW5kU2VlZC9XZWIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD0nLi4vLi4vdHlwaW5ncy90c2QuZC50cycgLz5cclxuXHJcbm1vZHVsZSBCYWNrRW5kIHtcclxuXHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgdmFyIGJhY2tlbmRNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnYmFja0VuZCcsIFtdKVxyXG4gICAgICAgIC5jb250cm9sbGVyKCdiYWNrRW5kQ29udHJvbGxlcicsIEJhY2tFbmRDb250cm9sbGVyKTtcclxufSJdfQ==
/// <reference path='../../typings/tsd.d.ts' />
var BackEnd;
(function (BackEnd) {
    'use strict';
    var BackEndController = (function () {
        function BackEndController($log) {
            this.$log = $log;
            this.title = 'Back end';
            this.activate();
        }
        BackEndController.prototype.activate = function () {
            this.$log.info('activating back end controller');
        };
        BackEndController.$inject = ["$log"];
        return BackEndController;
    })();
    BackEnd.BackEndController = BackEndController;
    var backendModule = angular.module('backEnd').controller('backEndController', BackEndController);
})(BackEnd || (BackEnd = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhY2tlbmQvYmFja2VuZC5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbIkJhY2tFbmQiLCJCYWNrRW5kLkJhY2tFbmRDb250cm9sbGVyIiwiQmFja0VuZC5CYWNrRW5kQ29udHJvbGxlci5jb25zdHJ1Y3RvciIsIkJhY2tFbmQuQmFja0VuZENvbnRyb2xsZXIuYWN0aXZhdGUiXSwibWFwcGluZ3MiOiJBQUFBLCtDQUErQztBQUUvQyxJQUFPLE9BQU8sQ0F3QmI7QUF4QkQsV0FBTyxPQUFPLEVBQUMsQ0FBQztJQUVaQSxZQUFZQSxDQUFDQTtJQUdiQSxJQUFhQSxpQkFBaUJBO1FBTTFCQyxTQU5TQSxpQkFBaUJBLENBTU5BLElBQXlCQTtZQUF6QkMsU0FBSUEsR0FBSkEsSUFBSUEsQ0FBcUJBO1lBQ3pDQSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxVQUFVQSxDQUFDQTtZQUN4QkEsSUFBSUEsQ0FBQ0EsUUFBUUEsRUFBRUEsQ0FBQ0E7UUFDcEJBLENBQUNBO1FBRU9ELG9DQUFRQSxHQUFoQkE7WUFDSUUsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsZ0NBQWdDQSxDQUFDQSxDQUFDQTtRQUNyREEsQ0FBQ0E7UUFWTUYseUJBQU9BLEdBQUdBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO1FBWTlCQSx3QkFBQ0E7SUFBREEsQ0FmQUQsQUFlQ0MsSUFBQUQ7SUFmWUEseUJBQWlCQSxHQUFqQkEsaUJBZVpBLENBQUFBO0lBQ0RBLElBQUlBLGFBQWFBLEdBQUdBLE9BQU9BLENBQUNBLE1BQU1BLENBQUNBLFNBQVNBLENBQUNBLENBQ3hDQSxVQUFVQSxDQUFDQSxtQkFBbUJBLEVBQUVBLGlCQUFpQkEsQ0FBQ0EsQ0FBQ0E7QUFFNURBLENBQUNBLEVBeEJNLE9BQU8sS0FBUCxPQUFPLFFBd0JiIiwiZmlsZSI6ImJhY2tlbmQvYmFja2VuZC5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IkM6L3IvRnJvbnRFbmRTZWVkL1dlYi8iLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPScuLi8uLi90eXBpbmdzL3RzZC5kLnRzJyAvPlxyXG5cclxubW9kdWxlIEJhY2tFbmQge1xyXG5cclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIEJhY2tFbmRDb250cm9sbGVyIHtcclxuICAgICAgICBwdWJsaWMgdGl0bGU6c3RyaW5nO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHN0YXRpYyAkaW5qZWN0ID0gW1wiJGxvZ1wiXTtcclxuXHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgJGxvZzogYW5ndWxhci5JTG9nU2VydmljZSkge1xyXG4gICAgICAgICAgICB0aGlzLnRpdGxlID0gJ0JhY2sgZW5kJztcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmF0ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBhY3RpdmF0ZSgpIHtcclxuICAgICAgICAgICAgdGhpcy4kbG9nLmluZm8oJ2FjdGl2YXRpbmcgYmFjayBlbmQgY29udHJvbGxlcicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICB2YXIgYmFja2VuZE1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCdiYWNrRW5kJylcclxuICAgICAgICAuY29udHJvbGxlcignYmFja0VuZENvbnRyb2xsZXInLCBCYWNrRW5kQ29udHJvbGxlcik7XHJcblxyXG59XHJcbiJdfQ==
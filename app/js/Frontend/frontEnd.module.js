'use strict';
var FrontEnd;
(function (FrontEnd) {
    var Module = (function () {
        function Module() {
            this.app = angular.module('frontEnd', []);
            this.app.controller('myController', FrontEnd.MyController);
        }
        return Module;
    })();
    FrontEnd.Module = Module;

    var MyController = (function () {
        function MyController($scope) {
            $scope.message = { title: "Hello World!!" };
        }
        return MyController;
    })();
    FrontEnd.MyController = MyController;
})(FrontEnd || (FrontEnd = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJmcm9udGVuZC9mcm9udEVuZC5tb2R1bGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG52YXIgRnJvbnRFbmQ7XHJcbihmdW5jdGlvbiAoRnJvbnRFbmQpIHtcclxuICAgIHZhciBNb2R1bGUgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIE1vZHVsZSgpIHtcclxuICAgICAgICAgICAgdGhpcy5hcHAgPSBhbmd1bGFyLm1vZHVsZSgnZnJvbnRFbmQnLCBbXSk7XHJcbiAgICAgICAgICAgIHRoaXMuYXBwLmNvbnRyb2xsZXIoJ215Q29udHJvbGxlcicsIEZyb250RW5kLk15Q29udHJvbGxlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBNb2R1bGU7XHJcbiAgICB9KSgpO1xyXG4gICAgRnJvbnRFbmQuTW9kdWxlID0gTW9kdWxlO1xyXG5cclxuICAgIHZhciBNeUNvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIE15Q29udHJvbGxlcigkc2NvcGUpIHtcclxuICAgICAgICAgICAgJHNjb3BlLm1lc3NhZ2UgPSB7IHRpdGxlOiBcIkhlbGxvIFdvcmxkISFcIiB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gTXlDb250cm9sbGVyO1xyXG4gICAgfSkoKTtcclxuICAgIEZyb250RW5kLk15Q29udHJvbGxlciA9IE15Q29udHJvbGxlcjtcclxufSkoRnJvbnRFbmQgfHwgKEZyb250RW5kID0ge30pKTtcclxuIl0sImZpbGUiOiJmcm9udGVuZC9mcm9udEVuZC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
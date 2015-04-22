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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJCYWNrZW5kL2JhY2tFbmQuY29udHJvbGxlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIGFuZ3VsYXJcbiAgICAgICAgLm1vZHVsZSgnYmFja0VuZCcpXG4gICAgICAgIC5jb250cm9sbGVyKCdiYWNrRW5kQ29udHJvbGxlcicsIGJhY2tFbmQpO1xuXG4gICAgYmFja0VuZC4kaW5qZWN0ID0gWyckbG9nJ107IFxuXG4gICAgZnVuY3Rpb24gYmFja0VuZCgkbG9nKSB7XG4gICAgICAgIC8qIGpzaGludCB2YWxpZHRoaXM6dHJ1ZSAqL1xuICAgICAgICB2YXIgdm0gPSB0aGlzO1xuICAgICAgICB2bS50aXRsZSA9ICdiYWNrRW5kJztcblxuICAgICAgICBhY3RpdmF0ZSgpO1xuXG4gICAgICAgIGZ1bmN0aW9uIGFjdGl2YXRlKCkgeyB9XG4gICAgfVxufSkoKTtcbiJdLCJmaWxlIjoiQmFja2VuZC9iYWNrRW5kLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
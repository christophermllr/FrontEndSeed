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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJiYWNrZW5kL2JhY2tFbmQuY29udHJvbGxlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgIGFuZ3VsYXJcclxuICAgICAgICAubW9kdWxlKCdiYWNrRW5kJylcclxuICAgICAgICAuY29udHJvbGxlcignYmFja0VuZENvbnRyb2xsZXInLCBiYWNrRW5kKTtcclxuXHJcbiAgICBiYWNrRW5kLiRpbmplY3QgPSBbJyRsb2cnXTsgXHJcblxyXG4gICAgZnVuY3Rpb24gYmFja0VuZCgkbG9nKSB7XHJcbiAgICAgICAgLyoganNoaW50IHZhbGlkdGhpczp0cnVlICovXHJcbiAgICAgICAgdmFyIHZtID0gdGhpcztcclxuICAgICAgICB2bS50aXRsZSA9ICdiYWNrRW5kJztcclxuXHJcbiAgICAgICAgYWN0aXZhdGUoKTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gYWN0aXZhdGUoKSB7IH1cclxuICAgIH1cclxufSkoKTtcclxuIl0sImZpbGUiOiJiYWNrZW5kL2JhY2tFbmQuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
(function () {
    'use strict';

    angular
        .module('backEnd')
        .controller('backEndController', backEnd);

    backEnd.$inject = ['$log']; 

    function backEnd($log) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'Back end';

        activate();

        function activate() { }
    }
})();

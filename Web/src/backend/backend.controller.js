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

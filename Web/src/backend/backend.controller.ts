/// <reference path='../../typings/tsd.d.ts' />

module BackEnd {

    'use strict';


    export class BackEndController {
        public title:string;
        
        static $inject = ["$log"];


        constructor(private $log: angular.ILogService) {
            this.title = 'Back end';
            this.activate();
        }

        private activate() {
            this.$log.info('activating back end controller');
        }

    }
    var backendModule = angular.module('backEnd')
        .controller('backEndController', BackEndController);

}

/// <reference path='../../typings/tsd.d.ts' />

module ModuleB {

    "use strict";
    export class ModuleBIndex {

        public static $inject = [
            '$log'
        ];

        constructor(private $log : ng.ILogService) {
            $log.info('instantiate front end controller');

            this.activate();
        }
        private activate(){
            this.$log.info('activating front end controller');
            
        }
    }

    angular
        .module('moduleB')
        .controller('ModuleBIndexController', ModuleBIndex);

}
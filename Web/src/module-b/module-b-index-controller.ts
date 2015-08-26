/// <reference path='../../typings/tsd.d.ts' />
module ModuleB {
    "use strict";
    
    export class ModuleBIndex {

        public static $inject = [
            '$log'
        ];

        constructor(private $log : ng.ILogService) {
            $log.info('instantiate Module B Index controller');
            this.activate();
        }
        private activate(){
            this.$log.info('activating Module B Index controller');            
        }
    }

    angular
        .module('moduleB')
        .controller('ModuleBIndexController', ModuleBIndex);

}
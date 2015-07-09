/// <reference path='../../typings/tsd.d.ts' />

module ModuleA {

    "use strict";
    export class DemoModel implements IDemoModel {
        constructor(public title?:string, public description?:string, public clicks?:number){

        }
    }
    export class DemoController {

        public model: IDemoModel;

        public static $inject = [
            '$log'
        ];

        constructor(private $log : ng.ILogService) {
            $log.info('instantiate front end controller');

            this.model = new DemoModel();
            this.activate();
        }
        private activate(){
            this.$log.info('activating front end controller');
            this.model.title = "Module A";
            this.model.description = "A demo module";
            this.model.clicks = 0;

        }
        public smack() {
            this.model.clicks++;
        }
    }

    angular
        .module('ModuleA')
        .controller('demoController', DemoController);

}
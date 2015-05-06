/// <reference path='../../typings/tsd.d.ts' />

module FrontEnd {

    "use strict";
    export class FrontEndModel implements IFrontEndModel {
        constructor(public title?:string, public description?:string, public clicks?:number){

        }
    }
    export class FrontEndController {

        public model: IFrontEndModel;

        public static $inject = [
            '$log'
        ];

        constructor(private $log : ng.ILogService) {
            $log.info('instantiate front end controller');

            this.model = new FrontEndModel();
            this.activate();
        }
        private activate(){
            this.$log.info('activating front end controller');
            this.model.title = "Front end";
            this.model.description = "A front end model";
            this.model.clicks = 0;

        }
        public smack() {
            this.model.clicks++;
        }
    }

    angular
        .module('frontEnd')
        .controller('frontEndController', FrontEnd.FrontEndController);

}
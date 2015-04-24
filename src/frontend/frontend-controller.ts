/// <reference path='../../typings/tsd.d.ts' />

module FrontEnd {

    "use strict";


    export class FrontEndController {
        
        constructor($log) {
            $log.info('instantiate front end controller');
            this.model = {};
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
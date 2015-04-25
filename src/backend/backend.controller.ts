/// <reference path='../../typings/tsd.d.ts' />

module BackEnd {

    'use strict';


    export class BackEndController {
        public title:string;

        constructor(private $log) {
            this.title = 'Back end';
            this.activate();
        }

        private activate() {
        }
    }

    angular
        .module('backEnd')
        .controller('backEndController', BackEnd.BackEndController);

}

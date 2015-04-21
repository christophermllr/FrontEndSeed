'use strict';

module FrontEnd {
    export class Module {
        app: any

        constructor() {
            this.app = angular.module('frontEnd', []);
            this.app.controller('myController', FrontEnd.MyController);
        }
    }


  
    export class MyController {
        constructor($scope) {
            $scope.message = { title: "Hello World!!" };
        }
    }
}

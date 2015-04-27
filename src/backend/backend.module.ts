/// <reference path='../../typings/tsd.d.ts' />

module BackEnd {

    'use strict';

    var backendModule = angular.module('backEnd', [])
        .controller('backEndController', BackEndController);
}
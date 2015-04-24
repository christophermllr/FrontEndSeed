/// <reference path='../../typings/tsd.d.ts' />
"use strict";
angular.module('frontEnd').controller('frontEndController', frontEndController);

function frontEndController() {

    this.model = {};

    this.model.title = "Front end";
    this.model.clicks = 0;
    this.smack = function () {
        this.model.clicks++;
    }
}


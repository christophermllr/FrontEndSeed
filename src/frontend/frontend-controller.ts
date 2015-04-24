/// <reference path='../../typings/_all.d.ts' />
"use strict";
angular.module('frontEnd').controller('frontEndController', frontEndController);

function frontEndController() {

    this.model = {};

    this.model.title = "Front end";
    this.model.clicks = 0;
    //smack: function (title: string) {
    //    this.model.clicks++;
    //}
}


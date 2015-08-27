/// <reference path="../../typings/tsd.d.ts"/>
module Underscore {

    'use strict';

    /**
     * @ngdoc overview
     * @name underscore
     * @description
     * # burnRateToolApp
     *
     * Main module of the application.
     */
    angular
        .module('underscore', []).factory('_', () => window['_']);
}
/// <reference path='../../typings/tsd.d.ts' />
module TaskPane {
    'use strict';
        
    export function TaskPaneDirective() : ng.IDirective {
        return {
            templateUrl: 'taskpane/taskpane.html'
        };
    }
    
    var module = angular.module('taskPane');    
    module.directive('taskPane', TaskPaneDirective);
    
}
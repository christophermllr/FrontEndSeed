/// <reference path='../../typings/tsd.d.ts' />

module Projects {
    'use strict';
    angular.module('Project', ['EditorForm', 'ui.router'])
           .config(["$stateProvider", $stateProvider =>{
                $stateProvider
                    .state('projects', {
                        url: '/projects',
                        templateUrl: 'projects/index.html'
                    })
                    .state('projects.add', {
                        url: '/add',
                        templateUrl: 'projects/add-project.html',
                        views:{
                            "overlay@": {                                
                                templateUrl: 'projects/add-project.html'
                            }
                        }
                    });
        }]);
}
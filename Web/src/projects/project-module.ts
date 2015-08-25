/// <reference path='../../typings/tsd.d.ts' />

module Projects {
    'use strict';
    angular.module('Projects', ['EditorForm', 'ui.router'])
           .config(["$stateProvider", $stateProvider =>{
                $stateProvider
                    .state('projects', {
                        url: '/projects',
                        templateUrl: 'projects/index.html'
                    })
                    .state('projects.add', {
                        url: '/add',
                        controller:'addProjectController as vm',
                        templateUrl: 'projects/add-project.html',
                        views:{
                            "overlay@": {                                
                                templateUrl: 'projects/add-project.html'
                            }
                        }
                    });
        }]);
}
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
                        
                        templateUrl: 'projects/add-project.html',
                        views:{
                            "overlay@": {
                                controller:'AddProjectController as vm',                                
                                templateUrl: 'projects/add-project.html'
                            }
                        }
                    });
        }]);
}
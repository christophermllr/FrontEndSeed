/// <reference path='../../typings/tsd.d.ts' />

module Projects {

    "use strict";
    export interface IAddProjectViewModel{
        name:string;
        description:string;    
        cancel();
        save(); 
    }
    export class AddProjectController implements IAddProjectViewModel {
        public title:string = "Add a project"
        public name:string;
        public description:string;
        public addForm: ng.IFormController;

        public static $inject = [
            '$log'
        ];

        constructor(private $log : ng.ILogService) {
            this.activate();
        }
        private activate(){
            this.$log.info('activating add project controller');            
       }
       private reset(){
           this.name = null;
           this.description = null;
           this.addForm = null;
       }
       public cancel(){
           this.reset();           
       }  
       public save(){
           this.$log.info("Saving");           
       }      
    }

    angular
        .module('fes.projects')
        .controller('AddProjectController', AddProjectController);

}
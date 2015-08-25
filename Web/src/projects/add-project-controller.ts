/// <reference path='../../typings/tsd.d.ts' />

module Projects {

    "use strict";
    export interface IAddProjectViewModel{
        name:string;
        description:string;    
        cancel();  
    }
    export class AddProjectController implements IAddProjectViewModel {

        public name:string;
        public description:string;
        public addForm: ng.IFormController;

        public static $inject = [
            '$log'
        ];

        constructor(private $log : ng.ILogService) {
            $log.info('instantiate add project controller');            
            this.activate();
        }
        private activate(){
            this.$log.info('activating front end controller');
            
       }
       private reset(){
           this.name = null;
           this.description = null;
           this.addForm = null;
       }
       public cancel(){
           this.reset;
           this.$log.info('Cancelling');
       }        
    }

    angular
        .module('Projects')
        .controller('AddProjectController', AddProjectController);

}
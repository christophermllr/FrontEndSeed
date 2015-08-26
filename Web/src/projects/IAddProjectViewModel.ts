/// <reference path='../../typings/tsd.d.ts' />

module Projects {
    "use strict";
    export interface IAddProjectViewModel extends wmp.core.INamed, wmp.core.IViewModel{
        description:string; 
        addForm:ng.IFormController;   
        cancel();
        save(); 
    }
}
/// <reference path='../_all.ts' />

module FrontEnd {

    export class frontEndController {
        constructor(public model: FrontEndModel ) {
            this.model.title = "Front end";
            this.model.clicks = 0;
        }

        public smack(title:string) {
            this.model.clicks++;
        }
    }
}
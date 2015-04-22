/// <reference path='../../typings/_all.ts' />

module FrontEnd {
    "use strict";

    export class FrontEndController {
        model: IFrontEndModel;
        constructor() {
            this.model.title = "Front end";
            this.model.clicks = 0;
        }
        public smack(title:string) {
            this.model.clicks++;
        }
    }
}

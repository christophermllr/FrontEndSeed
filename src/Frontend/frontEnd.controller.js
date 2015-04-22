/// <reference path='../../typings/_all.ts' />
var FrontEnd;
(function (FrontEnd) {
    var frontEndController = (function () {
        function frontEndController(model) {
            this.model = model;
            this.model.title = "Front end";
            this.model.clicks = 0;
        }
        frontEndController.prototype.smack = function (title) {
            this.model.clicks++;
        };
        return frontEndController;
    })();
    FrontEnd.frontEndController = frontEndController;
})(FrontEnd || (FrontEnd = {}));
//# sourceMappingURL=frontEnd.controller.js.map
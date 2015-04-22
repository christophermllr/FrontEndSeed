/// <reference path='../../typings/_all.ts' />
var FrontEnd;
(function (FrontEnd) {
    "use strict";
    var FrontEndController = (function () {
        function FrontEndController() {
            this.model.title = "Front end";
            this.model.clicks = 0;
        }
        FrontEndController.prototype.smack = function (title) {
            this.model.clicks++;
        };
        return FrontEndController;
    })();
    FrontEnd.FrontEndController = FrontEndController;
})(FrontEnd || (FrontEnd = {}));
//# sourceMappingURL=frontEnd.controller.js.map
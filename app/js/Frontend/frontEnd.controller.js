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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJmcm9udGVuZC9mcm9udEVuZC5jb250cm9sbGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9Jy4uLy4uL3R5cGluZ3MvX2FsbC50cycgLz5cclxudmFyIEZyb250RW5kO1xyXG4oZnVuY3Rpb24gKEZyb250RW5kKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIHZhciBGcm9udEVuZENvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIEZyb250RW5kQ29udHJvbGxlcigpIHtcclxuICAgICAgICAgICAgdGhpcy5tb2RlbC50aXRsZSA9IFwiRnJvbnQgZW5kXCI7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZWwuY2xpY2tzID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgRnJvbnRFbmRDb250cm9sbGVyLnByb3RvdHlwZS5zbWFjayA9IGZ1bmN0aW9uICh0aXRsZSkge1xyXG4gICAgICAgICAgICB0aGlzLm1vZGVsLmNsaWNrcysrO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIEZyb250RW5kQ29udHJvbGxlcjtcclxuICAgIH0pKCk7XHJcbiAgICBGcm9udEVuZC5Gcm9udEVuZENvbnRyb2xsZXIgPSBGcm9udEVuZENvbnRyb2xsZXI7XHJcbn0pKEZyb250RW5kIHx8IChGcm9udEVuZCA9IHt9KSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZyb250RW5kLmNvbnRyb2xsZXIuanMubWFwIl0sImZpbGUiOiJmcm9udGVuZC9mcm9udEVuZC5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
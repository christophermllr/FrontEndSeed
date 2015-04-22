/// <reference path='../_all.ts' />
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJGcm9udGVuZC9mcm9udEVuZC5jb250cm9sbGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9Jy4uL19hbGwudHMnIC8+XG52YXIgRnJvbnRFbmQ7XG4oZnVuY3Rpb24gKEZyb250RW5kKSB7XG4gICAgdmFyIGZyb250RW5kQ29udHJvbGxlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIGZyb250RW5kQ29udHJvbGxlcihtb2RlbCkge1xuICAgICAgICAgICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICAgICAgICAgICAgdGhpcy5tb2RlbC50aXRsZSA9IFwiRnJvbnQgZW5kXCI7XG4gICAgICAgICAgICB0aGlzLm1vZGVsLmNsaWNrcyA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgZnJvbnRFbmRDb250cm9sbGVyLnByb3RvdHlwZS5zbWFjayA9IGZ1bmN0aW9uICh0aXRsZSkge1xuICAgICAgICAgICAgdGhpcy5tb2RlbC5jbGlja3MrKztcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGZyb250RW5kQ29udHJvbGxlcjtcbiAgICB9KSgpO1xuICAgIEZyb250RW5kLmZyb250RW5kQ29udHJvbGxlciA9IGZyb250RW5kQ29udHJvbGxlcjtcbn0pKEZyb250RW5kIHx8IChGcm9udEVuZCA9IHt9KSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mcm9udEVuZC5jb250cm9sbGVyLmpzLm1hcCJdLCJmaWxlIjoiRnJvbnRlbmQvZnJvbnRFbmQuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
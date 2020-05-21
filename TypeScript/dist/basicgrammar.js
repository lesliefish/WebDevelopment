"use strict";
var basicgrammar;
(function (basicgrammar) {
    var Site = /** @class */ (function () {
        function Site() {
        }
        Site.prototype.name = function () {
            console.log("Runoob");
        };
        return Site;
    }());
    var obj = new Site();
    obj.name();
})(basicgrammar || (basicgrammar = {}));

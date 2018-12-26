"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var $ = require("jquery");
var DaterangepickerConfig = (function () {
    function DaterangepickerConfig() {
        this.skipCSS = false;
        this.addedCSS = false;
        this.settings = {};
    }
    DaterangepickerConfig.prototype.embedCSS = function () {
        if (this.addedCSS) {
            return;
        }
        if (this.skipCSS === false) {
            $('head').append('<style></style>');
        }
    };
    return DaterangepickerConfig;
}());
DaterangepickerConfig.decorators = [
    { type: core_1.Injectable },
];
DaterangepickerConfig.ctorParameters = function () { return []; };
exports.DaterangepickerConfig = DaterangepickerConfig;
//# sourceMappingURL=config.service.js.map

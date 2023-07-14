"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expressLogger = void 0;
const Logger_js_1 = require("./utils/Logger.js");
/**
 * Function that returns the log based on the param
 * @param selectedLogger - The selected log format
 * @returns {Object} - The log and the next middleware function
 */
function expressLogger(selectedLogger) {
    return (req, res, next) => {
        Logger_js_1.Logger.log(req, res, next, selectedLogger);
        next();
    };
}
exports.expressLogger = expressLogger;
;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const chalk_1 = __importDefault(require("chalk"));
const DataHandler_js_1 = require("./DataHandler.js");
class Logger {
    /**
     * @param {Request} req - The request object
     * @param {Response} res - The response object
     * @param {NextFunction} next - The next middleware function
     */
    static log(req, res, next, selectedLogger) {
        const reqStart = process.hrtime();
        res.on('finish', function () {
            switch (selectedLogger) {
                /**
                 * loggerCLF - NCSA Common Log Format (CLF)
                 */
                case 'CLF':
                    console.log(`${DataHandler_js_1.DataHandler.getIp(req)} - [${DataHandler_js_1.DataHandler.getTimeCLF()}] "${chalk_1.default.cyanBright(req.method)} ${chalk_1.default.cyanBright(req.originalUrl)} HTTP/${req.httpVersion}" ${res.statusCode}`);
                    break;
                /**
                 * loggerUTC - Modified CLF with Universal Coordinated Time (UTC)
                 */
                case 'UTC':
                    console.log(`${DataHandler_js_1.DataHandler.getIp(req)} - [${DataHandler_js_1.DataHandler.getTimeUTC()}] "${chalk_1.default.cyanBright(req.method)} ${chalk_1.default.cyanBright(req.originalUrl)} HTTP/${req.httpVersion}" ${res.statusCode}`);
                    break;
                /**
                 * loggerW3C - W3C Extended format
                 */
                case 'W3C':
                    const userAgent = req.headers['user-agent'] || '';
                    console.log(`${DataHandler_js_1.DataHandler.getTimeW3C()} ${DataHandler_js_1.DataHandler.getIp(req)} ${chalk_1.default.cyanBright(req.method)} ${chalk_1.default.cyanBright(req.originalUrl)} ${req.httpVersion} ${res.statusCode}\n"${userAgent}"`);
                    break;
                /**
                 * logger for development
                 */
                case 'Dev':
                    const responseTime = DataHandler_js_1.DataHandler.getResponseTime(reqStart);
                    console.log(`${chalk_1.default.cyanBright(req.method)} ${chalk_1.default.cyanBright(req.originalUrl)} ${res.statusCode} ${responseTime}`);
                    break;
                default:
                    break;
            }
            ;
            next();
        });
    }
    ;
}
exports.Logger = Logger;
;

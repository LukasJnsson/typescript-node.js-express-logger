import chalk from 'chalk';
import { DataHandler } from './DataHandler.js';
export class Logger {
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
                    console.log(`${DataHandler.getIp(req)} - [${DataHandler.getTimeCLF()}] "${chalk.cyanBright(req.method)} ${chalk.cyanBright(req.originalUrl)} HTTP/${req.httpVersion}" ${res.statusCode}`);
                    break;
                /**
                 * loggerUTC - Modified CLF with Universal Coordinated Time (UTC)
                 */
                case 'UTC':
                    console.log(`${DataHandler.getIp(req)} - [${DataHandler.getTimeUTC()}] "${chalk.cyanBright(req.method)} ${chalk.cyanBright(req.originalUrl)} HTTP/${req.httpVersion}" ${res.statusCode}`);
                    break;
                /**
                 * loggerW3C - W3C Extended format
                 */
                case 'W3C':
                    const userAgent = req.headers['user-agent'] || '';
                    console.log(`${DataHandler.getTimeW3C()} ${DataHandler.getIp(req)} ${chalk.cyanBright(req.method)} ${chalk.cyanBright(req.originalUrl)} ${req.httpVersion} ${res.statusCode}\n"${userAgent}"`);
                    break;
                /**
                 * logger for development
                 */
                case 'Dev':
                    const responseTime = DataHandler.getResponseTime(reqStart);
                    console.log(`${chalk.cyanBright(req.method)} ${chalk.cyanBright(req.originalUrl)} ${res.statusCode} ${responseTime}`);
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
;

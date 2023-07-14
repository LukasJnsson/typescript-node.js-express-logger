
import { Request, Response, NextFunction } from 'express';
import { Logger } from './utils/Logger.js';


/**
 * Function that returns the log based on the param
 * @param selectedLogger - The selected log format
 * @returns {Object} - The log and the next middleware function
 */
export function expressLogger(selectedLogger: string) {
    return (req: Request, res: Response, next: NextFunction) => {
        Logger.log(req, res, next, selectedLogger);
        next();
    };
};
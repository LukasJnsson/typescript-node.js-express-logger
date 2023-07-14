import { Request, Response, NextFunction } from 'express';
/**
 * Function that returns the log based on the param
 * @param selectedLogger - The selected log format
 * @returns {Object} - The log and the next middleware function
 */
export declare function expressLogger(selectedLogger: string): (req: Request, res: Response, next: NextFunction) => void;

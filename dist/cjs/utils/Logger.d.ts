import { Request, Response, NextFunction } from 'express';
export declare class Logger {
    /**
     * @param {Request} req - The request object
     * @param {Response} res - The response object
     * @param {NextFunction} next - The next middleware function
     */
    static log(req: Request, res: Response, next: NextFunction, selectedLogger: string): void;
}

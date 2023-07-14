import { Request } from "express";
export declare class DataHandler {
    /**
     * Method for fetching the IP adress from the request object
     * @param {Request} req - The request object
     * @returns {String} - The IP adress
     */
    static getIp(req: Request): string;
    /**
     * Method that calculates the response time in milliseconds
     * @param {Number[]} reqStart - The start time array
     * @returns {String} - The response time
     */
    static getResponseTime(reqStart: [number, number]): string;
    /**
     * Method that returns the current month by string
     * @returns {String} - The month by string
     */
    static getMonth(): string;
    /**
     * Method that returns the current time in NCSA Common Log Format (CLF)
     * @returns {String} - The time in CLF format
     */
    static getTimeCLF(): string;
    /**
     * Method that returns the current time in Universal Coordinated Time (UTC) format
     * @returns {String} - The time in UTC format
     */
    static getTimeUTC(): string;
    /**
     * Method that returns the current time in W3C Extended format
     * @returns {String} - The time in W3C format
     */
    static getTimeW3C(): string;
}

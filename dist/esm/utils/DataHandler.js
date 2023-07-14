export class DataHandler {
    /**
     * Method for fetching the IP adress from the request object
     * @param {Request} req - The request object
     * @returns {String} - The IP adress
     */
    static getIp(req) {
        try {
            return req.ip;
        }
        catch (err) {
            return 'Error: Could not fetch IP';
        }
        ;
    }
    ;
    /**
     * Method that calculates the response time in milliseconds
     * @param {Number[]} reqStart - The start time array
     * @returns {String} - The response time
     */
    static getResponseTime(reqStart) {
        const reqEnd = process.hrtime(reqStart);
        const responseTime = `${(reqEnd[0] * 1000 + reqEnd[1] / 1000000).toFixed(2)} ms`;
        return responseTime;
    }
    ;
    /**
     * Method that returns the current month by string
     * @returns {String} - The month by string
     */
    static getMonth() {
        const months = [
            'Jan', 'Feb', 'Mar',
            'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep',
            'Oct', 'Nov', 'Dec'
        ];
        return months[new Date().getMonth()];
    }
    ;
    /**
     * Method that returns the current time in NCSA Common Log Format (CLF)
     * @returns {String} - The time in CLF format
     */
    static getTimeCLF() {
        const date = new Date();
        const day = date.getDate();
        const month = DataHandler.getMonth();
        const year = date.getFullYear();
        const hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
        const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
        const seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
        return `${day}/${month}/${year}:${hours}:${minutes}:${seconds}`;
    }
    ;
    /**
     * Method that returns the current time in Universal Coordinated Time (UTC) format
     * @returns {String} - The time in UTC format
     */
    static getTimeUTC() {
        const date = new Date();
        return date.toUTCString();
    }
    ;
    /**
     * Method that returns the current time in W3C Extended format
     * @returns {String} - The time in W3C format
     */
    static getTimeW3C() {
        const date = new Date();
        const year = date.getFullYear();
        const month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
        const day = date.getDate();
        const hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
        const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
        const seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    }
    ;
}
;

const url = require('url');
const ServerManager = require('../../tools/ServerManager');

/**
 * tester for managing the server of the app under test and test resources
 * 
 * @class ServerTester
 */
class ServerTester{
    /**
     * Creates an instance of ServerTester.
     * @param {any} app app with routing to serve source and test files
     * 
     * @memberOf ServerTester
     */
    constructor(app){
        this.serverManager = new ServerManager(app);
    }

    /**
     * listen for requests of source and test resources
     * 
     * @returns 
     * 
     * @memberOf ServerTester
     */
    listen(){
        return this.serverManager.listen()
    }

    /**
     * close the server
     * 
     * @returns 
     * 
     * @memberOf ServerTester
     */
    close(){
        return this.serverManager.close();
    }

    /**
     * get the url of a particular test resource
     * 
     * @param {any} specPath 
     * @returns 
     * 
     * @memberOf ServerTester
     */
    getSpecUrl(specPath){
        const port = this.serverManager.port;
        return url.format({
            protocol: "http",
            port: port,
            hostname: "localhost",
            pathname: "/testtools/browser/testRunner.html",
            search: "testFile="+specPath
        });
    } 
}

module.exports = ServerTester;
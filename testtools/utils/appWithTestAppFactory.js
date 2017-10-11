const express = require('express');
const testAppFactory = require('./testAppFactory');

/**
 * apply middleware unless the route path begins with a given prefix
 * 
 * @param {String} pathPrefix the path prefix to exclude 
 * @param {Function} middleware the function to use if the route path does not begin with pathPrefix
 * @returns {any} output of corresponding middleware function
 */
var unlessBeginsWith = function(pathPrefixes, middleware) {
    return function(req, res, next) {

        let beginsWithAny = pathPrefixes.reduce(
            (beginsWith, curVal)=>(beginsWith || req.path.indexOf(curVal)==0), 
            false);

        if (beginsWithAny){
            return next();
        } else {
            return middleware(req, res, next);
        }
    };
};

/**
 * create an app that combines the app under tests and the app that serves test resources
 * 
 * @param {any} app - the app under test 
 * @returns {any} app that supplied routing for the software under test and for test resources
 */
function appWithTestAppFactory(app){
    const testApp = testAppFactory();

    var appWithTestApp = express();
    // unless the route path begins '/spec', serve the app under test
    appWithTestApp.use(unlessBeginsWith(['/spec', "/testtools"], app));
    // if the route path begins with '/spec/ serve the test resources
    appWithTestApp.use(testApp);

    appWithTestApp.initialize = app.initialize instanceof Function && app.initialize.bind(app);
    appWithTestApp.close = app.close instanceof Function && app.close.bind(app);

    testApp.callback = (testOutput)=>(appWithTestApp.callback(testOutput));
    return appWithTestApp;
}

module.exports = appWithTestAppFactory;
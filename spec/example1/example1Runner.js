const app = require("../../examples/example1/app");
const appWithTestAppFactory = require("../../testtools/utils/appWithTestAppFactory");
const appWithTestApp = appWithTestAppFactory(app);


const ResultsPromise = require("../../testtools/utils/ResultsPromise");
const resultsPromise = new ResultsPromise();
let allResults = [];
resultsPromise.processFcn = function(results){
    // if(results.complete){
    //     console.log('Test point complete:')
    // }else{
    //     console.log('Test point incomplete:')
    // }
    // console.log(results.data);
    allResults.push(results.data);
}


// create the server tester
const ServerTester = require("../../testtools/testers/ServerTester");
const serverTester = new ServerTester(appWithTestApp);

// create a tester for the chrome browser
const chromeTestProcessArgs = require('../../testtools/utils/chromeTestProcessArgs');
chromeTestProcessArgs.push('--user-data-dir=C:\\Users\\apatters\\Documents\\junk\\temp\\Chrome\\0');
const ChromeTester = require('../../testtools/testers/ChromeTester');
const chromeTester = new ChromeTester(chromeTestProcessArgs);

// paths of the spec runner files to include in the test suite
const specSuite = [ '/spec/example1/example1.html'];

// create the system level test runner
const SystemTestSuiteRunner = require('../../testtools/runners/SystemTestSuiteRunner');
const systemTestSuiteRunner = new SystemTestSuiteRunner(specSuite);

// set the necessary testers and options of the system level test runner
systemTestSuiteRunner.serverTester = serverTester;
systemTestSuiteRunner.resultsPromise = resultsPromise;
systemTestSuiteRunner.browserTester = chromeTester;
systemTestSuiteRunner.options = {};

// run the tests on chrome
systemTestSuiteRunner.run()
.then(function(){
    for(let idx in specSuite){
        console.log(specSuite[idx]);
        console.log(allResults[idx]);
    }
})
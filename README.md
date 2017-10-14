# test_tools (In Progress)
A library of test tools such as test runners and utilities for mocking and spying

## Available tools
### Test tools (/testtools)
#### browser tools (/browser)
* defineReporter - define a custom jasmine reporter to post test results once the test completes
* pollFor - poll for some condition to be true
* waitForEvent - wait for some event to occur
* runTest - bootstrap the test
#### Test Runners (/runners)
* RunnerWithFixtures - Rnner of a test with a fixture
* SuiteRunnerWithFixtures - Runner of a suite of tests with fixtures
* SequentialSuiteRunner - Test Suite runner that runs testpoints sequentially, one after the other
* ConcurrentSuiteRunner - Test suite runner that runs tests concurrently, multiple testpoints simultaneously
* ViewTestSuiteRunner - Test suite runner for concurrently running tests of 
* SystemTestSuiteRunner - Test suite runner for sequentially running tests of the full stack
#### Mocking
#### Stubbing
#### Spying
### Production Tools (/tools)
* SeverManager - a class assisting with management of the http server of an app
* checkExist - a method that checks for the existence of a file;

## Installation 
1. Clone this repository
2. $> npm install

## Running Example Tests
$> npm run testSystem1

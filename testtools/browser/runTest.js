/**
 * run the jasmine test after defining the reporter
 * 
 * @module runTest
 */
define(['jquery',
        'jasmine-boot', 
        'browerTesttools/defineReporter',
        "browerTesttools/getSearchParameters"], function($, boot, defineReporter, getSearchParameters){

    // var testScript = document.querySelector("script[data-testFile]")
    // var testFile = testScript.dataset.testfile;

    testFile = "/"+getSearchParameters().testFile;

    require([testFile], function(){
        $(document).ready(function(){
            defineReporter();
            //trigger Jasmine
            window.onload();
        })
    });
})
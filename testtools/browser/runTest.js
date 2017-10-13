/**
 * run the jasmine test after defining the reporter
 * 
 * @module runTest
 */
define(['jquery', 'jasmine-boot', 'browerTesttools/defineReporter'], function($, boot, defineReporter){

    var testScript = document.querySelector("script[data-testFile]")
    var testFile = testScript.dataset.testfile;

    require([testFile], function(){
        $(document).ready(function(){
            defineReporter();
            //trigger Jasmine
            window.onload();
        })
    });
})
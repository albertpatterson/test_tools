// Requirejs Configuration Options
requirejs = {
    // to set the default folder
    baseUrl: '.', 
    // paths: maps ids with paths (no extension)
    paths: {
        'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min',
            
        // 'followUser': './public/scripts/followUser',
        // 'insertPost': './public/scripts/insertPost',
        // 'showFollowedPosts': './public/scripts/showFollowedPosts',

        // 'jasmine': ['./testtools/browser/jasmine-2.6.1/jasmine'],
        // 'jasmine-html': ['./testtools/browser/jasmine-2.6.1/jasmine-html'],
        // 'jasmine-boot': ['./testtools/browser/jasmine-2.6.1/boot'],
        
        // "browerTesttools": "./testtools/browser",

        // 'runTest': 'testtools/browser/runTest',

        'jasmine': ['./jasmine-2.6.1/jasmine'],
        'jasmine-html': ['./jasmine-2.6.1/jasmine-html'],
        'jasmine-boot': ['./jasmine-2.6.1/boot'],
        
        "browerTesttools": ".",

        // 'runTest': 'testtools/browser/runTest',
        

        // 'maskWithSpy': './testtools/mock/maskWithSpy',
        // 'createFullSpy': './testtools/mock/createFullSpy',
        // 'jqueryFullSpy': './testtools/mock/jqueryFullSpy'

    },
    // shim: makes external libraries compatible with requirejs (AMD)
    shim:   {
        'jasmine-html': {
            deps : ['jasmine']
        },
        'jasmine-boot': {
            deps : ['jasmine', 'jasmine-html']
        }
    }
};
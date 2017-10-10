// Requirejs Configuration Options
requirejs = {
    // to set the default folder
    baseUrl: '.', 
    // paths: maps ids with paths (no extension)
    paths: {
        'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min',
            
        'followUser': './public/scripts/followUser',
        'insertPost': './public/scripts/insertPost',
        'showFollowedPosts': './public/scripts/showFollowedPosts',

        'jasmine': ['./testtools/lib/jasmine-2.6.1/jasmine'],
        'jasmine-html': ['./testtools/lib/jasmine-2.6.1/jasmine-html'],
        'jasmine-boot': ['./testtools/lib/jasmine-2.6.1/boot'],
        
        'defineReporter': './testtools/utils/defineReporter',
        'runTest': './testtools/utils/runTest',
        // 'squire': './testtools/utils/squire',

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
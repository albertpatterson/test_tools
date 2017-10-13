// function to load the required resources to run the test in jasmine
(function(){
        
    var favicon = document.createElement('link');
    favicon.rel="shortcut icon";
    favicon.type="image/png";
    favicon.href="testtools/browser/jasmine-2.6.1/jasmine_favicon.png";
    document.head.appendChild(favicon);

    var frag = document.createDocumentFragment();

    var styles = document.createElement('link');
    styles.rel="stylesheet";
    styles.href="testtools/browser/jasmine-2.6.1/jasmine.css";
    frag.appendChild(styles);

    var requirejsConfig = document.createElement('script');
    requirejsConfig.src="testtools/browser/requirejs/requirejsConfig.js";    
    frag.appendChild(requirejsConfig);
    
    requirejsConfig.onload = function(){
        var requirejs = document.createElement('script');
        requirejs.dataset.main = "runTest";
        requirejs.src = "testtools/browser/requirejs/require.js";
        document.body.appendChild(requirejs);
    }
   
    document.body.appendChild(frag);
})()
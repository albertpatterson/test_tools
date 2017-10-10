function promiseCallbackExecution(element, eventName){
    return new Promise(function(res){
        let listener = element.addEventListener(
            eventName,
            function(){
                console.log(eventName);
                // element.removeEventListener(eventName, listener);
                res(arguments);
            })
    })
}

function promiseNewPageLoad(window, timeout){
    timeout = timeout||5e3;
    return new Promise(function(res, rej){
        let oldHref = window.location.href;
        let int = setInterval(function(){
            let currentHref = window.location.href;
            if((currentHref!==oldHref)&&(window.document.readyState=='complete')){
                clearTimeout(failTimeout);
                clearInterval(int);
                res();
            }
        })
        let failTimeout = setTimeout(function(){
            clearInterval(int);
            rej("The new page did not load within the timeout.");
        }, timeout);
    })
}

describe("Example1", function(){

    let testWindow;
    // let myval;
    const url = 'http://localhost:3000/';

    beforeAll(function(done){
        testWindow = window.open(url);
        promiseCallbackExecution(testWindow, 'load').then(done);
    })

    afterAll(function(){
        testWindow.close();
    })


    it("Should show 1 step at a time", function(done){
        let steps = testWindow.document.getElementsByClassName('step');

        expect($(steps[0]).is(':visible')).toBe(true);

        for(var i=1; i<steps.length; i++){
            expect($(steps[0]).is(':visible')).toBe(false);
        }
    })
})
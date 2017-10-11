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

function pollFor(pollFun, maxTime){
    return new Promise(function(res, rej){
        let timeout = setTimeout(
            function(){
                clearInterval(polling);
                res(false);
            },
            maxTime || 1e3);

        let polling = setInterval(
            function(){
                if(pollFun()){
                    clearTimeout(timeout);
                    res(true);
                }
            },100);       
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


    it("Should show 1 step at a time", function(){
        let steps = testWindow.document.getElementsByClassName('step');

        expect($(steps[0]).is(':visible')).toBe(true);

        for(var i=1; i<steps.length; i++){
            expect($(steps[i]).is(':visible')).toBe(false);
        }
    })

    it("Should perform action 1 and move to the next step when the button is clicked on the first stem", function(done){
        let steps = testWindow.document.getElementsByClassName('step');

        let step1 = $(steps[0]);
        let step2 = $(steps[1]);
        let nextButton = testWindow.document.querySelector("#step1 .nextButton");

        nextButton.click();

        pollFor(()=>$(nextButton).hasClass("disabled") && $(nextButton).attr("disabled"))
        .then(buttonDisabled => expect(buttonDisabled).toBe(true))
        .then(()=>pollFor(()=>!step1.is(':visible')))
        .then(step1NotVisible => expect(step1NotVisible).toBe(true))
        .then(()=>pollFor(()=>step2.is(':visible')))
        .then(step2Visible => expect(step2Visible).toBe(true))
        .catch(err=>expect(err).toBe(null))
        .then(done)
    })
})
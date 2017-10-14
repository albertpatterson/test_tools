define(['browerTesttools/pollFor', 'browerTesttools/waitForEvent'], function(pollFor, waitForEvent){
    describe("Example1", function(){
    
        let testWindow;
        // let myval;
        // const url = 'http://localhost:3000/';
        const url = "examples/example1/example1.html";
    
        let step1, step2, step3, completedStep
    
        beforeAll(function(done){
            testWindow = window.open(url);
    
            waitForEvent(testWindow, 'load')
            .then(function(){
                
                let steps = testWindow.document.getElementsByClassName('step');
                step1 = steps[0];
                step2 = steps[1];    
                step3 = steps[2];
                completedStep = steps[3];
    
                done();
            });
            
        })
    
        afterAll(function(){
            testWindow.close();
        })
    
        it("Should show 1 step at a time", function(){
                
            expect($(step1).is(':visible')).toBe(true);
            expect($(step2).is(':visible')).toBe(false);
            expect($(step3).is(':visible')).toBe(false);
            expect($(completedStep).is(':visible')).toBe(false);
        })
    })
})
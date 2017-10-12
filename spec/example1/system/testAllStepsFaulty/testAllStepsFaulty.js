define(['browerTesttools/pollFor', 'browerTesttools/waitForEvent'], function(pollFor, waitForEvent){
    describe("Example1", function(){

        let testWindow;
        // let myval;
        const url = 'http://localhost:3000/';

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
        
        it("Should perform action 1 and move to the next step when the button is clicked on the first step", function(done){
            
            let nextButton = step1.querySelector(".nextButton");
            
            // neglect to click the next button
            // nextButton.click();

            pollFor(()=>$(nextButton).hasClass("disabled") && $(nextButton).attr("disabled"))
            .then(buttonDisabled => expect(buttonDisabled).toBe(true))
            .then(()=>pollFor(()=>!$(step1).is(':visible')))
            .then(step1NotVisible => expect(step1NotVisible).toBe(true))
            .then(()=>pollFor(()=>$(step2).is(':visible')))
            .then(step2Visible => expect(step2Visible).toBe(true))
            .catch(err=>expect(err).toBe(null))
            .then(done)
        })
    })
})
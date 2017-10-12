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
    
    
        it("Should show 1 step at a time", function(){
            
    
            expect($(step1).is(':visible')).toBe(true);
            expect($(step2).is(':visible')).toBe(false);
            expect($(step3).is(':visible')).toBe(false);
            expect($(completedStep).is(':visible')).toBe(false);
        })
    
        it("Should perform action 1 and move to the next step when the button is clicked on the first step", function(done){
            
    
            let nextButton = step1.querySelector(".nextButton");
    
            nextButton.click();
    
            pollFor(()=>$(nextButton).hasClass("disabled") && $(nextButton).attr("disabled"))
            .then(buttonDisabled => expect(buttonDisabled).toBe(true))
            .then(()=>pollFor(()=>!$(step1).is(':visible')))
            .then(step1NotVisible => expect(step1NotVisible).toBe(true))
            .then(()=>pollFor(()=>$(step2).is(':visible')))
            .then(step2Visible => expect(step2Visible).toBe(true))
            .catch(err=>expect(err).toBe(null))
            .then(done)
        })
    
        it("Should perform action 2 and move to the next step when the button is clicked on the second step", function(done){
    
            let nextButton = step2.querySelector(".nextButton");
    
            nextButton.click();
    
            pollFor(()=>$(nextButton).hasClass("disabled") && $(nextButton).attr("disabled"))
            .then(buttonDisabled => expect(buttonDisabled).toBe(true))
            .then(()=>pollFor(()=>!$(step2).is(':visible')))
            .then(step2NotVisible => expect(step2NotVisible).toBe(true))
            .then(()=>pollFor(()=>$(step3).is(':visible')))
            .then(step2Visible => expect(step2Visible).toBe(true))
            .catch(err=>expect(err).toBe(null))
            .then(done)
        })
    
    
        it("Should perform action 3 and move completed step when the button is clicked on the third step", function(done){
            
            let nextButton = step3.querySelector(".nextButton");
    
            nextButton.click();
    
            pollFor(()=>$(nextButton).hasClass("disabled") && $(nextButton).attr("disabled"))
            .then(buttonDisabled => expect(buttonDisabled).toBe(true))
            .then(()=>pollFor(()=>!$(step3).is(':visible')))
            .then(step3NotVisible => expect(step3NotVisible).toBe(true))
            .then(()=>pollFor(()=>$(completedStep).is(':visible')))
            .then(completedStepVisible => expect(completedStepVisible).toBe(true))
            .catch(err=>expect(err).toBe(null))
            .then(done)
        })
    })
})
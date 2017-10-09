(function(){

    document.body.style.display="none";

    var steps = document.getElementsByClassName("step");

    function hideAndShowNext(step, id){
        step.classList.remove("showing");
        document.getElementById(id).classList.add("showing");
    }

    [].forEach.call(steps, step=>{

        var name = step.dataset.name;
        var next = step.dataset.next;

        var frag = document.createDocumentFragment();
        var inner = document.createElement("div");
        inner.classList.add("stepInner");
        frag.appendChild(inner);

        var label = document.createElement("p");
        label.innerText = name;
        label.classList.add('label');
        inner.appendChild(label);

        if(next){
            
            var nextButton = document.createElement("button");
            nextButton.classList.add("nextButton");

            nextButton.onclick = function(){

                var prom, action = step.action;
                if(action){
                    prom=action();
                    nextButton.classList.add("disabled");
                    nextButton.disabled = true;
                }else{
                    prom=Promise.resolve();
                }


                prom.then(function(){
                    hideAndShowNext(step, next);
                })
            }

            inner.appendChild(nextButton);
        }

        step.appendChild(frag);
    })


    document.body.style.display="block";
})()
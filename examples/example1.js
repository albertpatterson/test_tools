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
        var label = document.createElement("p");
        label.innerText = name;
        label.classList.add('label');
        frag.appendChild(label);

        if(next){
            var nextButton = document.createElement("button");
            nextButton.onclick = ()=>hideAndShowNext(step, next);;
            nextButton.innerText = "Next"
            nextButton.classList.add("nextButton");
            frag.appendChild(nextButton);
        }

        step.appendChild(frag);
    })


    document.body.style.display="block";
})()
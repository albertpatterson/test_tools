// helper function to poll for some condition to be true 
define([], function(){

    return function(pollFun, maxTime){
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
})
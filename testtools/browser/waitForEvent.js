// a helper to wait for some event to execute
define([], function(){
    return function(element, eventName){
        return new Promise(function(res){
            let listener = element.addEventListener(
                eventName,
                function(){
                    element.removeEventListener(eventName, listener);
                    res(arguments);
                })
        })
    }
})
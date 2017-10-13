// utility for parsing the search query
define([],function(){

    return function(){
        var params = {};
        var searchQuery = document.location.search.slice(1);
        searchQuery.split("&")
        .forEach(function(pair){
            var parts=pair.split("=");
            params[parts[0]]=parts[1];
        })
        return params;
    }
})
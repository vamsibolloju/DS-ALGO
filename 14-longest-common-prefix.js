// brute force
/*
var longestCommonPrefix = function(strs) {
    if(!strs.length) return "";
    var prefix = "";
    var index = 0;
    var flag = true;
    while(flag){
        var char = strs[0][index];
        for( var i = 1; i < strs.length; i++ ){
               if(strs[i][index] !== char){
                    flag = false;
               } 
        }
        if(flag){
            prefix = prefix + "" + char;
        }
        index ++;
    }
    return prefix;
};
*/

var longestCommonPrefix = function(strs) {
    var prefix = strs[0] || "";
    for(var i = 1; i < strs.length; i++ ){
        while( strs[i].indexOf(prefix) !==0  ){
            prefix = prefix.substr(0, prefix.length - 1);
        }
    }
    return prefix;
}

var result = longestCommonPrefix(["flower","flow","flight"]);
console.log(result);

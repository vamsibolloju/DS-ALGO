// with string 
/*
var reverse = function(x) {    
    var str = x.toString();
    if(x < 0){
        str = str.substr(1, str.length);
    }
    str = str.toString().split("").reverse().join("");
    var result = (x < 0) ?  0 - Number(str) :Number(str);
    if(2147483648 < result || result < -2147483648){
        return 0;
    }
    return result;
};
*/

var reverse = function(x) {    
    var negative = false;
    if(x < 0){
        negative = true;  
        x = x* -1 
    };

    var reversed = 0;
    while (x > 0){
        reversed = (reversed * 10 ) + x%10
        x = Math.floor(x/10);
    }
    if(2147483648 < reversed || reversed < -2147483648){
        return 0;
    }
    return negative ? reversed * -1 : reversed;
}


var result = reverse(123);
console.log(result);
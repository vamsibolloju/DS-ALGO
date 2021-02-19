// with string
/*
var isPalindrome = function(x) {
   if(x < 0){
       return false;
   } 
   var str = x.toString();
   var reversed = str.split("").reverse().join("");
   if(2147483648 < Number(reversed)){
        return false;
   }
   return reversed === str;
};
*/

var isPalindrome = function(x) {
    if (x === 0) { return true }
    if ( x < 0 || x % 10 === 0 ){ return false }
    var reversed = 0;
    while(x > reversed){
        reversed = (reversed * 10) + (x % 10);
        x = Math.floor(x/10);
    }
    return (x === reversed || x === Math.floor(reversed / 10) ); 
}


var result = isPalindrome(121);
console.log(result);
var longestPalindrome = function(s) {
    var longest = '';
    for (var i = 0; i < s.length; i++){
        for (var j = i; j <= s.length; j++){
            var str = s.substr(i,j - i);
            if( str.length > longest.length && isPalindrome(str)){
                longest = str;
            };
        }        
    }
    return longest;
};

function isPalindrome(s){
    return ( s === s.split('').reverse().join('') )
}

var result = longestPalindrome("racecar");
console.log(result);
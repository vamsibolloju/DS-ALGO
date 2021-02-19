// Time O(2n)
// space O(n) 

function getMaxNonConsicutives(str){
    var start = 0; //1
    var end = 0; // 3
    var max = 0;  // 2
    var strSet = new Set()  // [ 'p', 'k', 'e' ]
    for (var ind in str){
        const char = str[ind];
        while( strSet.has(char)){
            strSet.delete(str[start]);
            start++;
        } 
        strSet.add(char);
        max = Math.max((end - start)+1, max);
        end++;        
    }
    return max;
}


var result = getMaxNonConsicutives("pwwkew");
console.log(result);
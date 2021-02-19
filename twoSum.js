

/* Brute force
    Time O(n2)
    space O(1)
*/
/*
var twoSum = function(nums, target) {
    var length = nums.length;
    for ( var i = 0; i < length; i++ ){
        for( var j = i+1; j < length; j++ ){
            if( nums[i] + nums[j] === target){
                return [ i, j ];    
            } 
        }
    }    
};
*/

/*
    better
    Time O(n)
    Space O(n)
*/

var twoSum = function(nums, target) {
    var numMap = {};
    for(var i = 0 ; i < nums.length; i++  ){
        var complement = target - nums[i];
        if(numMap[complement] !== undefined){
            return [numMap[complement] , i]
        } 
        numMap[nums[i]] = i;         
    }
}


var result = twoSum([2,7,11,15], 9)
console.log(result);
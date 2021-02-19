// with caching
// T O(n)
// S O(n)
/*
var containsDuplicate = function(nums) {
    var cache = {};
    var hasDuplicate = false;
    for(var num of nums){
        if(cache[num]){
            hasDuplicate = true;
            break;
        }
        cache[num] = 1;
    }
    return hasDuplicate;
};
*/

// with sorting
// T O(nlogn)
// S O(1)
var containsDuplicate = function(nums) {
    nums = nums.sort((a,b) => a - b);
    var hasDuplicates = false;
    for(var i = 0; i < nums.length - 1; i++){
        if(nums[i] === nums[i+1]){
            hasDuplicates = true;           
            break;
        }    
    }
    return hasDuplicates;    
}

var result = containsDuplicate([1,2,3,2,4]);
console.log(result);

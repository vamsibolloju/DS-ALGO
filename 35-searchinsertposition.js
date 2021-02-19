//Linear search
// T O(n)
/*
var searchInsert = function(nums, target) {
   var i = 0;
    while( i < nums.length ){
        if(nums[i] >= target ){
            break;
        }
        i++;  
    }
    return i;
};
*/

var searchInsert = function(nums, target) {
    var left = 0;
    var right = nums.length - 1;
    var index = 0;

    while(left <= right){
        var middle = Math.floor(left + ( right - left ) / 2);
        if(nums[middle] === target){
            index = middle;
            break
        } else if (nums[middle] < target){
            left = middle + 1; 
        } else {
            right = middle - 1;
        }
        index = left;       
    }
    return index;
}

var result = searchInsert([1,3,5,6], 8);
console.log(result);
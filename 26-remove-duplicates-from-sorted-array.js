var removeDuplicates = function(nums) {
    var index = 1;
    for(var i = 0; i < nums.length - 1; i++){
       if(nums[i] !== nums[i+1]){
         nums[index] = nums[i+1];
         index++;
       } 
    }
    return index;
};

var result = removeDuplicates([1,1,2]);
console.log(result);

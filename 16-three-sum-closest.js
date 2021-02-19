var threeSumClosest = function(nums, target) {
    var result = nums[0] + nums[1] + nums[nums.length - 1]; 
    nums = nums.sort( (a,b) => a-b );
    for (var i = 0; i < nums.length - 2; i++){
        var low = i + 1;
        var high = nums.length - 1;
        while ( low < high){
            var sum = nums[i] + nums[low] + nums[high];
            if(sum > target){
               high --;
            } else {
                low ++;
            }
            if(Math.abs( sum - target ) < Math.abs( result - target ) ){
                result = sum;    
            } 
        };
    }
    return result;
};


console.log(threeSumClosest([1,2,4,8,16,32,64,128], 82));
// Brute force
/*
var maxSubArray = function(nums) {
    var max = nums[0];
    for(var i = 0; i < nums.length; i++){
        var subMax = nums[i];
        max = Math.max(max, subMax);
        for(var j = i+1; j < nums.length; j++){
            subMax = subMax + nums[j];
            max = Math.max(max, subMax);
        }
    }
    return max;
};
*/

var maxSubArray = function(nums) {
    var table = [];
    table[0] = nums[0];
    var max = table[0];
    for(var i = 1; i < nums.length; i++){
        table[i] = Math.max(nums[i] , nums[i] + table[i - 1] );
        max = Math.max(max, table[i]);
    }
    return max;
}


var res = maxSubArray([-2,1]);
console.log(res);

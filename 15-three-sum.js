var threeSum = function(nums) {
   nums = nums.sort( (a,b) => a-b );
   var resultArr = []; 

   for (var i = 0; i < nums.length - 2; i++ ){
      if(nums[i] === nums[i-1]){
         continue;
      }
      var low = i + 1;
      var high = nums.length - 1;
      while(low < high){
         var sum  = nums[i] + nums[low] + nums[high];
         if(sum === 0){
            resultArr.push( [ nums[i], nums[low], nums[high] ]);
            while(low < high && nums[low] === nums[low+1] ) low++;
            while(low < high && nums[high] === nums[high-1] ) high--;
            low++;
            high--
         } else if( sum < 0){
            low++
         } else {
            high--
         }
      }
   }
   return resultArr;
};

var result = threeSum([-2,0,0,2,2]);
console.log(result);

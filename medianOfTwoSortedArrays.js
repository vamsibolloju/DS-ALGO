// Brute force
/*
var findMedianSortedArrays = function(nums1, nums2) {
    var arr = [ ...nums1, ...nums2 ];
    arr.sort((x,y) => x-y);
    if(arr.length % 2 === 0){
       return ( arr[ arr.length / 2 ] + arr[ (arr.length / 2) - 1 ] ) /2;
    } else {
       return arr[ Math.ceil( (arr.length / 2) - 1 ) ]        
    }   
};
*/

var findMedianSortedArrays = function(nums1, nums2) {
    var m = nums1.length;
    var n = nums2.length;
    var nums3 = [];
    var i = 0, j = 0, k = 0;
    while( i < m && j < n ){
        if(nums1[i] < nums2[j] ){
            nums3.push(nums1[i]);
            i++
        } else {
            nums3.push(nums2[j]);
            j++
        }
    }

    while (i < m){
        nums3.push(nums1[i]);
        i++
    }

    while (j < n){
        nums3.push(nums2[j]);
        j++
    }

    if(nums3.length % 2 === 0){
        return ( nums3[ nums3.length / 2 ] + nums3[ (nums3.length / 2) - 1 ] ) /2;
     } else {
        return nums3[ Math.ceil( (nums3.length / 2) - 1 ) ]        
     }

}


var result = findMedianSortedArrays([3], [-2, -1]);
console.log(result);
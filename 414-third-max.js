var thirdMax = function(nums) {
    var max, secondMax, thirdMax;
    
    for(var val of nums){
        if(val > (thirdMax || -Infinity ) ){
            if(val > (secondMax || -Infinity ) ){
                if(val > ( max || -Infinity) ) {
                    thirdMax = secondMax;
                    secondMax = max;
                    max = val;
                } else if( val !== max ){
                    thirdMax = secondMax;
                    secondMax = val;
                }
            } else if ( val !== secondMax){
                thirdMax = val;
            }
        } 
    }    
    var result = (thirdMax === undefined) ? max : thirdMax;
    return result;
};

var result =  thirdMax([1,2, -3]);
console.log(result);

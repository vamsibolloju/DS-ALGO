var myAtoi = function(s) {
    s = s.trim();
    var negitive = false;
    var i = 0;
    if(s[0] === '-'){
        negitive = true;
        i++;
    }
    if(s[0] === '+'){ i++ }
    var number = 0;
    while(is_numeric(s[i])){
        number = (number * 10) + Number(s[i]);
        i++;
    };

    var limit = negitive ? 2147483648 : 2147483647 

    if(  limit < number){
            number =  negitive ? 2147483648 : 2147483647; 
    }
    return negitive ? number * -1 : number;
};

function is_numeric(str){
    return /^\d+$/.test(str);
}

var result = myAtoi("2147483648");
console.log(result);
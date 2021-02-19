var isValid = function(s) {
  if(s.length % 2) return false;
  var stack = [];
  for (var c of s ){
    if( c === '{' || c === '[' || c === '(' ){
      stack.push(c) 
    } else {
      var lastChar = stack[stack.length - 1];
      if( (c === '}' && lastChar === '{') ||
          (c === ']' && lastChar === '[') ||
          (c === ')' && lastChar === '(') ){
        stack.pop();  
      } else {
        stack.push(c);
      }
    }
  }
  return !stack.length;
};

var result = isValid("([}}])");
console.log(result);
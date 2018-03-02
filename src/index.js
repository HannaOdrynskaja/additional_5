module.exports = function check(str, bracketsConfig){ 
var arr = bracketsConfig;
var arrOpen = [];
var arrClose = [];	
console.log(arr);
for (var i = 0; i < arr.length; i++) {
			arrOpen[i]=arr[i][0];
			arrClose[i]=arr[i][1];
}
			var chars = str.split(''),
			stack = [],
			open = arrOpen,
			close = arrClose,
			closeBr,
		    openBr;
						
    for (var i = 0, len = chars.length; i < len; i++) {
       openBr = open.indexOf(chars[i]);
       if (openBr !== -1) {
           stack.push(openBr);
           continue;
       }

       closeBr = close.indexOf(chars[i]);
       if (closeBr !== -1) {
           openBr = stack.pop();
           if (closeBr !== openBr) {
               return false;
           }
       }
    }

    if (stack.length !== 0) {
        return false;
    }

    return true;
}



// 15. Numbers and ASCII
// Learn about the Numeral Systems (Binary, Octal, Decimal, Hex) and the ASCII table. You can use the CS50 first problem set as a reference (we recommend that you do as much you can from CS50 problem sets)

// If were counting in the number system that has base 3, we only can use 0, 1, 2. The first 6 numbers would be:
// 0, 1, 2, 10, 11, 12
// Keep counting, what are the next 6 numbers?
// 20, 21, 22, 100, 101, 102

// Write a single Javascript line that we can execute on the following ASCII array, to convert it into a sentence
// var ascii = [73, 32, 115, 112, 101, 97, 107, 32, 105, 110, 32, 110, 117, 109, 98, 101, 114, 115]
// So you would do something like:


// ascii.function1(..).function2(..).function3(..) ..
// and the result would be the numbers above converted form ASCII to text (you can only use JS built-in function for this)

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt

var ascii = [73, 32, 115, 112, 101, 97, 107, 32, 105, 110, 32, 110, 117, 109, 98, 101, 114, 115]; // I speak in numbers

var numbToAscii = function(arrayOfNumbers)  { return ascii.map(function (item, index, all){
console.log("all" + all + "item" + item + "index" + index);	
return String.fromCharCode(item); 	
},0); 
};

console.log(numbToAscii(ascii).toString());

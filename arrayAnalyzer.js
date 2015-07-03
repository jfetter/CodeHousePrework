// Write a javascript function that takes multiple arguments that are all integers and calculates the following:

// Count of odd integers
// Count of negative integers
// The average of all integers (round to 2 decimal)
// The median of all integers
// Test case:

// arrayAnalyzer(7, -3, 0, 12, 44, -5, 3);
// would return:

// { "odds": 4, "negatives": 2, "avg": 8.29, "median": 3 }

var numbers = [7, -3, 0, 12, 44, -5, 3];

var identifyOdd = function(array){
 	var odd = [];
 	array.map(function(all, item, index){
 	if (Math.abs(array[item] % 2) > 0)
 		{odd.push(array[item]);}
 	return odd;
 	},0);
 	return odd.length;
}; 

var identifyNegative = function(array){
 	var neg = [];
 	array.map(function(all, item, index){
 	if (array[item] < 0)
 		{neg.push(array[item]);}
 	return neg;
 	},0);
 	return neg.length;
}; 


var calcMedian = function(array){
	array = array.sort();
	midPoint = Math.round(array.length/2);
	if (array.length%2 === 0)
 	{return array[midPoint];
 	} else {
   		return (array[midPoint] + array[midPoint])/2;
   	}
};


var calcMean = function(array){
var  accumulation;	
 	array.reduce(function(previousValue, currentValue, index){
 	accumulation = previousValue + currentValue;
 	return accumulation;
 	},0);
 	return (accumulation/array.length).toFixed(2);
 };





var arrayAnalyzer = function(array){
 return '{"odds":' + identifyOdd(array) +' ,"negatives":' +identifyNegative(array) + ' "avg": '+ calcMean(array) + ' "median": ' + calcMedian(array) +'}';
};
console.log(arrayAnalyzer(numbers));
// Write a javascript function that takes multiple arguments that are all integers and calculates the following:

// Count of odd integers
// Count of negative integers
// The average of all integers (round to 2 decimal)
// The median of all integers
// Test case:

// arrayAnalyzer(7, -3, 0, 12, 44, -5, 3);
// would return:

// { "odds": 4, "negatives": 2, "avg": 8.29, "median": 3 }
var numbers = [2,4,6,8,10,12];
var arrayAnalyzer = function(){
 	reduce(function{
 	
 	},{});
};
console.log(arrayAnalyzer(7, -3, 0, 12, 44, -5, 3));
console.log(arrayAnalyzer(what happens with words?));

var identifyOdds = function(array){}; 
var identifyNegative = function(array){}; 

var calcMean = function(array){
var  accumulation;	array.reduce(function(previousValue, currentValue, index){
 	accumulation = previousValue + currentValue;
 	return accumulation;
 	},0);
 	return accumulation/array.length;
 };
console.log(calcMean(numbers));


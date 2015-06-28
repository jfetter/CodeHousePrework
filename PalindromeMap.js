// A palindromic word is a word that reads the same way forward and backwards (i.e. racecar, reviver, rotator).

// Write a JS function that takes a string argument, and returns an array of true/false values that map to whether the word in that position is palindromic or not.

// Use the .map function in your solution and don't use any loops.

// Test Case:

// palindromicMap("stash and pop on this level")
// Would return

// [false, false, true, false, false, true]

//what I need to do 
// (1)set up test cases for strings: 
// aaa one = true false
// the only one = false false false
// 72 = false 
// 101 = true
// detartrated 454 mom = true true true
// (2)convert that string to an array separating each word out-- use .split(" ")
// (3) feed the array into a function as an argument palendromeSearch = function(){};
// (4) within the function set up a variable that defines the length of a word as word.length-1. 
// (5) length/2 (<-whole number ie round off if there is an odd number of letters because the center letter doesnt matter)
// (6) incramentally move in from both sides of the length/2...
// (7)have the function look at each word individually to see if the word[0] = word[length] if they are equal, then move on to word[1] the word[length-1] ... keep going until word[a]=word[b]
// (8) return true if all values equate until you reach the middle of the word. 
//  planning thus far approx 20 min. 






checkForPalindromism = function(letters){
 	var wordLength = letters.length -1; 
 	var palindrome = false; 
 	var matchCounter =0;
 	letters.map(function(all, item, index){
 	console.log(letters[item], letters[wordLength -item]);
 	if (letters[item] === (letters[wordLength - item] )){
 		matchCounter += 1;} // if letters ===
 	if (matchCounter >= letters.length){
 		palindrome = true;} //if matchCounter
 		},0); // map
 		console.log(palindrome);
 		return palindrome;
 } //checkForPalindromism
 		// for : 12345
 		// 1 vs 5
 		// 2 vs 4
 		// 3 vs 3
 		// 4 vs 2
 		// 5 vs 1

isItAPalindrome = function(text){
 	var trueFalseList = [];
	var words = text.split(" ");
 	console.log(words);
	return words.map(function(all, item, index){
 	  	var letters = (words[item]).split("");
 		console.log(letters);
		if (checkForPalindromism(letters) === true)
 		{
 		trueFalseList.push(true);
 	} else { 
 	trueFalseList.push(false);
 	} 
console.log(trueFalseList);
return trueFalseList;
 	}); //map
}// function

// document.getElementById("outPut").innerHTML = isItAPalindrome(prompt("entersometext"));


console.log(isItAPalindrome("aaaaa abc"));// true false
console.log(isItAPalindrome("aba bbbb abc"));// false false false
console.log(isItAPalindrome("72"));// false
console.log(isItAPalindrome("101"));//true
console.log(isItAPalindrome("a"));//true
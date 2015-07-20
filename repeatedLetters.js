//Write a JavaScript function that takes a sentence as an argument and determines which word in that sentence has the greatest number of repeated letters.

// If the sentence has multiple words with the same max of repeated letters, return them all in an Array.

// Test Case:

// wordSelector("I attribute my success to this: I never gave or took any excuse. –Florence Nightingale")
// Would select the words:

// ["attribute", "success"]

//create a variable that is a string-- test cases for: var string = "woo me my boo"; "He was an eerie bookeeper"; "I would have gone to mississippi, but at the time I was willless"; "I attribute my success to this: I never gave or took any excuse. –Florence Nightingale"
//write a function to divide the string in to words: var divde = function(string){string.split()};
// create a variable that is a counter var currentCountOfRepeats = 0; 
// create an array to compare for the previous word var oldCountOfRepeats = [];
// push the word to an array
// change all letters to be lowercase
// sort the letters in each word so that they are arranged in alphabetical order.
// loop through the sorted letters in the world 
// if ([i]==[i+1] ) {countOfRepeats ++};
// push the value on the counter to an array... 
// compare the value in the counter array to the value of the current counter.  if the value is greater than the previous value pop the previous word from the word array and pop the value from the counter array then push the new values to each array 
// if the value of the counter is equal then just push the values to the arrays 
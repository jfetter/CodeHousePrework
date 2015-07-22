//Write a JavaScript function that takes a sentence as an argument and determines which word in that sentence has the greatest number of repeated letters.

// If the sentence has multiple words with the same max of repeated letters, return them all in an Array.

// Test Case:

// wordSelector("I attribute my success to this: I never gave or took any excuse. –Florence Nightingale")
// Would select the words:

// ["attribute", "success"]

var wordSelector = function(string){
	// create a variable that is a counter var currentCountOfRepeats = 0; 
 	var currentCountOfRepeats = 0; 
 	// create an array to compare for the previous word var oldCountOfRepeats = [];
 	var oldCountOfRepeats = 0;
 	//createa an array to store the word with the most repeats-- start it out with something to avoid an error when the first word goes in;
 	var wordWithMostRepeats =["words will replace this"];
	//  divide the string in to an array  of word
	var arrayOfWords = string.split(" "); 
 	var searchForRepeats = arrayOfWords.map(function(all, item, index){
 		// change all letters to be lowercase and sort the letters in each word so that they are arranged in alphabetical order.
 	 	var sortedWord = (item.lowercase).sort(); 
 		// divide the word into letters so they can be compared
 		var letters = sortedWord.spilt(""); 
 		// if the current letter is the same as the next letter, add 1 to a counter of repeated letters
 		while (item < letters.length -1){
 		if (letters[index] == letters[index + 1]){
 			currentCountOfRepeats ++;
 		};
 		// if there are more repeat letters in the current word (or current sequence in the same word) remove the old word and add the new word to the most repeats array;
 		if (oldCountOfRepeats < currentCountOfRepeats){
 			wordWithMostRepeats.pop()}
 		if (oldCountOfRepeats <= currentCountOfRepeats){
 			oldCountOfRepeats = currentCountOfRepeats;  
 			wordWithMostRepeats.push(arrayOfWords[item])
 		}; // end if oldCountOfRepeats...
 	}; // end while 
 	return wordWithMostRepeats; 	
 	},0);
 	return wordWithMostRepeats;
};

console.log(wordSelector("He was an eerie bookeeper")); // returns [eerie, bookeeper] 
console.log(wordSelector("I would have gone to mississippi, but I was willless")); // returns [mississippi] oorrr Mississipi???
console.log(wordSelector("I attribute my success to this: I never gave or took any excuse. –Florence Nightingale")); // returns [attribute, success] 
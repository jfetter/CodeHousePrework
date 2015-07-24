//Write a JavaScript function that takes a sentence as an argument and determines which word in that sentence has the greatest number of repeated letters.

// If the sentence has multiple words with the same max of repeated letters, return them all in an Array.

// Test Case:

// wordSelector("I attribute my success to this: I never gave or took any excuse. –Florence Nightingale")
// Would select the words:

// ["attribute", "success"]

var wordSelector = function(string){
 	// create an array to compare for the previous word var oldCountOfRepeats = [];
 	var oldCountOfRepeats = 0;
 	//create an array to store the word with the most repeats-- start it out with something to avoid an error when the first word goes in;
 	var wordWithMostRepeats =[];
	//  divide the string in to an array  of word
	var arrayOfWords = string.split(" "); 
 	var searchForRepeats = arrayOfWords.map(function(item, index, all){

 		// divide the word into letters so they can be compared
		var letters = item.toLowerCase().split(""); 
 		// change all letters to be lowercase and sort the letters in each word so that they are arranged in alphabetical order.
  	 	console.log(letters);
 		var sortedWord = letters.sort();
 		console.log(sortedWord); 		
 		var currentCountOfRepeats =0;
	  	console.log(currentCountOfRepeats);
 		var searchForRepeats = sortedWord.map(function(item1, index1, all1){
 			//if the current letter is the same as the next letter, add 1 to a counter of repeated letters 
  			if (sortedWord[index1] === sortedWord[index1 +1]){
  			currentCountOfRepeats ++;
  			}		
  			//reset currentCounteOfRepeats when number of repeat letters ceaeses to grow.(to prevent multiple sets of repeat pais in the same word from being added to counter for that word)
 			else
			{currentCountOfRepeats = 0}
 			// if there are more repeat letters remove the old word and add the new word to the most repeats array;
   			if (currentCountOfRepeats > oldCountOfRepeats){
  			wordWithMostRepeats = [];
 			oldCountOfRepeats = currentCountOfRepeats; 
 			console.log(oldCountOfRepeats, wordWithMostRepeats);
  			} // end if oldCountOfRepeats...
 			// if there are more or an equal amount of consecutive letters than any word before push this word to the wordsWithMostRepeats array
  			if (currentCountOfRepeats >= oldCountOfRepeats){
 				//prevent words that have already been added to wordWithMostRepeats from being re-added; 
  			 	if (wordWithMostRepeats[wordWithMostRepeats.length - 1] != arrayOfWords[index])
 				{wordWithMostRepeats.push(arrayOfWords[index])
 				}; // end avoid repeats in array
 			} //end if <=
 				return wordWithMostRepeats;
  			},0); // end map sortedWord
  			 	console.log("final" + wordWithMostRepeats);
 			return wordWithMostRepeats;
 		},0); // end map arrayOfWords;
 		//return only the final array produced -- the array that has removed all lesser repeats from the string;
 		return searchForRepeats[searchForRepeats.length-1];
}; // end wordSelector

console.log(wordSelector("He was an eerie bookeeper")); // returns [eerie, bookeeper] 
console.log(wordSelector("I would have gone to Mississippi, but I was willless")); // returns [mississippi] oorrr Mississipi???
console.log(wordSelector("I attribute my success to this: I never gave or took any excuse. –Florence Nightingale")); // returns [attribute, success] 
console.log(wordSelector("each word has no duplicates"));
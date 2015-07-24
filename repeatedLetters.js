
var wordSelector = function(string){
 	// create an array to compare for the previous word var oldCountOfRepeats = [];
 	var oldCountOfRepeats = 0;
 	//create an array to store the word with the most repeats-- start it out with something to avoid an error when the first word goes in;
 	var wordWithMostRepeats =[];
 	// strip away punctuation-- to make the appearance in final array cleaner;
	var string = string.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  	//  divide the string in to an array  of word
 	var arrayOfWords = string.split(" "); 
 	var searchForRepeats = arrayOfWords.map(function(item, index, all){

 		// divide the word into letters so they can be compared
		var letters = item.toLowerCase().split(""); 
 		// change all letters to be lowercase and sort the letters in each word so that they are arranged in alphabetical order.
 		var sortedWord = letters.sort();		
 		var currentCountOfRepeats =0;
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
 			return wordWithMostRepeats;
 		},0); // end map arrayOfWords;
 		//return only the final array produced -- the array that has removed all lesser repeats from the string;
 		var finalArrayOfRepeats = searchForRepeats[searchForRepeats.length-1];
 		if (finalArrayOfRepeats.length === 1)
 		{
 		return finalArrayOfRepeats.toString();}
 		else
 		{return finalArrayOfRepeats};
}; // end wordSelector

 	var repeatOffender = document.getElementById("repeatOffenders");  //get a handle on the <div> element 
 	repeatOffenders.innerHTML = wordSelector(prompt("Enter some text and I'll tell you which word has the most repeated letters"));	

console.log(wordSelector("He was an eerie bookeeper")); // returns [eerie, bookeeper] 
console.log(wordSelector("I would have gone to Mississippi, but I was willless")); // returns [mississippi] oorrr Mississipi???
console.log(wordSelector("I attribute my success to this: I never gave or took any excuse. –Florence Nightingale")); // returns [attribute, success] 
console.log(wordSelector("each word has no duplicates")); // returns full sentence; 
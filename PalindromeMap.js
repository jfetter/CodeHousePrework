checkForPalindromism = function(letters) {
	var wordLength = letters.length - 1;
	var palindrome = false;
	var matchCounter = 0;
	letters.map(function(all, item, index) {
		if (letters[item] === (letters[wordLength - item])) {
			matchCounter += 1;
		} // if letters...
		if (matchCounter >= letters.length) {
			palindrome = true;
		}
		return palindrome; //if matchCounter
	}, 0); // map
	return palindrome;
}; //checkForPalindromism 

trueIfAPalindrome = function(text) {
	var trueFalseList = [];
	var words = text.split(" ");
	words.map(function(all, item, index) {
		var letters = (words[item]).split("");
		if (checkForPalindromism(letters) === true) {
			trueFalseList.push(true);
		} else {
			trueFalseList.push(false);
		} // if/else
		return trueFalseList;
	}); //map
	return trueFalseList;
} // trueIfAPalindrome

console.log(trueIfAPalindrome("aaaaa abc")); // true false
console.log(trueIfAPalindrome("aba bbbb abc")); // true true false
console.log(trueIfAPalindrome("72")); // false
console.log(trueIfAPalindrome("101")); //true
console.log(trueIfAPalindrome("a")); //true
console.log(trueIfAPalindrome("stash and pop on this level")); //false false true false false true
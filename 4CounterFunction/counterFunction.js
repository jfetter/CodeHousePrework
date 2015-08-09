// //Write a javascript counter function that takes a text argument and count the following:
//
// Number of words in the text
// Number of characters in the text
// Number of spaces in the text
// Average word length
// Test case
//
// superCounter("Count me in");
// would count: 3 words, 11 characters, 3 chars avg word length, 2 spaces.
//
// Return output as a single object, and don't use any libraries
// 5.20.15 approx 1 hr 15 min
var Counter = {
    text: prompt("Enter some text.")
};

//couldn't figure out what to do w/ add'l spaces without a for loop, so google-rigged my function a bit... 

Counter.superCounter = function(text) {
    var text1 = text.replace(/ +/g, ' ');
    text1 = text1.trim();
    var words = text1.split(" ").length;
    var spaces = text.split(" ").length - 1;
    var characters = text.length - spaces;
    var aveLength = characters / words;

    return("this text contains " + spaces + " spaces and " + words + " words made up of " + characters + " characters. The average word length is: " + aveLength + "   characters long.");
};

console.log(Counter.superCounter(Counter.text));

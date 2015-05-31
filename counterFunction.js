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
text: prompt("Enter some text."),
words: 0,
characters: 0,
spaces: 0
};
Counter.superCounter = function (text,spaces, words)
{
  for (i=0; i <text.length; i++)
  {
if (text[i] === " ")
{  spaces ++;}
  if ((text[i-1]!== " " && text [i] === " " )|| (text[i-1]!== " " && i === text.length-1 ))
  {words ++;}}
var characters = (text.length - spaces);
var aveLength = (characters/ words);
console.log ("the text you entered has " + words + " words, " + characters + " characters, " + spaces + " spaces and the average word length is " + aveLength + " characters.");
};
Counter.superCounter(Counter.text, Counter.spaces, Counter.words);

reverseWords = function(input)
{ var text = input+=" ".split(""); 
var currentWord = []; 
var reversedInPlace = "";
for(i=0; i<text.length; i++)
{if (text[i].match(/[a-z]/) || text[i].match(/[A-Z]/))
   {currentWord.push(text[i]);} // if
else 
{currentWord.reverse();
 reversedInPlace += currentWord.join(""); 
 reversedInPlace += text[i];
 currentWord = [];} // else
} //for
   return reversedInPlace;
 };//reverseWordInPlace
console.log(reverseWords("a man, a plan, a canal, panama"));
console.log(reverseWords("this is fun hopefully"));
console.log(reverseWords("$#^*%#@ 2343 TEst ABcDe"));

//Write a JavaScript function that would swap the case of each character in the string you pass to it as an argument.

// Test Case:
//
// swapCase("Life is 10% what happens to you, and 90% of how you REACT to it");
// Would return:
//
// "lIFE IS 10% WHAT HAPPENS TO YOU, AND 90% OF HOW YOU react TO IT"

//loop through text to identify what is caps and what is low case. if upcase change to down case and vice vrrsus then  add it to a string.
//5.20.15 approx 20 min

var SwapCase = {
text : prompt("Enter some text."),
newText : ""
};

SwapCase.caseSwap = function (text, newText)
{
  for (i=0; i < text.length; i++)
  {
    if (text[i] === text[i].toLowerCase())
    {
      newText += text[i].toUpperCase();
    }
    else
    {
      newText += text[i].toLowerCase();
    }
  }
  console.log(newText);
};

SwapCase.caseSwap(SwapCase.text, SwapCase.newText);

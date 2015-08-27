// 1. function to ammend available letters based on key entered-> replace available letters with "". 
// include a loop to denote invalid key entrered (for numbers, symbols etc)
// 2. function display used letters -> when letters are moved out of available they are pushed into an array either for used letters (which are not in the answer) OR the letters are revealed in the answer; 
// 2a. array of ascii table so letters correspond to ascii positions (ascii.map(function (item, index, all){return String.fromCharCode(item); },0).toString().replace(/,/g,""))
// 2b. function to display the appropriate number of blank spaces at the beginning of the game based on the random word selected
// 3. function to make the screen flashed when a used letter is attempted to be used
// 4. function to build the hanging man. 
// 5. array for word bank (divide into word length?/ difficulty?)
// var words =["it","can","be","intimidating","to","leave","your","job","and","pursue","novel","career","opportunities","but","ultimately","when","given","only","one", "life", "experiencing", "more", ""]
// if time create difficulty: 
// var easty = words[0,1,2,5,];
// var medium = words[];
// var difficult = words [];
// 6. randomly select word based on position in array (0-149);
// 7. create a class called dialogue with (an) array(s) of instructions and comments that will appear throughout the game
// 	var dialogue =["You may be wondering why you're here","You are being tried by the grammar police" , crimes(), "to prove your innocence you must correctly guess the word I am thinking of", "the punishment for failure...","is death","by hanging"]
// var crimes = ["literally using the word literally figuratively", "making a run on a sentenced inmate that didn't desrve to be so bombarded by all of the things that you felt were deserved by him", "cow-tipping", "putting a comma in a coma", "unlawful use of you're your", "failure to complete your sentence...", "public indecent text poster", "alligations of alliteration for alluvial allocation"]
// 8.function to choose a random crime to sentence the defendant to var crimes = function(crimes){return: " for" + (crimes[math.random()])}
// 9. function to advance dialogue in response to key entry
// 10. function to determine if the game is won/ lost (counter to track every time a word is added to the used word bank)
// . function to animate win/ loss (from a library) --> Have dialogue character run back and forth across the screen with a comment bubble that says "Yay" when you win and runs off the screen saying "uh-Oh" when you lose



$(document).ready(function(){
$("#username").keyup(function(){
    var username_value = $("#username").val().toLowerCase();
        availableLets = [];
    //if (username_value.isContainedIn(usedLetters)==true){
    // usedLetters.push(username_value);
//}
    
});
});
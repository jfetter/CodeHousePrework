

// 1. function to ammend available letters based on key entered-> replace available letters with "". 
// include a loop to denote invalid key entrered (for numbers, symbols etc)
// 2. function display used letters -> when letters are moved out of available they are pushed into an array either for used letters (which are not in the answer) OR the letters are revealed in the answer; 
//  	var e = jQuery.Event( 'keydown', { which: $.ui.keyCode.ENTER } );
// $('input').trigger(e);ascii.map(function (item, index, all){return String.fromCharCode(item); },0).toString().replace(/,/g,"")
// 2a. array of ascii table so letters correspond to ascii positions ()
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
//    $("img").animate({ top: '+=100px'}, 1000);



$(document).ready(function(){
    

// selecting word and setting up game
    var words =["it","can","be","intimidating","to","leave","your","job","and","pursue","novel","career","opportunities","but","ultimately","when","given","only","one", "life", "experiencing", "more", "challenging","oneself", "seems","better","than","sticking","with","status","quo","ride", "tigers","drive","racecars","communicate", "with", "computers", "eat","weird","fruit", "but", "never", "stagnate"] ; 
 
    var crimes = ["literally using the word literally figuratively", "making a run on a sentenced inmate that didn't desrve to be so bombarded by all of the things that you felt were deserved by him", "cow-tipping", "putting a comma in a coma", "unlawful use of you're your", "failure to complete your sentence...", "public indecent text poster", "alligations of alliteration for ulterior allocation"];

    var choose = function(array){
        var array = array;
        return array[Math.floor((Math.random()*(array.length-1))-1)] 
        }; 
    var word = choose(words);
    console.log(word);
    var letters = word.split("");
    var spaceOut = function(spaces) {
        var blank = " __ ";
        return blank.repeat(spaces)
        }  
    var spaces = spaceOut(letters.length);

    var lightening = function(){
      return $("body").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
      //$('#sound_tag')[0].play();
    };

// game play

//as wrong answers accumulate, switch to the next picture in the gallows array
    var switchPic = function(imageNumb){
        var images = ["gallows.png","gallows2.png","gallows3.png","gallows4.png","gallows5.png","gallows6.png","gallows7.png","gallows8.png","gallows9.png"];
        return $(".pic").attr("src", images[imageNumb]);   
    }    
    $("#blanks").text(spaces); 

// see if the letter that was guessed is in the word and if so, plug it in to the display where the blanks are whever that letter occurs
//      var checkGuess = function(letters){
//      var letters = letters;
//      letters.map.(function(all,item,index)
//      var answerSoFar = $("#blanks").text().split(); //**** NEED TO TAKE INFO FROM BLANKS AND CONVERT IT INTO AN ARRAY 
//      if ($("#enterLetter").text() === letters[index]){ 
//        answersSoFar= answersSoFar.splice(index, 0, enterLetter))  } // insert the letter that was entered into the array in the place where the letter appears in the answer word
//        answersSoFar= answersSoFar.splice(index -1, 1) // remove the blanks where the letter was placed
//          )}
//        return $("#blanks").text(answerSoFar.toString().replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"");); //show the new display of blanks and letters in the answer -- without any commas or square brackets

// grab only one letter that the user has inputinto the enterLetter input field
//Only allow one letter to be input at a time (per turn).

var inputGuess = function(letters){
    var letters = letters; 
    $("#enterLetter").keyup(function(){
    var letterValue = $("#enterLetter").val().toLowerCase();

// compare the letter that was input to see if it is an already used letter, if it is a new match with a letter from the word OR if it is a new wrong guess 

//    var queryUsed = letterValue.indexOf(usedLetters, letterValue)
//     if (queryUsed > -1) //check to see if the letter entered has been used. 
// { 
//     return "usedLetter";
// }
//     else {
//     return letterValue }
    
});
}

// end of game sequences
var happyDance = function(){animation}

var swingInNoose = function(){animation}

var winOrLose = function() {
    if ($("#blanks").text().split().indexOf(" __ ") === -1){return happyDance() }
    else {return swingInNoose()}
}

// loop to control flow of game       
    var gamePlay = function(letters){ 
        var letters = letters;             
        console.log(letters);
        Mousetrap.bind('space', function() { 
        $("#speech").addClass("invisible");
        $("#blanks, #enterLetter, #usedLetters").removeClass("invisible");
        var count = 0; 
        switchPic(count);
        var wrongLetters = []; 
        var length = wrongLetters.length;
        inputGuess(); 
//             while (length <= 8)
//             {
//           if (inputGuess() === "usedLetter"){lightening()};
//           else { checkGuess() }// see if new letter is in the solution word 
//              
    
//     var processGuess = function ()
//         {
//          if ( inputGuess() === newLetter){
//             count ++; 
//             switchPic(count);
//             }
//          else if {
//                 return
                }) //end space bind
             } // end game play
        


// game intro
  Mousetrap.bind('return', function() {       
    var dialogue =["You may be wondering why you're here...","You are being tried by the grammar police for..." , choose(crimes), "to prove your innocence you must correctly guess the word I am thinking of...", "the punishment for failure...","is death...","by hanging!"];
    var sayNow = $("#sayNow").text();    
    sayNow = parseInt(sayNow);   
    console.log(sayNow);
    sayNow ++;
    $("#sayNow").text(sayNow);
    sayNow = parseInt(sayNow); 
    console.log(sayNow + "now")
   if ( sayNow < dialogue.length ){          
        return $("#speech").text(dialogue[sayNow])
        }
    else {
        lightening(); 
        $("#speech").text("press space to begin");
         return gamePlay();
    }
});
  
                
});

//at document ready (execute this section of code only once (1) function to randomly select a word from the word array
//(2) function to break the word into an array of letters .split("")
//(3)function to set up a number of blanks that corresponds to the .length of the array
//(4)roll intro dialogue from the accusor -- including randomly selected crime

// for game play loop 
// coordinate so (1)dilogue says choose a letter!
//(2) image changes to gallows and character walking towards gallows $("#picture").attr("src",image[i]);
//(3) css changes id of input field for enterLetter from invisible to a visible color $("#enterLetter").css("display","inline-block");
//(5) display box showing letters used
// // after prompting, take user input of one letter 
// $("#usedLetters").keyup(function(){
//     var usedLetter = $("#usedLetters").val().toLowerCase();
//         availableLets = [];
//     if (availableLets.indexOf(user) > -1){
//      $("#usedLetters ").append("<span>usedLetter</span>");
// }
    
// }); // end document ready

// if a letter that is entered is contained in the used letter element OR the 
// key typed is not a letter, then blink the screen .fadeIn("fast").delay(800)
//    .fadeout("fast")
// game play loop ends when either 9 wrong guesses are given OR all blanks are filled in

//end of game either animation of stick figure swinging on noose OR image of accusor and dialoge like "my bad. Guess you do know a think or two about words. case dismissed"
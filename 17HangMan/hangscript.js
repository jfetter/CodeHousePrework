// utility functions

//choose a random element from an array
var chooseRandomElement = function(array) {
    var array = array;
    return array[Math.floor((Math.random() * (array.length-1)) - 1)]
};

// make screen flash and thunder
var lightening = function() {
    return $("body").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    //$('#sound_tag')[0].play();
};


// assign an answer for this game
function Answer() {
//array of randomo words (possible answers)
    this.words = ["it", "can", "be", "intimidating", "to", "leave", "your", "job", "and", "pursue", "novel", "career", "opportunities", "but", "ultimately", "when", "given", "only", "one", "life", "experiencing", "more", "challenging", "oneself", "seems", "better", "than", "sticking", "with", "status", "quo", "ride", "tigers", "drive", "racecars", "communicate", "with", "computers", "eat", "weird", "fruit", "but", "never", "stagnate"];

// array of lowercase letters
    this.alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

// select a random word to use as this game's answer
    this.word = chooseRandomElement(this.words);
    console.log(this.word);

//split the word into an array of its component letters
    this.letters = this.word.split("");

    this.numOfLetters = this.letters.length; 

//Create an array of blank of spaces to initialize the game display
    this.fillInAnswer = function(letterCount) {
    blank = "__ ";
    return blank.repeat(letterCount);
    } // end fillInAnswer


} // end Answer
    var answer = new Answer(); 



// images to change as game play progresses
function Gallows() {
    this.images = ["gallows.png", "gallows2.png", "gallows3.png", "gallows4.png", "gallows5.png", "gallows6.png", "gallows7.png", "gallows8.png", "gallows9.png"];

    this.count = 0; 

//switch to the next picture in the gallows array
  this.switchPic = function() {
  return $(".pic").attr("src", this.images[this.count]);
    }; //end switchPic
} // end Gallows
 

//grab one letter (only 1 letter per turn) that the user has inputinto the enterLetter input field
var inputGuess = function() {     
    var guess = $("#enterLetter").val();
    $("#storeLetter").text(guess);
    console.log("made it through inputGuess")   
    return   $("#storeLetter").text(guess);
 } // end inputGuess

// see if the letter that was guessed is in the word and if so, plug it in to the display where the blanks are whever that letter occurs
var checkGuess = function(guess) {
   console.log("made it to check guess")
//     letters.map(function(item, index, all) {
//         var answerSoFar = $("#blanks").text().split(" ");
//         console.log("blanks " + answerSoFar + "guess " + guess + " item " + item + " index " + index);
//         if (guess == " " + item) {
//             alert("match at index " + index + ". " + guess + " = " + item);
//             // insert the matched letter in the place where the letter appears in the answer (index) and remove (1) item (the blank) from the array in that place
//             answerSoFar.splice(index, 1, guess);
//             // move the answer so far into the blanks div (text area)
//             // convert it into a string 
//             // and remove commas, quotes etc  
//            // $("#blanks").text(answerSoFar).toString().replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g, "");
//         }// end if
//         // else if the letter does not match add a letter to the (invisible) wrongGuess div      
               
//         else {
//             $("#wrongGuess").append("x")
//         }
//         if ($("#wrongGuess").text().length >= letters.length) {
//             $("#wrongGuess").text(1)
//         } // end if
//     });// end map
    
//     // if the letter didn't match anything in the answer word, throw it into the used letters box
//     if ($("#wrongGuess").text() == 1) {
//         $("#usedLetters").text(guess);
//     } // end if wrongGuess
} // end checkGuess    

// end of game sequences
var swingInNoose = function() {
    //img fade to black then frowny face appears and enlarges
}

var happyDance = function() {
    //img fade to white then happy face appears and enlarges
}

var winOrLose = function() {
    if ($("#blanks").text().split().indexOf(" __ ") === -1) {
        return happyDance()
    }  else {
        return swingInNoose()
    }
} 



   // game intro class 
Introduction = function() {

crimes = ["literally using the word literally figuratively", "making a run on sentenced that just went on and on long after it had stopped making sense and everyone had stopped caring and hoped it would end but it didn't", "cow-tipping", "putting a comma in a coma", "unlawful use of you're your", "failure to complete your sentence...", "public indecent text poster", "alligations of alliteration for ulterior allocation"];

speech = ["You may be wondering why you're here...", "You are being tried by the grammar police for...", chooseRandomElement(crimes), "to prove your innocence you must correctly guess the word I am thinking of...", "the punishment for failure...", "is death...", "by hanging!"];

    this.advance = function(){    
        if(!this.hasOwnProperty("sayNow"))
            this.sayNow = 0
    
        
        if (this.sayNow < speech.length) {                   
            var sayNow = speech[this.sayNow];
            this.sayNow++;
            $("#speech").text(sayNow)
        }  else {
            lightening();
            $("#speech").text("press space to begin");
        } // end else
    } // end initialize 
}; // end introduction


// change display from intro to game play      
var setUpGameDisplay = function() {    
             $("#speech").addClass("invisible"); 
             $("#blanks").text(answer.fillInAnswer(answer.numOfLetters));
             $("#blanks, #enterLetter, #usedLetters", "#labelUsedLetters").removeClass("invisible");
             $("#enterLetter").focus();
  }; 

Hangman = function(){
// sequence of events for each letter guessed
    this.turnPlay = function(){
        var gallows = new Gallows();
        console.log("pre count of gallows pic number " + gallows.count)
        if (gallows.count < $("#usedLetters").text().length)
            {gallows.count ++} 
        console.log("post pic of gallows count " + gallows.count)      
        gallows.switchPic();
        $("img").load(function() {   
            $("#enterLetter").keyup(inputGuess());
            console.log($("#storeLetter").text().length);
           // guessUsedOrNot();
        }); // end img load
    } // end turnPlay
} // end Hangman
var hangman = new Hangman();

//see if the letter entered has been used or not
    this.guessUsedOrNot = function(){
    // clear input field so no new letters can be entered
        $("#enterLetter").val("") 
        var guess = $("#storeLetter").text();
    // compare the letter that was input to see if it is an already used letter            
    if ((($("#usedLetters").text()).indexOf(guess) > -1 ) || (($("#blanks").text()).indexOf(guess) == -1)){ 
        console.log("letter is used");
        $("#enterLetter").focus();
        return lightening()}
    else if (Answer.alphabet.indexOf(guess) == -1) {
        console.log("not a letter");
        $("#enterLetter").focus();
        return lightening()}
      else {
        $("#enterLetter").addClass("invisible")
        return checkGuess();    
      } // end else
} // end guessUsedOrNot



$(document).ready(function() {
   var introduction = new Introduction();
 
    Mousetrap.bind('return', introduction.advance);
    Mousetrap.bind('space', setUpGameDisplay);

});// end document ready

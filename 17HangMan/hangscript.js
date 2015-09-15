// utility functions

//scan through and array to see if it contains a certain value and replace the value with another value if it does not match
var replaceMisses = function(array, value, replacement) {
     return array.map(function(item, index, all) {
        if (value == item) {
alert("match at index " + index + ". " + value + " = " + item);
            item = item;
        }// end if
        else {item = item.replace(item, replacement);
console.log("value not found");
    }
    return item;
     }) // end map
} // end matchAndReplace

//choose a random element from an array
var chooseRandomElement = function(array) {
    return array[Math.floor((Math.random() * (array.length-1)) - 1)]
};

// make screen flash and thunder
var lightening = function() {
    return $("body").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    //$('#sound_tag')[0].play();
};

//switch the picture in an array
switchPic = function(image, count) {
    return $(".pic").attr("src", image[count]);
}; //end switchPic

// assign an answer for this game
function Answer() {
//array of randomo words (possible answers)
    this.words = ["it", "can", "be", "intimidating", "to", "leave", "your", "job", "and", "pursue", "novel", "career", "opportunities", "but", "ultimately", "when", "given", "only", "one", "life", "experiencing", "more", "challenging", "oneself", "seems", "better", "than", "sticking", "with", "status", "quo", "ride", "tigers", "drive", "racecars", "communicate", "with", "computers", "eat", "weird", "fruit", "but", "never", "stagnate"];

// array of lowercase letters
    this.alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

// select a random word to use as this game's answer
    this.word = chooseRandomElement(this.words);

//split the word into an array of its component letters
    this.letters = this.word.split("");

} // end Answer
var answer = new Answer(); 
console.log(answer.word)

function HitsAndMisses(){
//keep track of current guess letters
    this.guess;   

//keep track of guesses made
    this.hits = [];

    this.misses = [];

    this.hitsSoFar = function(hits){
        hits.map(function(item, index, all) {
        replaceMisses(answer.letters, item, "__ ");
console.log(all);
    return all;
     }) // end map
    }// end guessSoFar
//determine if current guess has been guessed already, and if not if it is in the answer or not
// then display it. 
    this.validateGuess = function(guess){
// compare the letter that was input to see if it is an already used letter            
    if ((this.hits.indexOf(guess) > -1 || this.misses.indexOf(guess) > -1 )){ 
console.log("letter is used");
        lightening()}
    else if (answer.letters.indexOf(guess) > -1) {
console.log("hit");     
        this.hits.push(guess);
        $("#blanks").text(this.hitsSoFar([this.hits])); 
        } else {
        this.misses.push(guess);
        $("#usedLetters").text(hitsAndMisses.misses);
    } // end else
//      $("#enterLetter").val("");
//      $("#enterLetter").removeClass("invisible")
//      $("#enterLetter").focus();

        console.log(" misses: " + this.misses + "hits: " + this.hits)
        return (guess);

} // end validateGuess

// convert array from matchAndReplace into    
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

}
hitsAndMisses = new HitsAndMisses();

// images to change as game play progresses
function Gallows() {
    this.images = ["gallows.png", "gallows2.png", "gallows3.png", "gallows4.png", "gallows5.png", "gallows6.png", "gallows7.png", "gallows8.png", "gallows9.png"];
    this.count = 0; 
} // end Gallows
var gallows = new Gallows(); 


  

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
var introduction = new Introduction(); 

var cueStart = function(event) {      
        if(String(event.which) == "13") {
           introduction.advance();
        } 
        else if (String(event.which) == "32") {
           setUpGameDisplay();
        } 
}



//grab one letter (only 1 letter per turn) that the user has inputinto the enterLetter input field
var inputGuess = function() { 
     $("#enterLetter").keyup(function(){
      var guess = $.trim($( this ).val()).toLowerCase(); 
      if (answer.alphabet.indexOf(guess) > -1 )
      {(hitsAndMisses.guess = guess);
        $("#enterLetter").addClass("invisible")
 console.log("step 2: guess is " + hitsAndMisses.guess)  
        hitsAndMisses.validateGuess(guess);
              
     }  
      else { $("#enterLetter").val("")}
     })

  
} // end inputGuess

Hangman = function(){

// sequence of events for each letter guessed
    this.turnPlay = function(){
        if (gallows.count < $("#usedLetters").text().length){
            gallows.count ++
            switchPic(gallows.images, gallows.count)
            } 
            
console.log("step 3.1: gallows count " + gallows.count)               
console.log("step 3.2: this many letters have been guessed: " + $("#storeLetter").text().length);
           // guessUsedOrNot();
    } // end turnPlay
} // end Hangman
var hangman = new Hangman();

// change display from intro to game play      
var setUpGameDisplay = function() {            
             $("#speech").addClass("invisible"); 
             $("#blanks, #enterLetter, #usedLetters, #labelUsedLetters").removeClass("invisible");
             switchPic(gallows.images, 0);
            $("#enterLetter").focus();
  };





$(document).ready(function() {


$(document).on('keypress', cueStart);
//while () {
// move the answer so far into the blanks div (text area)
// convert it into a string and remove commas  /[A-Z]/g
$("#blanks").text(replaceMisses(answer.letters, hitsAndMisses.guessed, "__ ")).toString().replace(/,/g, ""); 
inputGuess();
   

//}

});// end document ready

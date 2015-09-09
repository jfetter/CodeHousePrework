// selecting word and setting up game
var validGuess = 0; 

var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

var words = ["it", "can", "be", "intimidating", "to", "leave", "your", "job", "and", "pursue", "novel", "career", "opportunities", "but", "ultimately", "when", "given", "only", "one", "life", "experiencing", "more", "challenging", "oneself", "seems", "better", "than", "sticking", "with", "status", "quo", "ride", "tigers", "drive", "racecars", "communicate", "with", "computers", "eat", "weird", "fruit", "but", "never", "stagnate"];

var crimes = ["literally using the word literally figuratively", "making a run on a sentenced inmate that didn't desrve to be so bombarded by all of the things that you felt were deserved by him", "cow-tipping", "putting a comma in a coma", "unlawful use of you're your", "failure to complete your sentence...", "public indecent text poster", "alligations of alliteration for ulterior allocation"];

var choose = function(array) {
    var array = array;
// var test
    return array[Math.floor((Math.random() * (array.length - 1)) - 1)]
};

 var count = $("#usedLetters").text().length;

var dialogue = ["You may be wondering why you're here...", "You are being tried by the grammar police for...", choose(crimes), "to prove your innocence you must correctly guess the word I am thinking of...", "the punishment for failure...", "is death...", "by hanging!"];


var lightening = function() {
    return $("body").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    //$('#sound_tag')[0].play();
};



var images = ["gallows.png", "gallows2.png", "gallows3.png", "gallows4.png", "gallows5.png", "gallows6.png", "gallows7.png", "gallows8.png", "gallows9.png"];

//as wrong answers accumulate, switch to the next picture in the gallows array
var switchPic = function(imageNumb) {
    return $(".pic").attr("src", images[imageNumb]);
}
    


//grab one letter (only 1 letter per turn) that the user has inputinto the enterLetter input field
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
var happyDance = function() {
    animation
}

var swingInNoose = function() {
    animation
}

var winOrLose = function() {
    if ($("#blanks").text().split().indexOf(" __ ") === -1) {
        return happyDance()
    }  else {
        return swingInNoose()
    }
} 

//Create an array of blank of spaces
var createSpaceArray = function(spaceCount) {
    var blank = "__ ";
    return blank.repeat(spaceCount)
}

    var word = choose(words);
console.log(word);
    var letters = word.split("");
    var spaces = createSpaceArray(letters.length);

    // game intro 
    var advanceIntroduction = function() {
       
        if(!advanceIntroduction.hasOwnProperty("sayNow")){
            advanceIntroduction.sayNow = 0
    } // end if sayNow not used yet
        
        if (advanceIntroduction.sayNow < dialogue.length) {                   
            var sayNow = dialogue[advanceIntroduction.sayNow];
            advanceIntroduction.sayNow++;
            $("#speech").text(sayNow)
        }  else {
            lightening();
            $("#speech").text("press space to begin");
        } // end else
    } // end game intro    

// sequence of events for each letter guessed
    var turnPlay = function(){
            switchPic(count);
            $("gallows.png").one("load", function() {
  // do stuff
            do {
            $("#enterLetter").focus();
            $("#enterLetter").keyup(inputGuess());
            console.log($("#storeLetter").text().length)
            } // end do 
            while ($("#storeLetter").text().length < 1)
            guessUsedOrNot();
}).each(function() {
  if(this.complete) $(this).load();
});
        } // end turnPlay



// move from intro dialogue to game play      
    var startGame = function() {     
             $("#speech").addClass("invisible"); 
             $("#blanks, #enterLetter, #usedLetters").removeClass("invisible");
             (turnPlay());
           };  

//see if the letter entered has been used or not
var guessUsedOrNot = function(){
    // clear input field so no new letters can be entered
        $("#enterLetter").val("") 
        var guess = $("#storeLetter").text();
    // compare the letter that was input to see if it is an already used letter            
    if ((($("#usedLetters").text()).indexOf(guess) > -1 ) || (($("#blanks").text()).indexOf(guess) == -1)){ 
        console.log("letter is used");
        $("#enterLetter").focus();
        return lightening()}
    else if (alphabet.indexOf(guess) == -1) {
        console.log("not a letter");
        $("#enterLetter").focus();
        return lightening()}
      else {
        $("#enterLetter").addClass("invisible")
        return checkGuess();    
      }
}



$(document).ready(function() {
    //$("#speech").focus();   
    $("#blanks").text(spaces);
    
    Mousetrap.bind('return', advanceIntroduction);
    Mousetrap.bind('space', startGame);

});// end document ready

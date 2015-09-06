


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

var inputGuess = function(){
    $("#enterLetter").focus();
    $("#enterLetter").keydown(function(){ 
    var guess = $("#enterLetter").val().toLowerCase();
//hide the input letter field after a letter is entered space bar counts as first entry
    if (guess.length >= 1){  $("#enterLetter, #storeLetter").addClass("invisible"); } 
        $("#storeLetter").text(guess);
    console.log("in function" + guess);
    return guess;
    }); //end keyup
}   // end input guess 
 
// see if the letter that was guessed is in the word and if so, plug it in to the display where the blanks are whever that letter occurs
      var checkGuess = function(guess){
            console.log("then guess is =" + guess);
//      letters.map.(function(all,item,index)
//      var answerSoFar = $("#blanks").text().split(); //**** NEED TO TAKE INFO FROM BLANKS AND CONVERT IT INTO AN ARRAY 
//      if ($("#enterLetter").text() === letters[index]){ 
//        answersSoFar= answersSoFar.splice(index, 0, enterLetter))  } 
// insert the letter that was entered into the array in the place where the letter appears in the answer word
//        answersSoFar= answersSoFar.splice(index -1, 1) // remove the blanks where the letter was placed
//          )}
//        return $("#blanks").text(answerSoFar.toString().replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,""););
//show the new display of blanks and letters in the answer -- without any commas or square brackets 
//grab one letter (only 1 letter per turn) that the user has inputinto the enterLetter input field

// compare the letter that was input to see if it is an already used letter, if it is a new match with a letter from the word OR if it is a new wrong guess 

//    var queryUsed = letterValue.indexOf(usedLetters, letterValue)
//     if (queryUsed > -1) //check to see if the letter entered has been used. 
// { 
//     return "usedLetter";
// }
//     else {
//     return letterValue }
} // end checkGuess    



// end of game sequences
var happyDance = function(){animation}

var swingInNoose = function(){animation}

var winOrLose = function() {
    if ($("#blanks").text().split().indexOf(" __ ") === -1){return happyDance() }
    else {return swingInNoose()}
}

// loop to control flow of game       
    var gamePlay = function(){             
        Mousetrap.bind('space', function() { 
        $("#speech").addClass("invisible");
        $("#blanks, #enterLetter, #usedLetters").removeClass("invisible");
        var count = 0; 
//      while (length <= 8)
        switchPic(count);
        var wrongLetters = []; 
        var length = wrongLetters.length;
        var guess = inputGuess();
        checkGuess(guess); 
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
        $("#speech").text(dialogue[sayNow])
        }
    else {
        lightening(); 
        $("#speech").text("press space to begin");
        gamePlay();
    }
});
  
                
});


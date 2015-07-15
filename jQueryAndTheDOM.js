// Write jQuery code to loop over every DIV in any HTML document and give that DIV a random color background, then invert the DIVs background color using the function below, and use the inverted color for the font on that DIV.

// Test your code in Chrome console on many pages.

// Here's the function to use for inverting colors:

function invertColor(hexTripletColor) {
    var color = hexTripletColor;
    color = color.substring(1);           // remove # 
    color = parseInt(color, 16);          // convert to integer
    color = 0xFFFFFF ^ color;             // invert three bytes
    color = color.toString(16);           // convert to hex
    color = ("000000" + color).slice(-6); // pad with leading zeros
    color = "#" + color;                  // prepend #
    return color;
};

// RGB HEX TRIPLET COLOR CHART IS A 3 PAIRS OF CHARACTERS AND NUMBERS THAT CORRESPOND TO DIFFERENT COLORS. LETTER PAIR SHIFTS THROUGHOUT 

var twoRandDigits = function(){
	return Math.floor((-10)*Math.random())+20; //generates a random number between 10 & 20
};

$(document).ready(function(){
	$("div").each(function(){ //go through each div and preform a function to switch up the color.
 		var coloring = (Math.floor((256-199)*Math.random()) + 200) + ',' + (Math.floor((256-199)*Math.random()) + 200) + ',' + (Math.floor((256-199)*Math.random()) + 200) + ')'; //break into randomly generated chunks of 2 with either both letters or both numbers
 		$(this).css("background-color", coloring);
	}); // end document.ready
}); // end div.each

$(document).ready(function(){
	$("div").each(invertColor(coloring){ //invert the background color using the given function -- using the randomly generated color as the argument. 
 		var coloring = 'rgb(' + (Math.floor((256-199)*Math.random()) + 200) + ',' + (Math.floor((256-199)*Math.random()) + 200) + ',' + (Math.floor((256-199)*Math.random()) + 200) + ')';
 		$(this).css("color", color);
	}); // end document.ready
}); // end div.each

// var randBack = function() {
// 	Math.random();
// };//assign a random color background

// $(function() {
//     $(".jump-response").each(function() {
//         var coloring = 'rgb(' + (Math.floor((256-199)*Math.random()) + 200) + ',' + (Math.floor((256-199)*Math.random()) + 200) + ',' + (Math.floor((256-199)*Math.random()) + 200) + ')';
//          $(this).css("background-color", coloring;
//     });

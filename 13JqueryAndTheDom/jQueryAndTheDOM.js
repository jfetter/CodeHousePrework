// Write jQuery code to loop over every DIV in any HTML document and give that DIV a random color background, then invert the DIVs background color using the function below, and use the inverted color for the font on that DIV.

// Test your code in Chrome console on many pages.

// Here's the function to use for inverting colors:

// my job is to create a code that generates a random hexTripletColor and then plug that function in to some jquery that assigns the css characteristics of background-color and color (text color) to a div. 


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

var colorRan = function(){ //generate a random number betwen 0- 255
return Math.floor((255)*Math.random()); //generates a random number between 0 and 255???
};


$(document).ready(function(){
	$("div").each(function(){ //go through each div and preform a function to switch up the color.
 		var coloring = "#" + colorRan() ; //prepend a # to randomly generated number...???? 
 		$(this).css("background-color", coloring);
 		$(this).css("color", invertColor(coloring)); // plug in inverting function for text color assign random coloration as argument. 
	}); // end div.each
	}); // end document.ready


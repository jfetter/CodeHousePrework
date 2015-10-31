$(document).ready(init);
function init () {


	$(".tower").on("click", selectTopOfStack);

function selectTopOfStack(event){
			var selectedThing = $(this).children()[0];
			var thingDataSize = $(this).find(">:first-child").data("size");
			console.log("S T:", selectedThing, "S T S:", thingDataSize);
			var lilBroSize = $(this).find(">:nth-child(2)").data("size");
			console.log("LBS:", lilBroSize);
	if(thingDataSize < lilBroSize || lilBroSize === false){
			$(selectedThing).toggleClass("highlight");
		 } //else if (){
		// 	removeTopOfStack;
		// } else {
		// 	placePiece;
		// }
}
function removeTopOfStack () {
	var removedThing =	$(selectedThing).detach().removeClass("highlight");
	return removedThing;
}

function placePiece () {

 	$("this").append(removeTopOfStack);
};




// if (sum of values === floater1 2 and 3 are all in tower 3 )
// {
// 	declareVictory;
// }

function declareVictory (){
	event.stopPropagation();
	console.log("victory");
	$("#winner").removeClass("invisible");
	$("body").css("background-color", "orange");
}
			
} //end init

//$(".tower").children[0];
//$(thing).css("width") will get the width  .css("width", "20px") will set it
// .data is set up similarly
//$(thing).data("size") can access the number one in here <div class="floating" data-size = 1></div>
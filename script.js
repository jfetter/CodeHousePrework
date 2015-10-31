// click the tower to select a specific element
// event.target == $(this)

$(document).ready(init);
function init () {
$(".tower").on("click", selectTopOfStack);
$(".highlight").on("click", removeTopOfStack);
 // $("*").on("click", test)

 // function test (event) {
	// $("body").addClass("highlight");
 // }

function selectTopOfStack(event){
	event.stopPropagation();
	// var firstChi = "'div #"
	// firstChi += $(this).attr("id");
	// firstChi +=  ":first-child'";
			var selectedThing = $(this).children()[0];
			console.log(selectedThing);
			$(selectedThing).addClass("highlight");
}

function removeTopOfStack (event) {
	event.stopPropagation();
	$()
	console.log("removeTopOfStack");
	var topPiece = $(".tower:first-child").detach();
	
}

function placePiece (event) {
	
};



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
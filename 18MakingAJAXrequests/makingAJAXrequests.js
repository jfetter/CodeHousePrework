//1. make a ‘get’ request to the GitHub api using your username 

var getGitHubData = function(){
       console.log("I'm in getGitHubData")
       $.get('https://api.github.com/users/jfetter', function(data, status){
 	   alert("\nStatus: " + status);
       
       }); // end .get
} // end getGitHubData

// 2. make a ‘post’ request to a dummy database passing the data received from the GitHub request 
//$.ajax({'http://httpbin.org/post'})
//3.on the success callback for your post request, use jQuery create a div element
//limit img size to 150px width
//$("#avatarPic").attr("width", "150px");
//4.append the div you create to the div with a class of ‘container’ with only one read/write function to the DOM.
//$("#container").append();


$(document).ready(function(){
getGitHubData();

});


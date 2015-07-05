// Write a JavaScript function that takes 3 arguments, year, month, and day, and calculates how many days between that day and today

// If the days are more than 30, return Y months, Z days
// If the days are months are more than 12, return X years, Y months, Z days
// Test Cases


// (Assuming today is April 2nd, 2015)

// age(2017, 11, 17) -> 2 years, 8 months, 15 days

// age(2015, 3, 6) -> 4 days
// Note that the month argument starts from 0 (11 is December)

//1. gather new date from user prompts for input = var futureDate
//2. calculate difference between April 2nd 2015 and future date
//3. 



var getDate = function(){
	var year = prompt ("enter target year in the format #### eg 2015");
 	var month =  prompt ("enter month to expire in the format 1-12");
 	var day = prompt ("enter day to expire in the format 1-31");
 	var futureDate = new Date(year, month -1, day);
 	return futureDate; 
};

//28771200000= number of milliseconds between April 2nd 2015 and leap year--in 2016

var Until = {
futureDay: (getDate()),
now: new Date('April 2, 2015 0:00:00')

};
console.log(Until.futureDay);
console.log(Until.now);

 var timeUntil = function (future, now){
 var milliseconds = future - now; 
console.log(milliseconds);
 var seconds= parseInt(milliseconds/1000); //there are 1000 milliseconds in a secons
 var minutes= seconds/60;        //there are 60 seconds in  aminute
 var hours= minutes/60;          //there are 60 minutes in an hour
 var days= parseInt(hours/24);
 var months = parseInt(days/12);
 	months =  (months % 12)  ;
 var years= days/365;
//  	if (days == 1){
//  	day = "1 day"}
//  	else {days = days % 24 + " days"};
// //  	if (months == 1){
// //  	 months = "1 month, " 
// //  	}
// //  	else if (months == 0){months =""}
// //  	else {months = " months, "};
// //  	if (years == 1){
// //  	 years =  "1 year, " 
// //  	}
// //  	else if (years == 0){
// //  	years = ""}
// //  	else {years =  years + " years, "};
// // age(2017, 11, 17) -> 2 years, 8 months, 15 days

// // age(2015, 3, 6) -> 4 days
var YearMoDay = [years, months, days];
yearMoDay = yearMoDay.join();

return yearMoDay; 
};// object TargetDate
console.log(timeUntil(Until.futureDay, Until.now));


//  	var myspan = document.getElementById("timer");  //get a handle on the <span> element 
//  	myspan.innerHTML = timeUntil;					//set the content that displays between <span> and </span>

	



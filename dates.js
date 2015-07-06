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



var Until = {
futureDay: (getDate()),
now: new Date('April 2, 2015 0:00:00')
};

console.log(Until.futureDay);
console.log(Until.now);


// var futureMonth= function(futureDay){
// var futureMonth = parseInt(Until.futureDay.getMonth())
//   console.log(futureMonth);
// if (futureMonth >= 4)
//   {return futureMonth + 8;} 
// else
// {return futureMonth;}
// };  


// var futureYears = function(futureDay){ 
// //115 = current year
// //rename -- yearsUntil?
//  var futureYears = parseInt(Until.futureDay.getYear())-115;//set year type = 0 for current year
//   console.log(futureYears)
//   return futureYears;
// };


var calcMonthsAndDays = function(days, years){
var days = days; 
if (days <= 28) {
  days = days}
else 
 {days = Math.abs(days - (365 * years) + parseInt((years +1)/4)); //subtract an extra day off in leap years 
//futureMonth(Until.futureDay);

//array of days in month starting from May
var futureDays = [31, 30, 31, 31, 30, 31, 30, 31, 31, 28, 31, 30].reduce(function(all, item ,index, days, futureMonth){
var months = 0; 
while (days >= 0){
 days - index
  console.log(all)
  months ++;  };//while
  return [all, months]; 
},0); // reduce

}//else
return futureDays;
} //calcMonthsAndDays


var timeUntil = function (future, now){

 var milliseconds = parseInt(future - now); 
console.log(milliseconds);
//  var seconds= parseInt(milliseconds/1000);       
 var days= parseInt(milliseconds/86400000); // 86400000 milliseconds in a day
 var years= milliseconds/31557600000; //31557600000 = 365.25 days to account for leap years
// next leap day is 4.29.16

calcMonthsAndDays(days, years); 

// need to pull days, months out of the value returned from function


 	if (days == 1){
 	day = "1 day"}
 	else {days = days + " days"};
 	if (months >= 1 && months <= 2){
 	 months = "1 month,  " 
 	}
 	else if (months < 1){months =""}
 	else {months = months + " months, "};
 	if (years >= 1 && years < 2){
 	 years =  "1 year," 
 	}
 	else if (years < 1){
 	years = ""}
 	else {years =  parseInt(years) + " years, "};
  var yearMoDay = [years, months, days].join("");

return yearMoDay; 
};// object TargetDate
console.log(timeUntil(Until.futureDay, Until.now));


//  	var myspan = document.getElementById("timer");  //get a handle on the <span> element 
//  	myspan.innerHTML = timeUntil;					//set the content that displays between <span> and </span>

	



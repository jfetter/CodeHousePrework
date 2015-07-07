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


//create an object breaking down the future day month and year, current date and new date. 
var Until = { //probably need to set this up so this will run like a function; 
	year: prompt ("enter target year in the format #### eg 2015"),
 	month:  prompt ("enter month to expire in the format 1-12"),
 	day: prompt ("enter day to expire in the format 1-31"),
 	futureDate: new Date(year, month -1, day),
    now: new Date('April 2, 2015 0:00:00')
};

console.log(Until.futureDate);
console.log(Until.now);

//determine the number of milliseconds that will ellapse
var numbOfMilliseconds = function(futureDate, now){
  var milliseconds = parseInt(future - now); 
  console.log(milliseconds);
  return milliseconds; }; // call with Until.futureDate, Until.Now

//detrmine the number of years...
var numbOfYears = function (milliseconds){
  var years= milliseconds/31557600000; //31557600000 = 365.25 days to account for leap years. next leap day is 4.29.16
  console.log(years);
  return years; }; //call with numbOfMilliseconds-Until.futureDate, Until.now

//determine the number of months... 
var numbOfMonths= function(month, day){
//var futureMonth = parseInt(Until.futureDay.getMonth())
   var numberOfMonths;
   if (month <= 4) {
    numberOfMonths = 8+ month} 
   else {numberOfMonths = month -4}; 
   if (day >= 2) {numberOfMonths --};
   console.log("Num Of Months:" + numberOfMonths);
   return numberOfMonths; // NEED TO ACCOUNT FOR THERE BEING LESS THAN A FULL MONTH BEFORE 2nd AND MORE THAN A FULL MONTH AFTER THE 2nd. 
}; // call with Until.month and Until.day 


// var futureYears = function(futureDay){ 
// //115 = current year
// //rename -- yearsUntil?
//  var futureYears = parseInt(Until.futureDay.getYear())-115;//set year type = 0 for current year
//   console.log(futureYears)
//   return futureYears;
// };


// For all, do days – years…

// Month = someNumber
// //28 days left in April
// if (days < 28), days = days. 
// //?? last box in array is 1? –for date if it is april 1. ??

// Else
// {
// factor in startPoint from the actual month they are starting from.
// var monthToStartFrom = THE GIVEN MONTH OF THE END DATE. 
// var monthDays = [days in month starting from January—but just 1 day for April…]
// monthDays.reduce(function(days){})…
// while days > days[i]
// {days -= days[i]
// month ++ 
// var monthAndDay = [month, days]} //end while loop
// }, MonthToStartFrom); // end reduce
// } //end else
// return monthAndDay;  

var numbOfDays = function(milliseconds, years, months){
  milliseconds = numbOfMilliseconds(Until.futureDate, Until.now);
  var days = milliseconds/ parseInt(milliseconds/86400000); // 86400000 milliseconds in a day 
  //subtract the full years out of the total number of days
  days = days - ((365 * years) + parseInt((years +1)/4)); //subtract an extra day off in leap years 

  if (days <= 28) { //since April 2nd is start day anything less than 28 days will fall in April, so will not need add' days dedcuted from total 
  days = days}
  else 
  { //array of days in month starting from March and going backwards to May --April not included since it is either going to be one full year or less than one month if futureDate is in April.// go through subtracting days out until you get to May 
  var futureDays = [31, 28, 31, 31, 30, 31, 31, 31, 31, 30, 31 ].reduce(function(all, item ,index){
  //will need to know the month to begin in the array
  var futureMonth = futureMonth(Until.month, Until.Day);
  var days = days;//from earlier in CalcMonthsAndDays  
  days - index;
  months ++;
  console.log(all, months);
  return Math.abs(all);  //you will end up with a negative number when you get to the end. 
}, (11 - numbOfMonths(futureDay))); // end reduce
//subtract
}//else
return futureDays;
} //calcMonthsAndDays
//call numbOfDays with 


var timeUntil = function (future, now){
     



calcMonthsAndDays(days, years); 

// need to pull days, months out of the value returned from function

var displayYearMoDay = function()
{ 	if (days == 1){
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
};// end object TargetDate
} // end displayYearMoDay
console.log(timeUntil(Until.futureDay, Until.now));



	



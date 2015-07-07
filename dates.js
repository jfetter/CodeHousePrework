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
};

console.log(Until.year, Until.month, Until.day);

var Dates = {
 	future: new Date(Until.year, Until.month -1, Until.day),
    today: new Date('April 2, 2015 0:00:00')
};

//determine the number of milliseconds that will ellapse
var numbOfMilliseconds = function(future, today){
  var milliseconds = parseInt(future - today); 
  console.log(milliseconds);
  return milliseconds; }; // call with Dates.future, Dates.Now

//detrmine the number of years...
var numbOfYears = function (milliseconds){
  var years= milliseconds/31557600000; //31557600000 = 365.25 days to account for leap years. next leap day is 4.29.16
  console.log(years);
  return years; }; //call with numbOfMilliseconds-Until.futureDate, Until.now

//determine the number of months... 
var numbOfMonths= function(month, day){
//var futureMonth = parseInt(Until.futureDay.getMonth())
  month = parseInt(month);
  day = parseInt(day); 
  var numberOfMonths;
   if (month <= 4) {
    numberOfMonths = 8+ month} //account for today being in april
   else {numberOfMonths = month -4}; 
   //if (day >= 2) {numberOfMonths --}; // NEED TO ACCOUNT FOR THERE BEING LESS THAN A FULL MONTH BEFORE 2nd AND MORE THAN A FULL MONTH AFTER THE 2nd. 
   console.log("Num Of Months:" + numberOfMonths);
   return numberOfMonths; 
}; // call with Until.month and Until.day 

var Count = {
  milliseconds: numbOfMilliseconds(Dates.future, Dates.today),
  days: parseInt(numbOfMilliseconds(Dates.future, Dates.today)/86400000), // 86400000 milliseconds in a day
  years: parseInt(numbOfYears(numbOfMilliseconds(Dates.future, Dates.today))),
  months: numbOfMonths(Until.month, Until.day)
};
console.log(Count.years, Count.months);

var numbOfDays = function(days, years, months){
 
  //subtract the full years out of the total number of days
  days = days - ((365 * years) + parseInt((years +1)/4)); //subtract an extra day off in leap years 

  if (days <= 28) { //since April 2nd is start day anything less than 28 days will fall in April, so will not need add' days dedcuted from total 
  days = days}
  else 
  { //array of days in month starting from March and going backwards to May --April not included since it is either going to be one full year or less than one month if futureDate is in April.// go through subtracting days out until you get to May 
  var futureDays = [31, 28, 31, 31, 30, 31, 31, 31, 31, 30, 31 ].reduce(function(all, item ,index){
  //will need to know the month to begin in the array
//   var futureMonth = futureMonth(Until.month, Until.Day); 
  days - index;
  months ++;
  console.log(all, months);
  return Math.abs(all);  // will end up with a negative number when at the end of the array. 
}, (11 - numbOfMonths(Until.month, Until.day ))); // end reduce
days = futureDays;
}//else

return days;
} //end numbOfDays
//call numbOfDays with numbOfMilliseconds(Until.futureDate, Until.now), NumOfYears(numbOfMilliseconds(Until.futureDate,Until.now)), numbOfmonths(Until.month, Until.day), 
     
//numbOfDays (Count.milliseconds, Count.years, Count.months);

// need to pull days, months out of the value returned from function

var displayYearMoDay = function( months, years)
{ 	
    var days = numbOfDays(Count.days, Count.years, Count.months);
    if (days == 1){
 	days = "1 day"}
 	else {days = days + " days"};
 	if (months == 1){
 	 months = "1 month,  " 
 	}
 	else if (months < 1){months =""}
 	else {months = months + " months, "};
 	if (years == 1){
 	 years =  "1 year," 
 	}
 	else if (years < 1){
 	years = ""}
 	else {years =  years + " years, "};
  var yearMoDay = [years, months, days].join("");

return yearMoDay; 
}; // end displayYearMoDay
console.log(displayYearMoDay( Count.months, Count.years ));



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



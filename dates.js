// Write a JavaScript function that takes 3 arguments, year, month, and day, and calculates how many days between that day and today

// If the days are more than 30, return Y months, Z days
// If the days are months are more than 12, return X years, Y months, Z days
// Test Cases

// (Assuming today is April 2nd, 2015)

// age(2017, 11, 17) -> 2 years, 8 months, 15 days

// age(2015, 3, 6) -> 4 days
// Note that the month argument starts from 0 (11 is December)



//create an object that aquires and assigns variables to the future day month and year 
var Until = { 
	year: prompt ("enter target year in the format #### eg 2015"),
 	month:  prompt ("enter month to expire in the format 1-12"),
 	day: prompt ("enter day to expire in the format 1-31"),
};

console.log(Until.year, Until.month, Until.day);
//create an object for today and the future day
var Dates = {
 	future: new Date(Until.year, Until.month, Until.day),
    today: new Date('April 2, 2015 0:00:00')
};

//determine the number of milliseconds that will ellapse
var numbOfMilliseconds = function(future, today){
  var milliseconds = parseInt(future - today); 
  console.log(milliseconds);
  return milliseconds; }; 

//detrmine the number of years...
var numbOfYears = function (milliseconds){
  var years= milliseconds/31557600000; //31557600000 = 365.25 days ...adding extra 1/4 to account for leap years. next leap day is 4.29.16
  console.log(years);
  return years; }; 

//determine the number of months... 
var numbOfMonths= function(month, day){
//var futureMonth = parseInt(Until.futureDay.getMonth())
  month = parseInt(month);
  day = parseInt(day); 
  var numberOfMonths;
   if (month < 4) { //account for today being in April
    numberOfMonths = 8+ month} 
   else {numberOfMonths = month -3}; 
   //if (day >= 2) {numberOfMonths --}; // NEED TO ACCOUNT FOR THERE BEING LESS THAN A FULL MONTH BEFORE 2nd AND MORE THAN A FULL MONTH AFTER THE 2nd. 
   console.log("Num Of Months:" + numberOfMonths);
   return numberOfMonths; 
}; 

//make the returns from timeframes easily accessible for display and calculation of days
var Count = {
  milliseconds: numbOfMilliseconds(Dates.future, Dates.today),
  days: parseInt(numbOfMilliseconds(Dates.future, Dates.today)/86400000), // 86400000 milliseconds in a day
  years: parseInt(numbOfYears(numbOfMilliseconds(Dates.future, Dates.today))),
  months: numbOfMonths(Until.month, Until.day)
};

var numbOfDays = function(days, years, months){
  //subtract the full years out of the total number of days and subtract an extra day off in leap years 
  days = days - ((365 * years) + parseInt((years +1)/4)); 
  console.log("start days: " + days);
  if (days <= 28) { //since April 2nd is start day anything less than 28 days will fall in April, so will not need to loop through array and deduct add'l days 
  days = days}
  else 
  { //array of days in month starting from March and going backwards to 1 remaining day to account for April 1st 
  var futureDays = [31, 28, 31, 31, 30, 31, 31, 31, 31, 30, 31, 1].reduce(function(prev, current, index, array){
  //will need to know the month to begin in the array
//   var futureMonth = futureMonth(Until.month, Until.Day); 
 current = prev - array[index + parseInt(Count.months)]; // set starting point to the number of months back from April
  console.log( current, prev, array[index]);
  return Math.abs(current);  // will end up with a negative number when at the end of the array. 
},days); // end reduce 
days = days - futureDays;
}//else

return days;
} //end numbOfDays

var displayYearMoDay = function( months, years)
{ 	
    var days = numbOfDays(Count.days, Count.years, Count.months);
    console.log("days I end up with " + days)
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






 // Write a JavaScript function that takes 3 arguments, year, month, and day, and calculates how many days between that day and today

// If the days are more than 30, return Y months, Z days
// If the days are months are more than 12, return X years, Y months, Z days
// Test Cases

// (Assuming today is April 2nd, 2015)

// age(2017, 11, 17) -> 2 years, 8 months, 15 days

// age(2015, 3, 6) -> 4 days
// Note that the month argument starts from 0 (11 is December)



//create an object that aquires and assigns variables to the new day month and year 
var Between = {
    year: prompt("enter target year in the format #### eg 2015"),
    month: prompt("enter month to expire in the format 1-12"),
    day: prompt("enter day to expire in the format 1-31"),
};

console.log(Between.year, Between.month, Between.day);
//create an object for today and the new day
var Dates = {
    then: new Date(Between.year, Between.month, Between.day),
    today: new Date('April 2, 2015 0:00:00')
};

//determine the number of milliseconds that will ellapse
var numbOfMilliseconds = function(then, today) {
    var milliseconds = parseInt(then - today);
    console.log(milliseconds);
    return Math.abs(milliseconds);
};

//detrmine the number of years...
var numbOfYears = function(milliseconds) {
    var years = milliseconds / 31557600000; //31557600000 = 365.25 days ...adding extra 1/4 to account for leap years. next leap day is 4.29.16
    console.log(years);
    return years;
};

//determine the number of months... 
var numbOfMonths = function(month, days) {
    var months = parseInt(month)- 4; // determine the distance from April 
    console.log("Num Of Months:" + months);
    return Math.abs(months); //if the month is before April, it will be a negative value
};

//make the returns from timeframes easily accessible for display and calculation of days
var Count = {
    milliseconds: numbOfMilliseconds(Dates.then, Dates.today),
    days: parseInt(numbOfMilliseconds(Dates.then, Dates.today) / 86400000), // 86400000 milliseconds in a day
    years: parseInt(numbOfYears(numbOfMilliseconds(Dates.then, Dates.today))),
    months: parseInt(numbOfMonths(Between.month, Between.day))
};

//calculate the number of days remaining after years and months are subtracted
var numbOfDays = function(days, years, months) {
    //subtract the full years out of the total number of days and subtract an extra day off in leap years 
    days = days - ((365 * years) + parseInt((years + 1) / 4));
    console.log("start days: " + days);
     //array of days in month starting from January
        var daysBetween = [31, 28, 31, 31, 30, 31, 31, 31, 31, 30, 31, 30]; 
        for (var i = 11 - Count.months; i < daysBetween.length; i++) 
        {
            days -= daysBetween[i]; //subtract the number of days in each month starting from the number of months back in the array
            console.log(i, Count.months, days);
        }
        days = Math.abs(days); // will end up with a negative number when at the end of the array. 
   // } //end else
    
    return days;
} //end numbOfDays

var displayYearMoDay = function(months, years) 
{
    var days = numbOfDays(Count.days, Count.years, Count.months);
    console.log("days I end up with " + days)
    if (days == 1) {
        days = "1 day"
    } 
    else {
        days = days + " days"
    }
    ;
    if (months == 1) {
        months = "1 month,  "
    } 
    else if (months < 1) {
        months = ""
    } 
    else {
        months = months + " months, "
    }
    ;
    if (years == 1) {
        years = "1 year,"
    } 
    else if (years < 1) {
        years = ""
    } 
    else {
        years = years + " years, "
    }
    ;
    var yearMoDay = [years, months, days].join("");
    
    return yearMoDay;
}; // end displayYearMoDay
console.log(displayYearMoDay(Count.months, Count.years));






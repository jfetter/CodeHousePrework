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
    year: parseInt(prompt("enter target year in the format #### eg 2015")),
    month: parseInt(prompt("enter month to expire in the format 1-12")),
    day: parseInt(prompt("enter day to expire in the format 1-31")),
};

console.log(Between.year, Between.month, Between.day);
//create an object for today and the new day
var Dates = {
    then: new Date(Between.year, Between.month, Between.day),
    today: new Date('April 2, 2015 0:00:00')
};

//determine the number of milliseconds that will ellapse
var numbOfMilliseconds = function(then, today) {
    var milliseconds = then - today;
    console.log(milliseconds);
    return milliseconds;
};

//detrmine the number of years...
var numbOfYears = function(milliseconds) {
    var years = (milliseconds / 31557600000)  ; //31557600000 = 365.25 days ...adding extra 1/4day to account for leap years 
    return years;
};

//determine the number of months... 
var numbOfMonths = function(month, days) {
    var months = parseInt(month)- 4; // determine the distance from April 
    console.log("Num Of Months:" + months);
    return months; //if the month is before April, it will be a negative value
};

//make the returns from timeframes easily accessible for display and calculation of days
var Count = {
    milliseconds: numbOfMilliseconds(Dates.then, Dates.today),
    days: parseInt(numbOfMilliseconds(Dates.then, Dates.today) / 86459178.1), // 86400000 milliseconds in a day + 0.0006849315 of a day add'l milliseconds
    years: parseInt(numbOfYears(numbOfMilliseconds(Dates.then, Dates.today))), 
    months: parseInt(numbOfMonths(Between.month, Between.day))
};

//calculate the number of days remaining after years and months are subtracted
var numbOfDays = function(days, years, months) {
    //subtract the full years out of the total number of days 
    console.log(days);
    days = days - ((365 * years) + ((years + 3) / 4)); // subtract an extra day off for leap years we are 3/4 of way to next leap year
    console.log("start days: " + days);
        console.log (Between.month);
        //array of days in month starting from January
        var daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (days < 0){ //if the new date is in the past
            for (var i = Between.month -2 ; i >= 0; i--) //subtract one from the month because array starts at zero and subtract another one because you are looking at days up until, but not including this month
            {days += daysInMonths[i]; 
            console.log(i, Between.month, days);
            }// end for
            }//end if
        else { //if the new date is in the future...
        for (var i = 11 - Count.months; i < daysInMonths.length; i++) 
        {
            days -= daysInMonths[i]; //subtract the number of days in each month starting from the number of months back in the array
            console.log(i, Count.months, days);
        } //end for
        }// end else
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
    };
    months = Math.abs(months);
    if (months == 1) {
        months = "1 month,  "
    } 
    else if (months == 0) {
        months = ""
    } 
    else {
        months = months + " months, "
    };
    if (years == 1) {
        years = "1 year,"
    } 
    else if (years == 0) {
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






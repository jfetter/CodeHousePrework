 // Write a JavaScript function that takes 3 arguments, year, month, and day, and calculates how many days between that day and today

// If the days are more than 30, return Y months, Z days
// If the days are months are more than 12, return X years, Y months, Z days
// Test Cases

// (Assuming today is April 2nd, 2015)

// age(2017, 11, 17) -> 2 years, 8 months, 15 days

// age(2015, 3, 6) -> 4 days
// Note that the month argument starts from 0 (11 is December)



//create an object that aquires and assigns variables to the new day month and year 
var Then = {
    year: parseInt(prompt("enter target year in the format #### eg 2015")),
    month: parseInt(prompt("enter month to expire in the format 1-12")),
    day: parseInt(prompt("enter day to expire in the format 1-31"))
};

//create an object for the current date
var Today ={
    year: parseInt(2015),
    month: parseInt(7),
    day: parseInt(9)
};

console.log(Then.year, Then.month, Then.day);
console.log(Today.year, Today.month, Today.day);
//create an object for today and the new day
var Dates = {
    then: new Date(Then.year, Then.month -1, Then.day),
    today: new Date(Today.year, Today.month -1, Today.day)
};

//determine the number of milliseconds that will ellapse between Then and Today
var numbOfMilliseconds = function() {
    var milliseconds = Dates.then - Dates.today;
    console.log(milliseconds);
    return milliseconds;
};




//determine the number of months... 
// var numbOfMonths = function() {
//     var months;// determine the distance the given month is from today 
//     if (Today.month <= Then.month) { //
//     months = Then.month - Today.month; 
//         }//end if the numberic value of today is less than the value of then
//     else {months = Today.month + Then.month}; // end if the value of today is less than then 
//     console.log("Num Of Months:" + months);
//     return months; 
// };

//calculate the number of years
var numbOfYears = function(){
    var years = parseInt(Math.abs((numbOfMilliseconds()/ 31536000000))); //31536000000 = number of milliseconds in a year  
    console.log ("years" + years);
    if (years > 1){parseInt(Math.abs((numbOfMilliseconds()/ 31536000000/31557600000))); //31557600000 = number of milliseconds in 365.25 days -- to account for leap year
    }
    return years; 
 };

//make the returns from timeframes easily accessible for display and calculation of days
var Count = {
    milliseconds: numbOfMilliseconds(),
    days: Math.abs(parseInt(numbOfMilliseconds() /86400000 )), // 86400000 milliseconds in a day 
    years: numbOfYears(),
   // months: numbOfMonths()
};


//calculate the number of days remaining after years and months are subtracted
var numbOfDays = function() {
    //subtract the full years out of the total number of days 
    console.log("days before years deducted" + Count.days);
    console.log("years: "+ Count.years);
    days = parseInt((Count.days - (365 * Count.years)) - ((Count.years -(Then.year%4))/ 4));//subtract out an extra day for each leap day that has passed since current year and subtract out the remainder of years since last leap year  
    console.log("start days: " + days);

        if (( Then.months < 2 ||(Then.months == 2 && days <= 28) )){ //if its passed february assess wether its a leap year 
            if (((Count.years + 3) % 4) == 0) { // in 2015 we are 3/4 of the way to the next leap year
                days += 1; // if it is a leap year,but leap year hasn't come yet, put back that extra day
            } // end if leap years
        }// end if after Feb 28s


        //array of days in month starting from January
        var daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; 
        var i = Today.month-1;
        var countOfMonths = 0;
        while (days > daysInMonths[i]) //subtract days in past months until you have less days than the current month 
        {
            if (Today.month <= Then.month ||( Count.milliseconds <0 && Today.month >= Then.month) ){
            days -= daysInMonths[i]; 
            i++;
            
            if(i > 11){i-=11};          //if you reach the end of the array loop back to the beginning
             } //if Today.month < 
            else {
            days -= daysInMonths[i];  
            i--;
            if(i < 0){i+=11};

            }; // else Today.month >
          console.log(i, daysInMonths[i], days);
        } //end while    
        console.log
       if (Count.milliseconds < 0){ days -= daysInMonths[Then.month-1]}; //account for the fact that you are moving backwards in time not forwards

    return [Math.abs(days), countOfMonths];
}//end numbOfDays  

var displayYearMoDay = function() 
{
    var days = numbOfDays();
    var days = days[0];
    console.log("days I end up with " + days)
    if (days == 1) {
        days = "1 day"
    } 
    else {
        days = days + " days"
    };
    months = days[1];
    if (months == 1) {
        months = "1 month,  "
    } 
    else if (months == 0) {
        months = ""
    } 
    else {
        months = months + " months, "
    };
    if (Count.years == 1) {
        years = "1 year,"
    } 
    else if (Count.years == 0) {
        years = ""
    } 
    else {
        years = Count.years + " years, "
    }
    ;
    var yearMoDay = [years, months, days].join("");
    
    return yearMoDay;
}; // end displayYearMoDay
console.log(displayYearMoDay());






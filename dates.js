//create an object that aquires and assigns variables to a future or past year month and day 
var Then = {
	year: parseInt(prompt("enter target year in the format #### eg 2015")),
	month: parseInt(prompt("enter target month in the format 1-12")),
	day: parseInt(prompt("enter target day in the format 1-31"))
};

//create an object for the year, month and date of the current date (or another date to compare to the first)
var Today = {
	year: parseInt(2015),
	month: parseInt(4),
	day: parseInt(2)
};

//create an object for the two dates you are comparing
var Dates = {
	then: new Date(Then.year, Then.month - 1, Then.day),
	today: new Date(Today.year, Today.month - 1, Today.day)
};

//determine the number of milliseconds that will ellapse between Then and Today
var numbOfMilliseconds = function() {
	var milliseconds = Dates.then - Dates.today;
	return milliseconds;
};


//calculate the number of years...
var numbOfYears = function() {
	var years = parseInt(Math.abs((numbOfMilliseconds() / 31536000000))); //31536000000 = number of milliseconds in a year  
	if (years > 1) {
		parseInt(Math.abs((numbOfMilliseconds() / 31536000000 / 31557600000))); //31557600000 = number of milliseconds in 365.25 days -- to account for leap year
	}
	return years;
};

//make the returns from timeframes easily accessible for display and calculation of days
var Count = {
	milliseconds: numbOfMilliseconds(),
	days: Math.abs(parseInt(numbOfMilliseconds() / 86400000)), // 86400000 milliseconds in a day . Take absolute value to make the numb of days function work with dates from the past
	years: numbOfYears()
};

//calculate the number of months between the given dates
var numOfMonths = function() {
	var months = parseInt((Math.abs(numbOfMilliseconds()) / 2629740000) - (Count.years * 12)) // 2629740000 miliseconds in a "month" 
	return months;
}

//calculate the number of days remaining after years and months are subtracted
var numbOfDays = function() {
	//subtract the full years out of the total number of days 
	days = parseInt((Count.days - (365 * Count.years)) - ((Count.years - (Then.year % 4)) / 4)); //subtract out an extra day for each leap day that has passed since current year and subtract out the remainder of years since last leap year  

	if ((Then.months < 2 || (Then.months == 2 && days <= 28))) { //if its passed february assess wether its a leap year 
		if (((Count.years + 3) % 4) == 0) { // in 2015 we are 3/4 of the way to the next leap year
			days += 1; // if it is a leap year,but leap year hasn't come yet, put back that extra day
		} // end if leap years
	} // end if after Feb 28s


	//array of days in month starting from January
	var daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	var i = Today.month - 1;
	while (days > daysInMonths[i]) //subtract days in past months until you have less days than the current month 
	{
		if (Today.month <= Then.month) {
			days -= daysInMonths[i];
			i++;
			if (i > 11) {
				i -= 11
			}; //if you reach the end of the array loop back to the beginning
		} //if Today.month < 

		else {
			days -= daysInMonths[i];
			i--;
			if (i < 0) {
				i += 11
			};
		}; // else Today.month >
	} //end while    
	return days;
} //end numbOfDays  

var displayYearMoDay = function() {
	var days = numbOfDays();
	var days = days;
	console.log("days I end up with " + days)
	if (days == 1) {
		days = "1 day"
	} else {
		days = days + " days"
	};
	months = numOfMonths();
	if (months == 1) {
		months = "1 month,  "
	} else if (months == 0) {
		months = ""
	} else {
		months = months + " months, "
	};
	if (Count.years == 1) {
		years = "1 year,"
	} else if (Count.years == 0) {
		years = ""
	} else {
		years = Count.years + " years, "
	};
	var yearMoDay = [years, months, days].join("");

	return yearMoDay;
}; // end displayYearMoDay
console.log(displayYearMoDay());








// ASSIGNMENT 31-34 ***************DATE METHODS*******************


// 1. Write a program that displays current date and time in 
// your browser;

var date = new Date();

document.write("<br><h2>" + date + "<br><br>");

// .............................End...............................

// 2. Write a program that alerts the current month in words. 
// For example December:


var current_month = date.getMonth();

alert( " Current Month: April " + current_month );

// .............................End...............................

// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show 
// Sun.

var currentDay = new Date();

currentDay.toString;

var x = currentDay.toString();

var y = x.slice(0,3);

alert(" Today is " + y);

// .............................End...............................

// 4. Write a program that displays a message “It’s Fun day” if 
// its Saturday or Sunday today.

var funDay = ["Sunday", "Monday","Tuesday", "Wedneday","Thursday", "Friday","Saturday"]

var day= new Date()
var todayDay =day.getDay ()
if (todayDay === "Sunday" || todayDay === "Saturday") {
    alert("Its Fun day "+ funDay[ todayDay])
}else {
    alert ("today is not a Fun day")
}


// .............................End...............................

// 5. Write a program that shows the message “First fifteen 
// days of the month” if the date is less than 16th of the month 
// else shows “Last days of the month”:

var fifteenDays = new Date();
if (date.getDate() == 15) {
    console.log("First fifteen Days Of The Month")
}
else if (date.getDate() == 30) {
    console.log("Last fifteen Days Of The Month")
}

// .............................End...............................


// 6. Write a program that determines the minutes since 
// midnight, Jan. 1, 1970 and assigns it to a variable that 
// hasn't been declared beforehand. Use any variable you like 
// to represent the Date object


var xy = new Date(2020);
 var xy= new Date(xy. getFullYear(), xy. getMonth()+1, 0, xy. getMinutes()+1, 0);

console.log(xy)


// .............................End...............................

// 7. Write a program that tests whether it's before noon and 
// alert “Its AM” else “its PM”.

var time  = new Date()

var currentTime = time.getHours()

if (currentTime < 12) {
    alert (" “Its AM”")
    
} else{
    alert(" “its PM”.")
}


// ................................................End.................................................

// 8. Write a program that creates a Date object for the last day 
// of the last month of 2020 and assigns it to variable named 
// laterDate;
 
var laterDate = new Date("december 31 2020");
document.write("<br>Later Date"+ laterDate +"<br>");



// .............................End...............................

// 9. Create a date object of the starting date of this Ramadan 
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

// ........ date of this Ramadan...........


var date1 = new Date('06/18/2015');

var date2 = new Date('06/09/2023');

var Difday = date2.getTime() - date1.getTime();

var count =  1000 * 3600 * 24;

var final = Difday/count;

document.write(final+"Days Have Passed since 1st ramdan 2015"+"<br>");

// ..................................................End.............................................................
//
//  10. Write a program that displays in your browser the 
// seconds that elapsed between the reference date and the beginning of 2015.


var date1 = new Date('06/18/2015');
var date2 = new Date('06/09/2023');
var difsec = date2.getTime() - date1.getTime();
var second =  1000;
var result = difsec/second;
document.write("On reference date "+date2+" "+ result +" seconds Had Passed since beginning of 2015"+"<br>");


// 11. Create a Date object for the current date and time. 
// Extract the hours, reset the date object an hour ahead and 
// finally display the date object in your browser.

var cDate = new Date()

document.write(cDate +"<br>")

var oldDate = cDate.getHours()

document.write(oldDate+"<br>")

  cDate.setHours(oldDate-1)            

document.write("1 hour ago, it was :"+cDate +"<br>")

// ........................................End................................................

// 12. Write a program that creates a date object and show the 
// date in an alert box that is reset to 100 years back?


var cDate = new Date()

document.write( "Current Date :"+cDate+"<br>")

var getFullYr = cDate.getFullYear()

document.write(getFullYr )

 cDate.setFullYear(getFullYr-100)
 
document.write("100 years back is was "+cDate)

alert("100 years back is was "+cDate)

// ...................................................End......................................................

// 13. Write a program to ask the user about his age. Calculate 
// and show his birth year in your browser.

var userAge = prompt("Enter Your Age");

var birth = userAge;

var currentYear = 2023;  

var calculate =  currentYear - userAge;

var result = calculate;

document.write("<h2>Your age is :" + userAge + "<br>Your birth year is :" + calculate +"<br>");

// ...........................End......................................

// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2 
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharg

document.write("<br><h2>K - Electric Bill</h2>");

var user_Name = prompt("Enter Your name");

var monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];

var month =new Date(); 

var units =+prompt("enter units");

var PerUnit = 16;

var net_amount_Payable = units * PerUnit;

var fixed_value = net_amount_Payable.toFixed(2);

var sur_charges = 350;

var Pay_After_DueDate = sur_charges + net_amount_Payable;

var fixed = Pay_After_DueDate.toFixed(2);

document.write("<h2>Customer Name:" + user_Name + "<br>Month:" + monthNames[month.getMonth()] + "<br> Number of Units:"
 + units +"<br>Charges perUnit:"+ PerUnit + "<br><br>Net Amount payable (with in Due Date):" + fixed_value 
 +"<br>Late Payment Surcharge:" + sur_charges +"<br>Gross Amount Payable (after in Due Date):" + fixed);
// ASSIGNMENT -3 


// TASK 1: Declare a variable called age & assign to it a your age. show your age in an alert box .


var age = "I m 30 years old";
alert(age);


// TASK NO 2. Declare & initialize a variable to keep track of how many
// times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You
// have visited this site N times”

var visitorsNum = "12345678910";
   

var visitorVisit = +prompt();

alert("you have visited this site " + visitorVisit  +  " times" );



// task 3: Declare a variable birthYear & assign to it your birth year.

var birthYear = 1990;
 document.write("<br><br>My birth year is " +  birthYear + "<br><br>");



//  / TASK 4:  A visitors visit an online clothing store www.XYZ clothing.com .Write a script to store in variables
// the following information :
// a ) Visitors Name:
// b) product title :
// c) quantity how many products visitors wants to order.
// Show the following message in your browser "John Doe ordered 5 T shirt (s) on XYZ clothing store."

var visitorName = "<b>John Doe</b>";

var product = "<b>T-shirt(s)</b>";

var quantity = "<b> 5 </b>";

document.write(visitorName + "  ordered "   +  quantity    +    product  +  "  on  Masooma's Clothing Store");

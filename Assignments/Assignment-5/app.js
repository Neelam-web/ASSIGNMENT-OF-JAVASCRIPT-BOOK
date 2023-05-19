
// ASSIGNMENT 5

// TASK NO 1 : Write a program that take two numbers & add them in a new variable.Show the result in Your Browser:


document.write("<br><br><b>Task 1" + "<br>")

var  num = 3 + 5 ;

var sum ="num"

document.write("<b><br><br>Sum of 3 and 5 is "+ num + "<br>" );

//TASK 2. Repeat task1 for subtraction, multiplication, division &
// modulus :


// // MULTIPLY

document.write("<br><br>Task 2" + "<br><br>")

var multi = 3 * 5;

var multiply ="multi";

document.write("<br>Multiply of 3 and 5 is " + multi + "<br>");


// subtract


var sub = 3 - 5;

var subtract ="sub";

document.write("<br>Subtract of 3 and 5 is " + sub + "<br>");

// modulus


var mod = 3 % 5;

var modulus ="mod";

document.write("<br>Modulus of 3 and 5 is " + mod + "<br>");

// DIVISION

var divi = 3 / 5;

var divide = "divi";

document.write("<br>Divide of 3 and 5 is " + divi + "<br>");



// TASK NO 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// MATH EXPRESSIONS | JAVASCRIPT
// Page 2 of 9
// after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value 
// by 3. 
// l. Output : “The remainder is : 0”.

// a )
document.write("<br><br>Task 3" + "<br>")

var a;
document.write("<br>Value after variable declaration is " + a + "<br>");

// b)

var number = 5;

document.write("<br>Initial value:<b>" + number+ "<br>");

// e)

var increment = 5 + 1 ;

document.write("<br>Value after increment is <b>: " + increment + "<br>");

// g)

var add = 6 + 7 ;


document.write("<br>Value after addition is :<b> " + add + "<br>");

// i)

var decrement = 6 + 7 - 1 ;


document.write("<br>Value after decrement is : " + decrement + "<br>");


// k)

var remainder = 12 % 3;


document.write("<br>The remainder is : " +  remainder +"<br>");


// TASK NO 4 Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate 
// the cost of buying 5 tickets to amovie Example output:

document.write("<br><br>Task 4" + "<br>")

var ticketPrice = 600 ;

var buyingTickets = 5;

var totalCost = 600 * 5 ;


document.write("<br>Total cost to buy 5 tickets to a movie isM " + totalCost + "PKR");


// TASK 5 : Write a script do display multiplication table of any number in your browser.E.g.


document.write("<br><br>Task 5" + "<br><br>");

var table$1 = 14*1;
var table$2 = 14*2;
var table$3 = 14*3;
var table$4 = 14*4;
var table$5 = 14*5;
var table$6 = 14*6;
var table$7 = 14*7;
var table$8 = 14*8;
var table$9 = 14*9;
var table$10 = 14*10;

document.write("14 x 1 = " + table$1 + "<br>" + "14 x 2 = " + table$2 + " <br> " + " 14 x 3 = " + table$3 + "<br>" +
"14 x 4 = " + table$4 + " <br> " + " 14 x 5 = " + table$5 + "<br>" + " 14 x 6 = " + table$6 + " <br> " + " 14 x 7 = " + table$7 + "<br>" + 
"14 x 8 = " + table$8 + " <br>" + " 14 x 9 = " + table$9 + "<br>" + " 14 x 10 = " + table$10 + " <br> ")


// TASK 6. The Temperature Converter: It’s hot out! Let’s make a 
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// // d. Convert it to Celsius & output “NNoF is NNoC”.


document.write("<br><br>Task 6" + "<br><br>");
 
// first convert Celcius in fahrenhite:

var celcius = 25;

var convertInFahrenhite = 77;

// Conversion formula :

// C = (F - 32) * 5/9 :

var cel = 77 - 32;

var resultC = "cel" * 5 / 9;


// celcius is = 25 and fahrenhite = 77 

// formula : celcius convert to fahrenhite C =( F -32)*5/9;
// / formula : celcius convert to fahrenhite F =( C * 9 /5) + 32 ;


var fahrenhite = 77;

var onvertInCelcius= 25;

 // Conversion formula :

//  F = (C * 9 / 5) + 32:

var fahren = 25 * 9;

var resultF = "fahren" / 5;

var fah = "resultF" + 32;

document.write(resultC +"C"  + "is" + fah + "F");

// TASK NO 7. Write a program to implement checkout process of a 
// shopping cart system for an e-commerce website. Store 
// the following in variables
// MATH EXPRESSIONS | JAVASCRIPT
// Page 5 of 9
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.

document.write("<br><br>Task 7" + "<br>");

document.write("<h1><br>Shopping Cart</br></h1>");

var priceOfItem_1 = 650;


var costOfItem_1 = 650 * 3;

var priceOfItem_2 = 100;

var quanOfItem_2 = 7;

var costOfItem_2 = 100 * 7;

var ShippingCharges = 100;

var total = 650 *3 + 100 * 7 + 100;

document.write("<b>Price of 1 item is 650<br> Quantity of 1 item is 3 <br> Price of item 2 is 100 <br> Quantity of item 2 is 7 <br> Shipping Charges 100 <br> <br> <br>Total Cost Of Your Order is" + total + "<br>");

// TAsk 8. Store total marks & marks obtained by a student in 2 
// variables. Compute the percentage & show the result in 
// your browser.

document.write("<br><br>Task 8" + "<br>");

 document.write("<h1><br>Mark Sheet</br></h1>");

var totalMarks = 980;

var obtainedMarks = 804;

var computePercentage = 804 / 980;

var result = computePercentage * 100 ;

  document.write("Total marks:" + totalMarks + "<br> <br>" + "Marks obtained:" + obtainedMarks + "<br><br>" + "Percentage:" + result +"%" + "<br>")

//    TASK 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a 
//    script to convert the total currency to Pakistani Rupees. 
//    Perform all calculations in a single expression.
//    (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee 
//    and 1 Saudi Riyal = 28 Pakistani Rupee)..

document.write("<br><br>Task 9" + "<br>")

document.write("<h1><br>Currency In PKR</br></h1>");

var dollar = 10 ;

var riyal = 25;

var exchangeInPkr = 28 * 25 + 104.80 * 10;

document.write("<b><br>Total Currency in PKR:" + exchangeInPkr +"<br>");

// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression;

document.write("<br><br>Task 10" + "<br><br>")

var number = 5;

var addFive =  number + 5;

var multiplyByTen = addFive * 10;

var divideByTwo = multiplyByTen / 2;

document.write(" write some number like 5 <br>and Add 5 <br> Multiply by 10 <br> Divide the result by 2 <br><br> The Result is 50")

// TASK 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.
// Output them to the screen like so: “They are either NN or NN
// years old;

document.write("<br><br>Task 11" + "<br>")

document.write("<h1><br>Age Calculator</br></h1>");

var currentYear= 2016;

var birthYear = 1992;

var YourAge = 2016 - 1992;

document.write("Current Year : 2016 <br> Birth Year : 1992 <br>  Your Age : 24<b>" );

//TASK  12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.

// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

document.write("<br><br>Task 12" + "<br>")


document.write("<h1><br>The Geometrizer</br></h1>");

var radius = 20;

var pi = 2 * 3.1415992 *radius;

document.write("<b> Radius of a Circle : 20 <br> <br>The Cirumference is : 125.6999999 <br><br><b>" +  "The area is :<b>" + pi );


// TASK 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.


document.write("<br><br>Task 13" + "<br>")

document.write("<h1><b><br>The Lifetime Supply Calculator </br></h1>");

var snack = "chocochip";

var currentAge = 15;

var maxAge = 65;

var amountOfSnack = 3;

var r = 65 - 15;

var calculate = r * 3;

document.write("<b>Favourite Snake is : ChocolateChip<b><br><br>Current Age : 15<br><br> Estimate Maximumt Age :65 <br><br>Amount of Snacks per day: 3<br><br> You will need  " + calculate + "  chocolate chip to last untill the ripe old age of 65");

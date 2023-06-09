// 
// ASSIGNMENT 9-10 User Input & Conditional Statement


// TASK NO 1. Write a program to take “city” name as input from user. If 
// user enters “Karachi”, welcome the user like this: 
// “Welcome to city of lights” :

var userInput = prompt("Enter Your City Name");
 
var cityName = "karachi"; 
if (userInput == cityName) {
    alert("Welcome to city of Lights");
}

// ................................End........................................

// TASK NO 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the 
// user is female, give the message: Good Morning Ma’am :


var inputUser = prompt("Enter Your Gender :");

var gender = "Male";
if (inputUser == gender ) {
    alert("Good Morning Sir.");
}
else{
    alert("Good Morning Ma'am");
}

// ................................End........................................

//TASK NO  3. Write a program to take input color of road traffic signal 
// from the user & show the message according to this table:
// Signal color Message
// Red Must Stop
// Yellow Ready to move
// Green Move now :
// 
var inputColor = prompt("Enter The color of Road Traffic Signal");
var userColor = "Red";
if (inputColor == userColor) {
    alert("Must Stop");
}
var userColor = "Green";
if (inputColor ==  userColor ) {
    alert("Move Now");
}
var userColor = "Yellow";
if (inputColor ==  userColor) {
    alert("Ready to Move");
}
// else{
//     alert("Enter a valid Traffic Signal color");
// }

// ................................End........................................

// TASK NO 4. Write a program to take input remaining fuel in car (in 
    // litres) from user. If the current fuel is less than 0.25litres, 
    // show the message “Please refill the fuel in your car:

var inputFuel = prompt("Enter The Remaining Fuel In Your Car In Litters"); 

var currentFuel = "0.25littres";

if (inputFuel < currentFuel) {
    alert("Please Refill The Fuel In Your Car"); 

}

// ................................End........................................


// TASK NO 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
 var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
//  var b = 82;
// if (b++ === 83){
// console.log("given condition for variable b is true");
// }
//  var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
 var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
} 
 if (true){
alert("True");
}
if (false){
alert("False");
}
 if("car" < "cat"){
alert("car is smaller than cat");
}

// ................................End........................................

// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute 
// grade as per following table:
// Show the total marks, marks obtained, percentage, grad:

document.write("<h1><br>Marks Sheet</br></h1>");

var totalMarks =300;

var obtainedMarks = 219;

var divide = obtainedMarks / totalMarks;

var ans = divide;

var percentage = ans * 100;

var result = percentage;

document.write( "<h2><br>Total marks : 300 <br></h2" + "<h2><br> Obtained marks : 219 <br></h2>" + "<h2> Percentage : 73% <br></h2" + "<h2><br>Grade : B <br></h2" + "<h2><br>Remarks : You Need to improve <br></h2");

// ................................End........................................


// TASK NO 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

var secretNum = 5;

var guessUser = prompt("Guess The Secret Number .");

var  guessNum = guessUser;

if (secretNum == guessUser) {
    alert("Bingo! Correct Answer");

}
else if (guessUser == secretNum + 1) {
    alert("Close Enough To The Correct Answer .");
}

//    else{
//     alert("Again Try")
//    } 

// ................................End........................................ 


// TASK NO 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number 
// is divisible by 3.

var divisibleBy$3 = +prompt("Enter a Number");

if (divisibleBy$3 % 3 == 0) {

    alert("Yes It Is Divisible By 3");
} 
else {
    alert("Yes It Is Not Divisible By 3");
 }

//  ................................End........................................

// 9. Write a program that checks whether the given input is an
// even number or an odd number.

var input = +prompt("Enter a number");

var evenOdd = input;

if (input % 2 == 0 ) {
    alert("Even Number");

}
 else{
    alert("Odd Number");
 }
    
//  ................................End........................................

//  10. Write a program that takes temperature as input and 
//  shows a message based on following criteria
//  a. T > 40 then “It is too hot outside.”
//  b. T > 30 then “The Weather today is Normal.”
//  c. T > 20 then “Today’s Weather is cool.”
//  d. T > 10 then “OMG! Today’s weather is so Cool.”:

var userInput = prompt("Enter today's Temperature");
 
var temperatureInput = 40;

if (userInput == temperatureInput) {
    alert("It is too hot outside");
}
var temperatureInput = 30;

if (userInput == temperatureInput) {
    alert("The Weather today is Normal");
}
var temperatureInput= 20;

if (userInput == temperatureInput) {
    alert("Todays Weather is cool");
}
var temperatureInput= 10;

if (userInput == temperatureInput) {
    alert("OMG! Today's weather is so Cool");
} 


 alert("hayee ALLAH innnnnnnnniii thannnndddd")


// 11. Write a program to create a calculator for +,-,*, / & % 
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user:

var fNum = + prompt("Enter first Numeber")
var sNum = + prompt("Enter second Numeber")
var optor = prompt("Enter Operator")
if(optor == '+'){
    var number1 = fNum + sNum
    alert(number1)
} 
else if(optor == '-'){
    var num2 = fNum - sNum
    alert(num2)
} 
else if(optor == '*'){
    var num2 = fNum * sNum
    alert(num2)
} 
else if(optor == '/'){
    var num3 = fNum / sNum
    alert(num3)
} 
else{
    var num3 = fNum % sNum
    alert(com3)
}

// ............................................End...................................................
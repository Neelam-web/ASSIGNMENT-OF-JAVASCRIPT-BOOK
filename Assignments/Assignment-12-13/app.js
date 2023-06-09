
// ASSIGNMENT 12-13   *******IF…ELSE & ELSE IF STATEMENT TESTING SET OF CONDITIONS*********


// // TASK NO 1. Write a program that takes a character (number or string) 
// // in a variable & checks whether the given input is a 
// // number, uppercase letter or lower case letter. (Hint: ASCII 
// // codes:- A=65, Z=90, a=97, z=122).

// //************** */ American Standard Code  for International Interchange.**************

var inputChar = prompt("Enter a character Number or string");

if (inputChar >=65 && inputChar <= 90 || inputChar >= "A" && inputChar <= "Z" ) {
    alert("upperCase letter")
}
else if (inputChar >=97 && inputChar <= 122 || inputChar >= "a" && inputChar <= "z" ) {
    alert("lowerCase letter") 
    
}
else{
    alert("Numbers");
}


//  ....................................End........................................


// // // TASK NO 2. Write a JavaScript program that accept two integers and
// // // display the larger. Also show if the two integers are equal.

var input1 = +prompt("Enter First Integers");

var input2 = +prompt("Enter Second Integers");

if (input1 > input2) {
    alert( " The larger integer is "  + input1 + ".");
}
else if (input2 > input1) {
    alert(" The larger integer is "  + input2 + ".");
}
else {
    alert("The values of " + input1 + " and " + input2 + " are equall");
}

// ....................................End........................................

// // TASK NO 3. Write a program that takes input a number from user & 
// // state whether the number is positive, negative or zero.

var numInput = +prompt("Enter a Number");

// if the number is equall to 0 is zero
if (numInput == 0) {
    alert("The Number Is Zero");
}
// if the number is greater then 0 its possitive

else if (numInput > 0) {
    alert("The Number Is Possitive");
}
// if the number is less then 0
else {
    alert("The Number Is Negative");
}

// ....................................End........................................

// 4. Write a program that takes a character (i.e. string of 
//     length 1) and returns true if it is a vowel, false otherwise


var str = prompt("Enter a Character");

if (str.length == 1) {
    
}else {
    alert("Give only one character")
}
 if (str == "a" || str == "e" || str == "i"|| str == "o" ||str == "u") {
    alert("True");
}
 else {
    alert("false");
 }   

//  ....................................End........................................

// TASK NO 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then 
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are 
// same, show message “Correct! The password you 
// entered matches the original password”. Show 
// “Incorrect password” otherwise.

// 

var originalPw = "masooma_99";

var pasword = prompt("Enter Your Pasword");

if (pasword === "") {
    
    alert("Please Enter Your Pasword");
}
else if(pasword === originalPw){

    alert("“Correct! The pasword you entered matches the original password”");
}
else {
    alert("Incorrect Pasword");
}

// ....................................End........................................

// 6. This if/else statement does not work. Try to fix it:

// var greeting;

// var hour = 13;

// if (hour < 18) {
// console.log( "Good day");}
// else{
//     console.log( "Good day");;
// }

// 6. This if/else statement does not work. Try to fix it:
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";}
else{
greeting = "Good evening";
}

// ....................................End........................................

// 7. Write a program that takes time as input from user in 24 
// hours clock format like: 1900 = 7pm. Implement the 
// following case using if, else & else if statements

var inputTime = prompt("Enter the time in 24 hours format");

var time = 1900;

if (inputTime >= 1900 && inputTime < 1200) {
    alert("Good Morning!");
}
else if (inputTime >= 1200 && inputTime < 1700 ) {
    alert("Good Afternoon!");
} 
else if (inputTime >= 1700 && inputTime < 2100 ) {
    alert("Good Evening!");  
}
else if (inputTime >= 2100 && inputTime <= 2359 ) {
    alert("Good Night!");
} 

else {
    alert("False");
}

// ....................................End........................................
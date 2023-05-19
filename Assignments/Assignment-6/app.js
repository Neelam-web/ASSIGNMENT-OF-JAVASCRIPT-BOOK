// ASSIGNMENT - 6

// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

var  a = 2;

var b = 1;

 var res1 = "a" + --a;
 
 let decremA= res1;

console.log(decremA);

// var res2 =  decrem + --a;

// var result2 = res2;

// console.log(res2);

// var aa = 1;

// var resultA = "aa" +  ++b;

// console.log(resultA);





// 3. Write a program that takes input a name from user &
// greet the user.

var userName = prompt("Enter a Name");
alert(" Hey Dear Welcome To Our Web Page");

// 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

document.write("<br><br>Task 5" + "<br>");

var inputNum =  +prompt();
var userNum = inputNum + "x 1" + "= " + inputNum * 1;
document.write("<br>" + userNum+"<br>");
var userNum = inputNum + "x 2" + "= " + inputNum * 2;
document.write("<br>" + userNum+"<br>");
var userNum = inputNum  + "x 3" + "= " + inputNum * 3;
document.write("<br>" + userNum+"<br>");
var userNum = inputNum + "x 4" + "= " + inputNum* 4;
document.write("<br>" + userNum+"<br>");
var userNum = inputNum+ "x 5" + "= " + inputNum * 5;
document.write("<br>" + userNum+"<br>");
var userNum = inputNum  + "x 6" + "= " + inputNum * 6;
document.write("<br>" + userNum+"<br>");
var userNum = inputNum + "x 7" + "= " + inputNum* 7;
document.write("<br>" + userNum+"<br>");
var userNum = inputNum  + "x 8" + " = " + inputNum * 8;
document.write("<br>" + userNum+"<br>");
var userNum = inputNum  + "x 9" + " ="  + inputNum * 9;
document.write("<br>" + userNum+"<br>");
var userNum = inputNum  + "x 10" + "= " + inputNum * 10;
document.write("<br>" + userNum+"<br><br>");

// var us = 5;
//  alert("by defult number is 5")

// var defult = "inputNum"+5;
// var us =  5 + "x 1" + "= " + 5 * 1;
// document.write("<br>" + us+"<br>");
// var us = 5 + "x 2" + "= " + 5 * 2;
// document.write("<br>" + us+"<br>");
// var us = 5  + "x 3" + "= " + 5 * 3;
// document.write("<br>" + us+"<br>");
// var us = 5 + "x 4" + "= " + 5 * 4;
// document.write("<br>" + us+"<br>");
// var us = 5+ "x 5" + "= " + 5 * 5;
// document.write("<br>" + us+"<br>");
// var us = 5  + "x 6" + "= " + 5 * 6;
// document.write("<br>" + us+"<br>");
// var us = 5 + "x 7" + "= " + 5* 7;
// document.write("<br>" + us+"<br>");
// var us = 5  + "x 8" + " = " + 5 * 8;
// document.write("<br>" + us+"<br>");
// var us = 5  + "x 9" + " ="  + 5 * 9;
// document.write("<br>" + us+"<br>");
// var us = 5  + "x 10" + "= " + 5 * 10;
// document.write("<br>" + us+"<br><br>");

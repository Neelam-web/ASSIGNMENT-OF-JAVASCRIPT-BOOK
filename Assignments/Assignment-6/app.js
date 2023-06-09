// 
// ASSIGNMENT - 6 Math Expressions


// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your browser :

var a = 10;

 document.write("<br>Result:<br>The value of a is:" + a + "<br>......................................<br>");

 var a = 10;
 var result1 =  ++a;

 document.write("<br>The value of ++a is:" + result1 + "<br>"+ "Now the value of a is :" + result1 +"<br>");

 var a = 11;
 var result2 = a++;
var result3 = a;
 document.write("<br>The value of a++ is:" + result2 + "<br>" + "Now the value of a is :" + result3 + "<br>");

 
 var a = 12;
 var result4 = --a;
 document.write("<br>The value of --a is:" + result4 + "<br>" + "Now the value of a is :" + result4 + "<br>");

var a = 11;
var result6 = a--;
var result7 = a;
document.write("<br>The value of a-- is:" + result6 + "<br>"+ "Now the value of a is:" + result7 +"<br>" );



// ...........................End......................................


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
 
 var  decrem1 = res1;

console.log(decrem1);

var res2 = decrem1 + --a + --b;

var decrem2 = res2;

console.log(decrem2);

var prefixDecrement = decrem2 + --a + --b + ++b ;

var decre3 = prefixDecrement;

console.log(decre3);


var prefixincrement2 = decre3 + --a + --b + ++b + b--;

var incre = prefixincrement2;

console.log(incre);

// document.write(a);

// 3. Write a program that takes input a name from user &
// greet the user.

var userName = prompt("Enter a Name");
alert(" Hey Dear Welcome To Our Web Page");

// ................................End........................................

// 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

document.write("<br><br>Task 5" + "<br>");

var inputNum = +prompt( "Enter a number to make the table" , 5 );

var userNum = inputNum + "x 1" + "= " + inputNum* 1;
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


// ................................End........................................

// TASK 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table):


var english = +prompt("Enter your English Obtained Marks")
var maths = +prompt("Enter Your Math Obtained Marks")
var urdu = +prompt("Enter Your Urdu Obtained Marks")
var total = 100
var total1 = total*3
var calSub = english+urdu+maths
var percent = english/total*100
var percent1 = maths/total*100
var percent2 = urdu/total*100
var percent3 = calSub/total1*100
document.write("<b>Subject    total Marks    Obtained Marks    Percentage<br>");
document.write("<b>ENGLISH  "+" "+total+" "+" "+" "+english+" "+" "+" "+percent+"%"+"<br>");
document.write("<b>MATHS    "+" "+total+" "+" "+" "+maths+" "+percent1+"%"+"<br>");
document.write("<b>URDU  "+" "+total+" "+" "+" "+urdu+" "+" "+" "+" "+percent2+"%"+"<br>")
document.write("     "+total1+" "+" "+" "+calSub+" "+" "+" "+" "+percent3+"%"+"<br>");
 

// ........................................................END.......................................................


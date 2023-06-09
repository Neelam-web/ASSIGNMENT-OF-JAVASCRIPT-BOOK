
// ASSIGNMENT 26-30 *****Math Method*******

// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number:

var inputNum = prompt("Enter a Positive Number");

var input = inputNum;

var round =  Math.round(input);

var floor = Math.floor(input);

var ceil = Math.ceil(input);

document.write("<br><h2>number: " + input + "<br>round off value: " + round + "<br>floor value: " + floor+ "<br>ceil value: "+ ceil );  

// TASK NO 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number :

var inputNum = prompt("Enter a Negative Number");

var input = inputNum;

var round =  Math.round(input);

var floor = Math.floor(input);

var ceil = Math.ceil(input);

document.write("<br><h2>number: " + input + "<br>round off value: " + round + "<br>floor value: " + floor+ "<br>ceil value: "+ ceil );  

// 3. Write a program that displays the absolute value of a 
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5:

var num = -4;

var abs = Math.abs(num);

document.write("<br><h2>The absolute value of " + num + " is " + abs +"<br>");


        //   .........................End................................



// task 4 Write a program that simulates a dice using random() 
// method of JS Math class. Display the value of dice in your 
// browser.

var dice = Math.floor( Math.random() * 6 )+1 ; 

document.write("<br>random dice value " + dice + "<br>random dice value"+ dice + "<br>")


// ..........................End....................................


// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

var coinToss = Math.floor(Math.random()*2);

if (coinToss  === 2) {

    document.write(coinToss +"random coin value Heads:");

} else if (coinToss === 1) {
    document.write(coinToss + "random coin value Tails:" );
}
    

// ...............................................End................................................................

// 6. Write a program that shows a random number between 1 
// and 100 in your browser:


// ; generate number between 1 to 100;

 var num = Math.random();

 var num = num *100;

 var num = Math.floor(num)

 document.write("<br><h2>random number between 1 to 100:" + num + "<br>");

// ...................End......................

// 7. Write a program that asks the user about his weight. Parse 
// the user input and display his weight in your browser. 
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms:

var userWeight = prompt("Enter your weight in kilograms");

var replace = userWeight.replace("kgs","kilograms")

document.write("The weight of user is "+ replace + "<br>")


// 8. Write a program that stores a random secret number from 
// 1 to 10 in a variable. Ask the user to input a number 
// between 1 and 10. If the user input equals the secret 
// number, congratulate the user :

var secretNum = 8;

var userInput = prompt("Enter a Secret Number Between 1 to 10:");

if (userInput == secretNum) {

 alert("Congratulation You Guess The Number");

}else{
    alert("TRY AGAIN");
}

// .............................................End...................................................
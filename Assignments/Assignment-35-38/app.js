// //
// // ASSIGNMENT 35 -38 (Function)

// // 1. Write a function that displays current date & time in your 
// // browser.

function displayDate() {
    
    document.write("<br><h2>"+ new Date());
}
displayDate(new Date());

// // ...........................................End...................................................

// // 2. Write a function that takes first & last name and then it 
// // greets the user using his full name:

function greet(firstName,lastName){

console.log(" hello " + firstName , lastName);

}
greet ("Masooma" , "Batool");


// // ...........................................End...................................................

// // 3. Write a function that adds two numbers (input by user) 
// // and returns the sum of two numbers.


function add(n1,n2){

return +prompt("First Number") + (+prompt("Second Num"));

}
var num = add();
console.log(num);

// // .............................................End.......................................................

// // 4. Calculator:
// // Write a function that takes three arguments num1, num2 
// // & operator & compute the desired operation. Return and 
// // show the desired result in your browser.

var num1 = prompt("Enter The First Number");
var num2 = prompt("Enter The Second Number");
var ope =  prompt("Enter Operator from + * - /");

function add(num1,num2){
    return "Addition Result is " + parseInt(num1) + parseInt(num2);
    }
    var result2 = add(num1,num2);
    console.log( result2);


function multiply(num1,num2){
return "Multiply Result is " + parseInt(num1) * parseInt(num2);
}
var result3 = multiply(num1,num2);
console.log( result3);


function subtract(num1,num2){
    return "Subract Result is " + parseInt(num1) - parseInt(num2);
    }
    var res4 = subtract(num1,num2)
    console.log(res4)


function divide(num1,num2){
    return "Divide Result is " + parseInt(num1) / parseInt(num2);
    }
    var res5 = divide(num1,num2);
    console.log(res5);


// // .................................................End................................................

// // 5. Write a function that squares its argument:


function sqaure(a){

var result = a * a;


    console.log("Square of your number is " + result)
}
sqaure(8);

// // .................................................End................................................

// // 6. Write a function that computes factorial of a number:

//     // 1st Method

function factorial(n){
    if (n == 0) {
        return 1;
    }
else{
    return n*factorial(n-1);
}
}
var result = factorial(5);
console.log(result);

// // 2nd Method krongi sb sara hojany k bad 
// // .................................................End................................................


// // 7. Write a function that take start and end number as inputs 
// // & display counting in your browser.
                            


// // 8. Write a nested function that computes hypotenuse of a 
// // right angle triangle. 
// // Hypotenuse2 = Base2 + Perpendicular2
// // Take base and perpendicular as inputs.
// // Outer function : calculateHypotenuse()
// // Inner function: calculateSquare():


function calculateHypotenuse(base, perpe){
    function calculateSquare(side){
    return side*side;
    }
    base_square = calculateSquare(base)
    perpe_square = calculateSquare(perpe)
    hypo_square = base_square + perpe_square
    hypo = Math.sqrt(hypo_square)
     console.log(base_square);
     console.log(perpe_square);
     return hypo;
    

}
var hypo = calculateHypotenuse(4,2);
console.log(hypo);

// // ...........................................End..................................................

// // task no 9. Write a function that calculates the area of a rectangle.
// //  A = width * height
// //  Pass width and height in following manner:
// // i. Arguments as value
// // ii. Arguments as variables;

// //*****Arguments as value*****

function area (length, width) {
return length * width;
}
var values = area(125,145)
console.log("The area of your rectangle is " + values );

// *******Arguments as value*****

function area (length, width) {
    return length * width;
    }
    var weight = 125;
    var height = 145;
    var result = area(weight,height)
    console.log("The area of your rectangle is " + result );

// // ...............................................End.................................................


// 10. Write a JavaScript function that checks whether a passed 
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as 
// forward, e.g., madam.

var str = prompt(" Please Enter a string");

function palindrome(str) {
    if (str == str.split('').reverse().join('')) {
    console.log(str + ' is palindrome.');
    }
    else {
    console.log(str + ' is not palindrome.');
    }
   }
//    var result = palindrome(str);

// //    ...........................................End....................................................

// // 11. Write a JavaScript function that accepts a string as a 
// // parameter and converts the first letter of each word of the 
// // string in upper case. 
// // EXAMPLE STRING : 'the quick brown fox'
// // EXPECTED OUTPUT : 'The Quick Brown Fox':

function uppercase(str)
{
  var arr = str.split(' ');
// console.log(arr);
  var newarr = [];
    
  for(var i = 0; i < arr.length; i++){

      newarr.push(arr[i].charAt(0).toUpperCase()+arr[i].slice(1));

  }
  return newarr.join(' ');
}
// console.log(uppercase("the quick brown fox"));

// // ..........................................................End............................................................

// // 12. Write a JavaScript function that accepts a string as a 
// // parameter and find the longest word within the string. 
// // EXAMPLE STRING : 'Web Development Tutorial'
// // EXPECTED OUTPUT : 'Development':

function longestWord(str)
{
  var arr = str.match(/\w[a-z]{0,}/gi);
  var result = arr[0];

  for(var i = 1 ; i < arr.length ; i++)
  {
    if(result.length < arr[i].length)
    {
    result = arr[i];
    } 
  }
  return result;
}
console.log(longestWord('Web Development Tutorial'));

// // ..................................................End.........................................................

// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2

document.write("<b>The Geometrizer</b><br>");
function calcCircumference(radius){
  var cuircum= 2* Math.PI*radius;
console.log("The circumference is "+cuircum);
}
calcCircumference(3)

function calcArea(radius){
    var area= Math.PI * radius**2;
  console.log("The Area is "+ area);
  } 
calcArea(2)


// .................................................End..............................................
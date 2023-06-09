
// // // // ASSIGNMENT 21-25

// // // //TASK NO  1. 
// // // 1. Write a program that takes two user inputs for first and 
// // // last name using prompt and merge them in a new variable 
// // // titled fullName. Greet the user using his full name.


// var firstName = prompt("Enter Your First Name");

// var lastName = prompt("Enter Your Last Name");

// var fullName = firstName + lastName;

// alert(" Hello " + fullName);

// // .....................................End...............................................


// // // // TASK NO 2. Write a program to take a user input about his favorite 
// // // // mobile phone model. Find and display the length of user 
// // // // input in your browser;

// var userInput = prompt("Enter Your Favourite Mobile Phone Model");

// var str = userInput.length;

// document.write("<br>My favourite phone is:" + userInput + "lenght of string is:" + str );

// // // .................................END..............................

// // // //TASK NO 3. Write a program to find the index of letter “n” in the word
// // // // “Pakistani” and display the result in your browser .

// var str = "pakistan";

//  var result = str.indexOf('n');

//  document.write("<h2>String : Pakistani <br>" + "Index of 'n':" + result );

// //  .....................................End...............................................

// // // //  4. Write a program to find the last index of letter “l” in the 
// // // // word “Hello World” and display the result in your browser.

// var mystr = "Hello World";

//  var result2 = mystr.lastIndexOf('l') ;

//  document.write("<h2>String : Pakistani <br>" + "Last Index of 'l':" + result2 );

// // .....................................End...............................................

// // // //  TASK NO 5. Write a program to find the character at 3rd index in the 
// // // //  word “Pakistani” and display the result in your browser.

// var name1 = "Pakistani";

// var res = name1.charAt(3);

// document.write("<h2>String : Pakistani <br>" + "Character at Index of '3':" + res );

// // .....................................End...............................................

// // //         6. Repeat Q1 using string concat() method

// var firstName = prompt("Enter Your First Name");

// var lastName = prompt("Enter Your Last Name");

// var greet = "hello"

// var fullName = firstName.concat(" " + lastName + " " + greet)

// alert(fullName);



// // //     .......................................End....................................................

// // // // TASK NO 7. Write a program to replace the “Hyder” to “Islam” in the 
// // // // word “Hyderabad” and display the result in your browser.

// var str = "Hyderabad";

// var newstr = str.replace('Hyder','Islam');

// document.write("<h2>City: Hyderabad <br>" + "After replacement :" + newstr+"<br>" );

// // .....................................End...............................................

// // // // TASK NO8. Write a program to replace all occurrences of “and” in the
// // // // string with “&” and display the result in your browser.
// // // // var message = “Ali and Sami are best friends. They play cricket and 
// // // // football together.”

// var message = "Ali and Sami are best friends. They play cricket and football together";

// var reg = new RegExp('and','gi');

// var res = message.replace(reg,'&');

// document.write("<br>"+ res +"<br><br>" );

// // .....................................End...............................................

// // // TASK NO 9. Write a program that converts a string “472” to a number 
// // // 472. Display the values & types in your browser;

// var str = "472";

// var number = Number("472");

// console.log(number);

// document.write("Value:"+ number + "<br> Type: String<br>" + "Value:" + number + "<br>Type:number<br>" );

// // .....................................End...............................................

// // // // TASK NO 10. Write a program that takes user input. Convert and 
// // // // show the input in capital letters;

// var userInput = prompt("Please Enter a string");

// var convert = userInput.toUpperCase();

// document.write("<br>User input:" + userInput + "<br>Upper Case: " + convert + "<br>");

// //         //   ....................End..........................



// // // // TASK NO 11. Write a program that takes user input. Convert and 
// // // // show the input in title case;

// var input = prompt("Enter a character");


// var changeInTitle = 

// console.log("<br><h2>User input:"+ input + "Title case:" + changeInTitle)


// // // // TASK NO 12. Write a program that converts the variable num to 
// // // // string.
// // // var num = 35.36 ;
// // // Remove the dot to display “3536” display in your browser.

var num = 35.36;

var  result = num.toString();

document.write( "<br>Number:"+ num + "<br>Result:" + result + "<br>");



// // //      ......................................End.......................................................

// // // // TASK NO 13. Write a program to take user input and store username 
// // // // in a variable. If the username contains any special symbol 
// // // // among [@ . , !], prompt the user to enter a valid username. 
// // // // For character codes of [@ .
// // // Note:
// // // ASCII code of ! is 33
// // // ASCII code of , is 44
// // // ASCII code of . is 46
// // // ASCII code of @ is 64


var user = prompt(" Enter Your Name ");

        if (user.charCodeAt() === 33 || user.charCodeAt() === 44||

 user.charCodeAt() === 46 || user.charCodeAt() === 64) 
 {
  alert("Please enter a valid username without using symbols.")  }   
     
else{
        alert("thanks for your input")

}

// // ....................................End..........................................................


// // // 14. You have an array
// // // A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// // // Write a program to enable “search by user input” in an 
// // // array. After searching, prompt the user whether the given 
// // // item is found in the list or not.
// // // Note: Perform case insensitive search. Whether the user 
// // // enters cookie, Cookie, COOKIE or coOkIE, program 
// // // should inform about its availability. Example:

// var  bakeri = ["cake","apple pie","cookie","chips","patties"];

//  var userSelect = prompt("Welcome TO Suaad bakeri what do you want to order Sir'Maam?");

// var index = -1;

// for (var i = 0; i < bakeri.length; i++){

//    if (bakeri [i].toLowerCase( )=== userSelect.toLowerCase()) {

//       index = i;
//   }
// }
// if (index !== -1) {
//    alert( userSelect + "  is available at index " + index +"  in our bakery") 
// }
// else{
//    alert("We are sorry " + userSelect + " is not available in Our Bakeri")

// }
 
// // //            ........................End...........................


// // TASK NO 15. Write a program to take password as an input from 
// // user. the password must qualify these requirements:
// // a. It should contain alphabeTts and numbers
// // b. It should not start with a number
// // c. It must at least 6 characters long
// // If the password does not meet above requirements,
// // prompt the user to enter a valid password.
// // For character codes of a-z, A-Z & 0-9, refer to ASCII
// // table at the end of this document.

var myInput = prompt("Enter Your Password it should contain  A To Z , a to z and 6 characters long and does not start with num")

// validate lower letters

var lowerCaseLetters = /[a-z]/g;

if (myInput.match(lowerCaseLetters)){

    alert("Thanks for your Input")
}    
// Validate capital letters

var upperCaseLetters = /[A-Z]/g;

if (myInput.match(upperCaseLetters)) {

    alert("Thanks for your Input")
}
// validate length;

var length = /[0-6]/g;

 if(myInput.match.length >=6 ){       
}
else{
    alert("Password atleast 6 characters long");
}
// / Validate numbers

var number = /[0-9]/g;


if(myInput.match(number)){

    alert("Password cannot start with the number"); 
}
else{
    alert("PLease Enter a Valid Passsword")

}
// ...............................................End..............................................
// // ,,,,,,,,,,,,,,TASK 16,,,,,,,,,,,,,

// // TASK NO 16. Write a program to convert the following string to an 
// // array using string split method.
// // var university = “University of Karachi”;
// // Display the elements of array in your browser:

// var str = "University of Karachi";

// var arr = str.split("");

// for (var i = 0; i <arr.length; i++) {

// document.write( arr[i] + "<br>"); 
    
// }
// //  .........................................END................................................................



// //         // ,,,,,,,,,,,,,,TASK 17,,,,,,,,,,,,,

// // // 17. Write a program to display the last character of a user 
// //         // input;

// var userInput = prompt("Enter a Character");

// var strlength = userInput.slice(-1);

// document.write(" <h1>User Input:" + userInput + "<br> Last Character of input:" + strlength);


// // // .....................END.....................


// // // 18. You have a string “The quick brown fox jumps over the 
// // // lazy dog”. Write a program to count number of 
// // // occurrences of word “the” in given string:



var sentence =("The quick brown fox jumps over the lazy dog")

document.write("Text: "+"<br/>"+sentence +"<br/>")

var sentenceLowerCase = sentence.toLowerCase()

var word =sentenceLowerCase.match(/the/g)

document.write("There are "+word.length+" occurrence(s) of word 'the'")


// ............................................End...................................................
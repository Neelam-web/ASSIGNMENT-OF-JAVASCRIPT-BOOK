
// ASSIGNMENT 17-20 ********************* ARRAYS AND LOOP************************

// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays):

// var  multiDimensionalArrays = [[],[],[]];

// 2. Declare and initialize a multidimensional array 
// representing the following matrix:

var multiArray=[[0,1,2,3],[1,0,1,2],[2,1,0,1]]

for (var i = 0; i<4; i++) {

    document.write("<br><b>"+multiArray[i] +"<br>") 
    
    }

// ....................................................End...............................................................

// 3. Write a program to print numeric counting from 1 to 10:

 for (var index = 1; index <= 10; index++) {
   document.write("<br><h2>"+ index + "<br>"); 
    
}
// ..........................................End.......................................................


// 4. Write a program to print multiplication table of any 
// number using for loop. Table number & length should be 
// taken as an input from user:

var Table = prompt(" Enter a Number to Show its Multiplication Table ");
 
var Length = +prompt(" Enter a Number The Length of the Table");

for (var i = 1; i <= Length; i++) {
  
   document.write( "<br><br>" + Table + " x " + i + " = " + i*Table ); 
}

// / ........................................End.......................................................

// 5. Write a program to print items of the following array 
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, 
// “strawberry”]

var fruits = ['apple','banana','mango','orange','strawberry'];

for (var i = 1; i <=1; i++) {
       
}
document.write( "<br>"+ fruits + "<br>");
document.write("<br>Elemen at index 0 is " + fruits [0]);
document.write("<br>Elemen at index 1 is " + fruits [1]);
document.write("<br>Elemen at index 2 is " + fruits [2]);
document.write("<br>Elemen at index 3 is " + fruits [3]);
document.write("<br>Elemen at index 4 is " + fruits [4] + "<br><br>");


// / ........................................End.......................................................


// 6. Generate the following series in your browser. See 
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k :

// .....................................a.......................................................


var counting = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15'];

document.write ("Counting:<br><br>" + counting + "<br>");

// .....................................b.......................................................

var reverseCount = ['10','9','8','7','6','5','4','3','2','1'];

document.write ("<br>Reverse counting:<br><br>" + reverseCount + "<br><br>");

// .....................................c.......................................................
document.write("Even:<br><br>");

for (var  even = 0; even <= 20 ; even+=2) { 

      document.write(even + " ," )
   
} 
// .....................................d.......................................................

document.write("<br><br>Odd:<br><br>");

for (var  odd = 1; odd <= 19 ; odd+=2) { 

      document.write(odd + " ," )
}
// .....................................e.......................................................

 var Series = ['2k','4k', '6k', '8k', '10k', '12k', '14k', '16k', '18k', '20k'];

  document.write("<br><br>Series:<br><br>" + Series+ "<br>");


// / ........................................End.......................................................



// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an 
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

var  bakeri = ["cake","apple pie","cookie","chips","patties"];

 var userSelect = prompt("Welcome TO Suaad bakeri what do you want to order Sir'Maam?");

var index = -1;

for (var i = 0; i < bakeri.length; i++){

   if (bakeri [i]=== userSelect) {

      index = i;
  }
}
if (index !== -1) {
   alert( userSelect + " available at index " + index +"  in our bakery") 
}
else{
   alert("We are sorry " + userSelect + " is not available in Our Bakeri")

}

// .....................................End......................................................

// TASK NO 8. Write a program to identify the largest number in the 
// given array.
// A = [24, 53, 78, 91, 12]:

var  largestNum = ["24","53", "78", "91", "12"];

var max = largestNum[0];

for (var i = 0; i < largestNum.length; i++) {
   if (max<largestNum[i]) {
      max =largestNum [i]
   }  
}document.write("<br>Array items: " + " . "+ largestNum + "<br>The Largest Number is " +  max + "<br>");

// .....................................End......................................................

// 9. Write a program to identify the smallest number in the 
// given array.
// A = [24, 53, 78, 91, 12];



var smallestNum =["24","53", "78", "91", "12"];
var min= smallestNum[0];
for (var i = 0; i < smallestNum.length; i++) {
   if (min>smallestNum[i]) {
      min=smallestNum [i];
   }  
}document.write("<br>Array items: " + "  "+ smallestNum + "<br>The Smallest Number is " +  min + "<br><br>");

// .....................................End......................................................

// 10. Write a program to print multiples of 5 ranging 1 to 
// 100.


 
for (var  rang = 5; rang <= 100 ; rang+=5) { 

   document.write(rang + " ," )
}


// .....................................End...............................................
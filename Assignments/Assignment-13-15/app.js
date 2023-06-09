
// ASSIGNMENT  13-15 ********************ARRAYS*********************

// TASK NO 1. Declare an empty array using JS literal notation to store
// // student names in future.

var studentName =[]

// .............................................End............................................................

// 2. Declare an empty array using JS object notation to store
// student names in future.

var myArray = new Array();

// ...................................................End................................................................

// //TASK NO 3. Declare and initialize a strings array.

var strArr =["laptop","mobile","cable" ,"fan", "chair","button"]


// .............................................End............................................................


// //  TASK NO 4. Declare and initialize a numbers array.

var  numArr= [1,2,45, 76,90,3,5,2,568,23,33];

// .............................................End............................................................
// 

// // TASK NO 5. Declare and initialize a boolean array.

var booleanArray=[false ,true ];

// .............................................End............................................................


// // TASK NO 6. Declare and initialize a mixed array.

var mixedArray=["laptop",90,3,false,"mobile",5,2,true ];


// .............................................End............................................................


// / TASK NO 7. Declare and Initialize an array and store available 
// education qualifications in Pakistan (e.g. SSC, HSC, BCS, 
// BS, BCOM, MS, M. Phil., PhD). Show the listed 
// qualifications in your browser like:

document.write("<h3><br>Qualifications:</br></h3>");

var educationInPakArr = ['1) SSC<h4>','2) HSC<h4>','3) BSC<h4>','4) BS<h4>','5) BCOM<h4>','6) MS<h4>','7) M.Phill<h4>','8) PhD<h4><br>'];
document.write(educationInPakArr[0]);
document.write(educationInPakArr[1]);
document.write(educationInPakArr[2]);
document.write(educationInPakArr[3]);
document.write(educationInPakArr[4]);
document.write(educationInPakArr[5]);
document.write(educationInPakArr[6]);
document.write(educationInPakArr[7]);

// .............................................End............................................................


// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students. 
// Assume that total marks are 500 for each student, display 
// the scores & percentages of students like:

var stuArr = ['Michael','John','Tony'];

var stuScore = ['320','230','480'];

var perStu1 = 320 / 500 * 100;

var perStu2 = 230 / 500 * 100;

var perStu3 = 480 / 500 * 100;

// console.log(percentage1);
// console.log(percentage2);
// console.log(percentage3);

document.write(" Score of " + stuArr[0] + " is " + stuScore[0]+"." + " Percentage: " + perStu1 + "%"+"<br>");
document.write(" Score of " + stuArr[1] + " is " + stuScore[1]+"." + " Percentage: " + perStu2 + "%"+"<br>");
document.write(" Score of " + stuArr[2] + " is " + stuScore[2]+"." + " Percentage: " + perStu3 + "%" + "<br>");

// .............................................End............................................................

// 9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end 
// & add that color to the end of the array. Display the 
// updated array in your browser.
// c. Add two more color to the beginning of the array. 
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color 
// & color name. Then add the color to desired 
// position/index. . Display the updated array in your 
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser:

// // a. Ask the user what color he/she wants to add to the
// // // beginning & add that color to the beginning of the array.
// // // Display the updated array in your browser.

var colorNameArr = ['Green','Blue','White','Black','Red'];

document.write("<br><br>"+colorNameArr);

var userColorInput = prompt("Please enter what color you want to add at the beginning of the Array");

colorNameArr.unshift(userColorInput);

document.write("<br><br>"+colorNameArr);



// // b. Ask the user what color he/she wants to add to the end 
// // & add that color to the end of the array. Display the 
// // updated array in your browser.


var colorNameArr = ['Green','Blue','White','Black','Red'];

document.write("<br><br>"+colorNameArr);

var userColorInput = prompt("Please enter what color you want to add at the End of the Array");

colorNameArr.push(userColorInput);

document.write("<br><br>"+colorNameArr);

// // c. Add two more color to the beginning of the array. 
// // Display the updated array in your browser.

var colorNameArr = ['Green','Blue','White','Black','Red'];

document.write("<br><br>"+colorNameArr);

var userColorInput = prompt("Add two more color to the beginning of the Array ");

colorNameArr.unshift(userColorInput);

document.write("<br><br>"+colorNameArr);
// // 
// // d. Delete the first color in the array. Display the updated
// // array in your browser.

var colorNameArr = ['Green','Blue','White','Black','Red'];

document.write("<br><br>"+colorNameArr);

colorNameArr.shift();

document.write("<br><br>"+colorNameArr);

// // e. Delete the last color in the array. Display the updated
// // array in your browser.


var colorNameArr = ['Green','Blue','White','Black','Red'];

document.write("<br><br>"+colorNameArr);

colorNameArr.pop();

document.write("<br><br>"+colorNameArr);


// // f. Ask the user at which index he/she wants to add a color 
// // & color name. Then add the color to desired 
// // position/index. . Display the updated array in your 
// // browser.


var colorNameArr = ['Green','Blue','White','Black','Red'];

document.write("<br><br>"+colorNameArr);

var indexInput = +prompt("which index you want to add color & color name");

var addColor = prompt("Add color name to desired index position of the Array");

colorNameArr.splice(indexInput-1,0,addColor);

 document.write("<br><br>"+colorNameArr);

// // g. Ask the user at which index he/she wants to delete
// // color(s) & how many colors he/she wants to delete. Then
// // remove the same number of color(s) from user-defined
// // position/index. . Display the updated array in your
// // browser:

var colorNameArr = ['Green','Blue','White','Black','Red'];

document.write("<br><br>"+colorNameArr);

var indexInput = +prompt("which index you want to delete color name");

var deleteColor = +prompt("how many colors you want to delete");

colorNameArr.splice(indexInput,deleteColor);

 document.write("<br><br>"+colorNameArr);


//  .............................................End............................................................


//  10. Write a program to store student scores in an array & 
// sort the array in ascending order using Array’s sort 
// method.

var stuScore = ['320','230','480','120'];

 stuScore.sort();

document.write("<br><br><h2>"+ " Scores of Students :" + " 320,230,480,120 " + " <br> "+ " Ordered Scores of Students :"+ stuScore);


// .............................................End............................................................

// 11. Write a program to initialize an array with city names. 
// Copy 3 array elements from cities array to selectedCities 
// array:

var cityNames =['Karachi','Lahore','Islamabad','Quetta','Peshawar']

var copyCityNames = cityNames.slice(2,4);

document.write("<br><br>"+" Cities list:<br>" + cityNames + "<br><br>"+ "Selected Cities List:" + "<br>"+copyCityNames );



// .............................................End............................................................

// 12. Write a program to create a single string from the 
// below mentioned array:

var arr = ["“This ”", "“ is ”", "“ my ”", "“ cat”"];

// (Use array’s join method):

var strArr = ["This ", " is ", " my ", " cat"];

 var newArr = strArr.join();

 document.write("<br><br><h1>Array:<br>" + strArr + " <br>"+"<br>String:<br>" +"This is my cat <br> <br>");

//  .............................................End............................................................


//  13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they 
// were stored. (FIFO-First In First Out)

var newArr = ['keyboard','Mouse','Printer','Monitor'];

document.write("Devices: <br>" + newArr + "<br><br>");

var fifo1 = newArr.shift();

document.write("Out: <br>" + fifo1 + "<br>");

var fifo2 = newArr.shift();

document.write("Out: <br>" + fifo2 + "<br>");

var fifo3 = newArr.shift();

document.write("Out: <br>" + fifo3 + "<br>");

var fifo4 = newArr.shift();

document.write("Out: <br>" + fifo4 + "<br><br>");

// ..............................................End..........................................................

// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last InFirst Out)


var arr = ['keyboard','mouse','printer','monitor'];

document.write("Devices: <br>" + arr + "<br><br>");

var lifo1 = arr.pop();

document.write("Out: <br>" + lifo1 + "<br>");

var lifo2 = arr.pop();

document.write("Out: <br>" + lifo2 + "<br>");

var lifo3 = arr.pop();

document.write("Out: <br>" + lifo3 + "<br>");

var lifo4 = arr.pop();

document.write("Out: <br>" + lifo4 + "<br><br>");


// 15. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array. 
//     Display the following dropdown/select menu in your 
//     browser using document.write() method:


var phone = ['Apple','Samaung','Motorolla','Nokia','Sony', 'Haier'];

document.write("<select>" 
+ "<option value = 'phone[0]'> DropMenu </option>"
+ "<option value = 'phone[1]'> Apple</option>"
+ "<option value = 'phone[2]'> Samsung</option>"
+ "<option value = 'phone[3]'> Motorolla</option>"
+ "<option value = 'phone[4]'> Nokia</option>"
+ "<option value = 'phone[5]'> Sony</option>"
+ "<option value = 'phone[6]'> Haier</option>" 
+ "</select>");

// ...........................................End.................................................


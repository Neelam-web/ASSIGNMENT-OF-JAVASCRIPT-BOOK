//1. Write a custom function power ( a, b ), to calculate the value of 
//a raised to b.

function power(a, b) {
    return Math.pow(a, b);
  }
  document.write(power(2, 3)); 

// ...............................................End.................................................................

//2. Any year is entered through the keyboard. Write a function to 
//determine whether the year is a leap year or not.
//Leap years ..., 2012, 2016, 2020, …


function leapYear (year){
return (year % 400 == 0) ? (year % 400 == 0) : (year % 100 == 0)
}
document.write(leapYear(2023))

// ..................................................End..............................................................

//3. If the lengths of the sides of a triangle are denoted by a, b, and 
// /c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
//where, S = ( a + b + c ) / 2
//Calculate area of triangle using 2 functions

function triangleS(a, b, c) {
    return (a + b + c) 
  }
  
  function triangleArea(a, b, c) {
    var s = triangleS(a, b, c);
    var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
  }
  document.write(triangleArea(6, 8, 5)); 

// ......................................................End.......................................................


//4. Write a function that receives marks received by a student in 3 
//subjects and returns the average and percentage of these
//marks. there should be 3 functions one is the mainFunction 
//and other are for average and percentage. Call those functions 
//from mainFunction and display result in mainFunction.


function mainFunction() {
  var marks = [];
  marks[0] = +prompt("Enter marks for subject 1:");
  marks[1] = +prompt("Enter marks for subject 2:");
  marks[2] = +prompt("Enter marks for subject 3:");
document.write("English: "+marks[0]+"<br>")

document.write("urdu: "+marks[1]+"<br>")


document.write("Math: "+marks[2]+"<br>")

var result = marks[0]+marks[1]+marks[2];

document.write("TOTAL MARKS: "+result+ "<br>")

  var avg = averageFunction(marks);
  var per = percentageFunction(marks);
  document.write("Average marks: " +avg+"<br>");
  document.write("Percentage: " +per+"%");
}

function averageFunction(marks) {
  var total = marks[0] + marks[1] + marks[2];
  var avg = total / marks.length;
  return avg;
}

function percentageFunction(marks) {
  var total = marks[0] + marks[1] + marks[2];
  var per = (total / (marks.length * 100)) * 100;
  return per;
}
mainFunction();



//7. Write a function with switch statement to count the number of 
//occurrences of any two vowels in succession in a line of text. 
//For example, in the sentence


function countVowelPairs(text) {
  var count = 0;
  for (var i = 0; i < text.length - 1; i++) {
    var chara1 = text.charAt(i);
    var chara2 = text.charAt(i + 1);
    switch (chara1) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        switch (chara2) {
          case 'a':
          case 'e':
          case 'i':
          case 'o':
          case 'u':
            count++;
            break;
        }
        break;
    }
  }
  return count;
}
var text = "Pleases read this application and give me gratuity";
var count = countVowelPairs(text);
console.log(count); 


//8. The distance between two cities (in km.) is input through the 
//keyboard. Write four functions to convert and print this 
//distance in meters, feet, inches and centimeters.



function kmToMeters(km) {
  return km * 1000;
}

function kmToFeet(km) {
  return km * 3280.84;
}

function kmToInches(km) {
  return km * 39370.1;
}

function kmToCentimeters(km) {
  return km * 100000;
}

var km = 100;
var meters = kmToMeters(km);
var feet = kmToFeet(km);
var inches = kmToInches(km);
var centimeters = kmToCentimeters(km);

console.log("km " +km+" = " +meters+" meters");
console.log("km " +km +"= "+feet+ " feet");
console.log("km " +km+ "= "+inches+" inches");
console.log("km "+km + "=" +centimeters+ "centimeters");



//10. A cashier has currency notes of denominations 10, 50 and 
//100. If the amount to be withdrawn is input through the 
//keyboard in hundreds, find the total number of currency notes 
//of each denomination the cashier will have to give to the 
//withdrawer.



// function CurrencyNotesCalculator {
//   public static void main(String[] args) {
//       Scanner scanner = new Scanner(System.in);
      
function CurrencyNotesCalculator () {
    var scanner = prompt("Enter the amount to be withdrawn in hundreds: ");
      var amountInHundreds = scanner.nextInt();

      
      var numHundreds = amountInHundreds;
      var numFifties = 0;
      var numTens = 0;
      
      while (numHundreds > 0) {
          if (numHundreds >= 5) {
              numFifties = numFifties + 1;
              numHundreds = numHundreds - 5;
          } else if (numHundreds >= 2) {
              numTens = numTens + 1;
              numHundreds = numHundreds - 2;
          } else {
              numTens = numTens + 1;
              numHundreds = numHundreds - 1;
          }
      }
      
      document.write("Number of 100 Rs. notes: %d%n", amountInHundreds);
      document.write("Number of 50 Rs. notes: %d%n", numFifties * 5);
      document.write("Number of 10 Rs. notes: %d%n", numTens * 10);
      
      scanner.close();
  }




// }
// }
// Enter the amount to be withdrawn in hundreds: 23
// Number of 100 Rs. notes: 23
// Number of 50 Rs. notes: 0
// Number of 10 Rs. notes: 10

//   Number of 100 Rs. notes: 23
//   Number of 50 Rs. notes: 0
//   Number of 10 Rs. notes: 10











// 1. Create a signup form and display form data in your web 
// page on submission.

function myData(e){
  e.preventDefault()
var firstName=document.getElementById('fname').value;
var lastname=document.getElementById('lname').value;
var gender=document.getElementById('gender').value;

var country=document.getElementById('country').value;
var phoneNo=document.getElementById('phoneNo').value;
var password=document.getElementById('pwd').value;

var email=document.getElementById('email').value;
document.write("Name: "+ fname+" "+lname+"<br> Gender: "+gender+"<br> Country: "+country+"<br> Phone No.:  "+phoneNo+"<br>  Email: "+email+"<br> Password:"+password)

}

// ...................................................End..............................................................
// TASK 2

function readmore(){
document.getElementById("para").innerHTML+="Producut Detail: Maroon raw silk lehanga with heavily embroidery froint and back paired with shirt and dopata chifoon the perfect bridal look."
console.log();
}

// ..........................................................End.................................................................
// 



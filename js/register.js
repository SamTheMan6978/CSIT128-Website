document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var membershipType = document.getElementById("membershipType").value;
    alert("Registration successful!");
    document.getElementById("registrationForm").reset();
  });
var pass1 = document.getElementById("password");
var pass2 = document.getElementById("confirm password");
function confirmPassword(){
  if(pass1!=pass2){
    alert("Passwords do not match!");
  }
  else{
    alert("Passwords match!");
  }
}



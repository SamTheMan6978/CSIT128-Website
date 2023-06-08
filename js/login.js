document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (email === "someone@example.com" && password === "password") {
      alert("Login successful!");
    } else {
      alert("Invalid username or password");
    }
  });

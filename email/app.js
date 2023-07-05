document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
   
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("userNameError").textContent =  "" ;
    document.getElementById("mobileNoError").textContent =  "" ;


    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const userName = document.getElementById("userName").value;
    const mobileNo = document.getElementById("mobileNo").value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      document.getElementById("emailError").textContent = "Invalid email address";
      return;
    }

   
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (!passwordRegex.test(password)) {
      document.getElementById("passwordError").textContent = "Invalid password";
      return;
    }

    const nameRegex = /^[A-Za-z\s]+$/;
      if (!nameRegex.test(userName)) {
        document.getElementById("userNameError").textContent = "Invalid name";
        return;
      }

      const mobileRegex = /^\d{10}$/;
      if (!mobileRegex.test(mobileNo)) {
        document.getElementById("mobileNoError").textContent = "Invalid mobile number";
        return;
      }

    console.log("Form submitted successfully!");
});

    

document.querySelector("#btn").addEventListener('click',()=>{
    validateNameInput();
    validatePasswordInput();
    validateEmailInput();
    validatePhnoInput();

})





function validateNameInput(){debugger;
let userName = document.getElementById("userName").value.trim();
if(userName == ""){
   let invalidName= document.querySelector("#userNameError");
   invalidName.innerHTML ="Please enter your username";
}
if(userName !=""){
var validUser = /^[a-zA-Z0-9]{6,15}$/;
if(validUser.test(userName)){
    document.getElementById("userName").classList.add("valid")
    document.getElementById('userNameError').innerText = `Valid user Name`;
    inputStatus = true;
    }else{
    document.getElementById("userName").classList.add("invalid")
    document.getElementById('userNameError').innerText = 'Username must be 5-15 characters';
    inputStatus = false;
    }

}

    
}  

    function validateEmailInput(){
        let email = document.getElementById("email").value.trim();
        if(email == ""){
           let invalidEmail= document.querySelector("#emailError");
           invalidEmail.innerHTML ="Please enter your email";
        }
       if(email !=""){
        var validEmail =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
        if(validEmail.test(email)){
            
            document.getElementById("email").classList.add("valid")
            document.getElementById('emailError').innerText = `Valid Email`;
            inputStatus = true;
            }else{
            document.getElementById("email").classList.add("invalid")
            document.getElementById('emailError').innerText = 'Email must be a valid address e.g me@mydomain.com';
            inputStatus = false;
            }
    
       }
    }
    
    function validatePasswordInput(){
        let password = document.getElementById("password").value.trim();

       if(password == ""){
         let invalidpassword= document.querySelector("#passwordErrorr");
         invalidpassword.innerHTML ="Please enter your password";
        }  
       if(password !=""){
       var validpassword =  /^[a-zA-Z0-9]{8,20}$/
       if(validpassword.test(password)){
     
        document.getElementById("password").classList.add("valid")
        document.getElementById('passwordError').innerText = `Valid Password`;
        }else{
        document.getElementById("password").classList.add("invalid")
         document.getElementById('passwordError').innerText = 'Password must be alphanumeric (@,_ and - are also allowed)& must be 8-20 characters';
     inputStatus = false;
     }

}
}
     
    function validatePhnoInput(){
    let  mobileNo = document.getElementById("mobileNo").value.trim();
      
    
        if(mobileNo == ""){
           let invalidno= document.querySelector("#mobileNoError");
           invalidno.innerHTML ="Please enter your Mobile no";
        }
       if(mobileNo !=""){
        var validmobileNo =  /^[6-9][0-9]{9}$/
        if(validmobileNo.test(mobileNo)){
            
            document.getElementById("mobileNo").classList.add("valid")
            document.getElementById('mobileNoError').innerText = `Valid mobile no`;
            inputStatus = true;
            }else{
            document.getElementById("mobileNo").classList.add("invalid")
            document.getElementById('mobileNoError').innerText = 'Mobile No. must be a valid Indian telephone number (10 digits)';
            inputStatus = false;
            }
    
       }
    }
      

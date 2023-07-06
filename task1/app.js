var userName = document.getElementById('username');
var password = document.getElementById('password');

userName.addEventListener('keyup',inputValidation);

function inputValidation(){
  console.log('hi')
  if(userName.value.trim() == ''){
    
    document.querySelector("#username").classList.remove("success");
        
    document.querySelector("#username").classList.add("error");
  
    document.getElementById("usernameError").innerHTML = 'username should be entered';
  }else if(userName.value.length < 5) {

        document.querySelector("#username").classList.remove("success");
        
        document.querySelector("#username").classList.add("error");
       
       document.getElementById("usernameError").innerHTML = 'username should be 5-15 character';
  }else{
        
        document.querySelector("#username").classList.remove("error","success");
        
        document.querySelector("#username").classList.add("success");
        
    
      if (password.value.trim() == '') {
      
        document.querySelector("#password").classList.remove("success");
        
        document.querySelector("#password").classList.add("error");
       
        document.getElementById("passwordError").innerHTML = 'password should be 8 character';
        document.getElementById("passwordErrror").innerHTML = '';
  
      }else if (password.value.length < 8 ){
        
        document.querySelector("#password").classList.remove("error","success");
        
        document.querySelector("#password").classList.add("success");
      }else{
    
    document.querySelector("#password").classList.remove("error","success");
    
    document.querySelector("#password").classList.add("success");
    }
  }
}
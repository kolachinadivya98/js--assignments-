function calculate(){
    var amount = document.getElementById('amount').value;
    var people = document.getElementById('people').value;
    
    if (amount <= 0){
    document.getElementById('amount').style.border = "1px solid red";
    document.getElementById('error').innerHTML = "Plese enter a valid value" ;
    
    }else{
        document.getElementById('amount').style.border = "2px solid green";
    }

    if (amount <= 0){
        document.getElementById('people').style.border = "1px solid red";
        document.getElementById('error').innerHTML = "Plese enter a valid value" ;
        
        }else{
            document.getElementById('people').style.border = "2px solid green";
        }
    



    let total = (amount / people).toFixed(1);
    document.getElementById("result").innerHTML = total;


}


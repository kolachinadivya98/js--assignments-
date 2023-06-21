function calculateSum() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var result = num1 + num2;
    document.getElementById("result").innerText = "Result: " + result;
  }

  function generateRandomNumbers() {
    var num1 = Math.floor(Math.random() * 10000) + 1; 
    var num2 = Math.floor(Math.random() * 15000) + 1;
    document.getElementById("num1").value = num1;
    document.getElementById("num2").value = num2;
  }
function taxCalculator(name , salary){
    let taxpayername = document.getElementById("name").value;
    let taxpayersalary = document.getElementById("salary").value;

    if(taxpayersalary <= 300000){
     document.getElementById("noTax").innerHTML = `${taxpayername}! you are tax free employee`;
     document.getElementById("tenpercent").value = "0";
     document.getElementById("twentypercent").value = "0" ;
     document.getElementById("totDeduc").value = `No tax deduction`
    }else if(taxpayersalary <= 600000){
        let deductionTen = (taxpayersalary - 3000000)*0.1;
        document.getElementById("tenpercent").value = deductionTen;
        document.getElementById("twentypercent").value = "0";
        document.getElementById("totDeduc").value = deductionTen;
    }else if(taxpayersalary >= 600000){
        let deduction1 = 30000;
        let deduction2 = (taxpayersalary - 600000)*0.2
        document.getElementById("twentypercent").value = deduction2;
        document.getElementById("tenpercent").value = deduction1;
        let totalTax = deduction1 + deduction2;
        console.log(totalTax);
        document.getElementById("totDeduc").value = totalTax;
    }
}
// write a function named multiply that takes two numers as arguments and returns their product
function multi(sum1 , sum2){
    return sum1 * sum2;
}
 
var result = multi (10,8)
console.log(result);
// write a function named reverseString that takes a string as an argument and returns the reversed string
function reverseString(str){
    let newStr = "";
    for(let i = str.length - 1; i >= 0; i--){
        newStr += str[i];
        }
        return newStr;
        }
        console.log(reverseString("hello"));



function isEven(number){
   if(number % 2 == 0){
    console.log(true)
   }else{
    console.log(false)
   }
}
isEven(5)
isEven(4)
// Write a function named largestNumber that takes an array of numbers as an argument and returns the largest number in the array.
function largestNumber(num1){
     if(num1.length == 0){
        return null;
     }
     let largest = num1[0];
     for(let i = 1; i < num1.length; i++){
        if(num1[i] > largest){
            largest = num1[i]
            }
}
return largest;
}
console.log(largestNumber([8,10,9,16,25]));

// Write a function named factorial that takes a number as an argument and returns the factorial of that number.
function factorial(num){
    if (num === 0 || num === 1){
    return 1;
}
  return num * factorial(num-1);
}
console.log(factorial(2));
// Write a function named capitalize that takes a string as an argument and returns the string with the first letter of each word capitalized.
function capitalize(str){
    let newStr = "";
    let words = str.split(" ");
    for(let i = 0; i < words.length; i++){
        newStr += words[i][0].toUpperCase() + words[i].slice(1) + " ";
        }
        return newStr;
        }
        console.log(capitalize("hello world"));
// Write a function named average that takes an array of numbers as an argument and returns the average of those numbers.
function average(num){

    if(num.length === 0){
        return 0
    }
    let sum = 0;
    for(let i = 0; i < num.length; i++){
        sum += num[i];
        }
        return sum / num.length;
        }
        console.log(average([5,8,9,45,16]));
// Write a function named add that takes any number of arguments and returns their sum.
function add(){
    let sum = 0;
    for(let i = 0; i < arguments.length; i++){
        sum += arguments[i];
        }
        return sum;
        }
        console.log(add(6,8,7,9,10,15,13));
//Write a function named isPalindrome that takes a string as an argument and returns true if the string is a palindrome, and false if it is not.
function isPalindrome(str){
    let newStr = str.toLowerCase()
    let newStr2 = newStr.split("").reverse().join("");
    if(newStr === newStr2){
        return true;
        }
        return false;
        }
        console.log(isPalindrome("racecar"));
        






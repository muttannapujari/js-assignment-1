//first question
var str1 = 'Today is';
var str2 = ' a beautiful day';
var str3 = ' In Hawali. ';
result = str1 + str2 + str3;
console.log(result);


//second questions

var  d=prompt("enter the alaphbet")
switch(d)
{
case 'a':
case 'e':
case 'i':
case 'o':
case 'u':
case 'A':
case 'E':
case 'I':
case 'O':
case 'U':
console.log("consonant")
break;
default: 
console.log("not alaphbet")
}



// third questions

const num1 = parseFloat(prompt("first number :"));
const num2 = parseFloat(prompt("second number :"));
const operator=prompt("enter operator: +, -, *, / ");
switch(operator){
case "+":
var result = num1 + num2;
alert(result);
break;

case "-":
var result = num1 - num2;
alert(result);

break;

case "*":
var result = num1 * num2;
alert(result);

break;

case "/":
var result = num1 / num2;
alert(result);

break;
default:
alert ("Enter valid operator");

}

//queston 4

const a = prompt("first side ");
const b = prompt("second side ");
const c = prompt("third side ");

if(a == b && b == c && c == a) {
	console.log("the equilateral triangle");
}
if (a == b || a == c || b == c){
	console.log("the isosceles triangle");
}

if (a != b != c) {
	console.log("the scalene triangle");
}



//question 5

units = 300
bill = 0
if(units <= 50){
  bill  = units * 0.50;
}
else if(units <= 150){
  bill = 50 * 0.5 + (units-50) * 0.75;
}
else if(units <= 250){
  bill = 50 * 0.5 + 100*0.75 + (units-150) *1.2;
}
else if(units > 250){
  bill = 50 * 0.5 + 100*0.75 + 100 * 1.20 + (units-250) *1.5;
  bill = bill + bill *0.2;
}

console.log(bill);





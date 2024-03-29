// Q1
var number = 3.45214;
document.write("number: "+number);
document.write("<br>round off value: "+Math.round(number));
document.write("<br>floor value: "+Math.floor(number));
document.write("<br>ceil value: "+Math.ceil(number));

// Q2
var number1 = -2.673;
document.write("<br><br>number: "+number1);
document.write("<br>round off value: "+Math.round(number1));
document.write("<br>floor value: "+Math.floor(number1));
document.write("<br>ceil value: "+Math.ceil(number1));

// Q3
var number2 = -4
var absoluteValue = Math.abs(number2);
document.write("<br><br>The absolute value of "+ number2 +" is " +absoluteValue);
 
// Q4
var number3 = 5
var absoluteValue1 = Math.abs(number3);
document.write("<br>The absolute value of "+ number3 +" is " +absoluteValue1);

var diceValue = Math.floor(Math.random() * 6) + 1;

document.write("<br><br>random dice value:" + diceValue); 


// Q5
document.write("<br><br>")
var headUser = prompt("Enter your name");
var tailUser = prompt("Enter your name");

var toss = Math.random() * 2;

var convert = Math.floor(toss);

if (convert === 0) {
  document.write(headUser, " win the toss");
} else {
  document.write(tailUser, " win the toss");
}

// Q6
var randomNumber = Math.floor(Math.random() * 100) + 1;
document.write("<br><br>random number between 1 and 100: 84"+randomNumber)


// Q7
var userWeight = prompt("Please enter your weight (e.g., 50, 50kgs, 50.2kgs, 50.2kilograms):");

document.write("<br><br>the weight of user is " + userWeight + " kilograms")

// Q8
var secretNumber = Math.floor(Math.random() * 10) + 1;
var userGuess = prompt("Enter a number between 1 and 10:");
if(parseInt(userGuess) === secretNumber) {
  alert("Congratulations! You guessed the secret number.");
} else {
  alert("Try again!");
}


// Chapter 26 (Rounding Numbers)
// Q1
var number = 3.6;
var roundedNumber = Math.round(number);
console.log(roundedNumber);

// Q2
var origNum = 3.2;
var roundNum = Math.ceil(origNum);
console.log(roundNum);

// Q3
var origNum = 3.8;
var roundNum = Math.floor(origNum);
console.log(roundNum);

// Q4
var originalNumber = 2.5;
var roundedNumber = Math.round(originalNumber);
console.log(roundedNumber);

// Q5
var roundedNumber = Math.round(0.5 - Number.EPSILON);
console.log(roundedNumber);


// Chapter 27 (Random Numbers)
// Q1
var randomNumber = Math.random() * 50;
var numberInRange = Math.floor(randomNumber) + 1
console.log(numberInRange); 

// Q2
var randomNumber = Math.random();
console.log(randomNumber);
// Q3
// var randomNumber = Math.random();
// var diceFace = Math.floor(randomNumber * 6) + 1;
// console.log(diceRoll)
// Q4
var toss = Math.random() * 2;
var convert = Math.floor(toss);
if (convert === 0) {
  console.log(headUser, " win the toss");
} else {
  console.log(tailUser, " win the toss");
}
// Chapter 28, 29 (Converting Strings)
// Q1
var stringValue = "123";
var intValue = +stringValue
console.log(intValue)

// Q2
// var stringValue = "123";
// var intValue = stringToInt(stringValue);
// console.log(intValue);
// Q3
var stringValue = "123.45";
var floatValue = parseFloat(stringValue);
console.log(floatValue);

// Q4
var str1 = "123.45";
console.log(str1); 

var str2 = "123";
console.log(str2); 

// var str3 = "abc";
// console.log(str3);
// Q5
// var num = 123;
// var str = num.toString(num);
// console.log(str);
// Q6
// var number = 42;
// var string = number.toString(number);
// console.log(string);
// Q7
var decimalString = "3.14";
var integer = Math.trunc(+decimalString);
console.log(integer);



// Chapter 30 (Controlling the length of decimals)
// Q1
var num = 3.14159265;
var newNum = num.toFixed(4);
console.log(newNum);

// Q2
var num = 3.14159;
num = Number(num.toFixed(2));
console.log(num);
// Q3
 if (num.toFixed(2).length > 4){}

// Q4
var num = 3.14159265359;
alert(num.toFixed(2));












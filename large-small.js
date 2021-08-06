let number1 = 20;
let number2 = 40;
let number3 = 10;

/// Two - Condition
console.log("");
console.log("Two - Condition");
if (number1 > number2) {
  console.log("Bigger :", number1);
} else {
  console.log("Bigger :", number2);
}

/// Two - function
/* console.log("");
console.log("Two - function");

function bigger(number1, number2) {
  if (number1 > number2) {
    return number1;
  } else {
    return number2;
  }
}

var result = bigger(20, 40);
console.log(result); */

/// Three - Condition
console.log("");
console.log("Three - Condition");

if (number1 > number2 && number1 > number3) {
  console.log(number1);
} else if (number2 > number1 && number2 > number3) {
  console.log(number2);
} else {
  console.log(number3);
}

/// Three - Function
console.log("");
console.log("Three - Function");

function bigger(number1, number2, number3) {
  if (number1 > number2 && number1 > number3) {
    return number1;
  } 
  else if (number2 > number1 && number2 > number3) {
    return number2;
  } 
  else {
    return number3;
  }
}

var result = bigger(20,40,10);
console.log(result);

/// Math Max

console.log("");
console.log("Math Max");

var output = Math.max(number1,number2,number3);
console.log(output);
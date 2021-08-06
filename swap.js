// swap with temp \\

console.log('');
console.log('Before Swapping')


let first = 10;
let second = 20;

console.log('1st Number :',first);
console.log('2nd Number :',second);

var temp = first;
first = second;
second = temp;

console.log('');
console.log('After Swapping')


console.log('1st Number :',first);
console.log('2nd Number :',second);

// Destructuring

console.log('');
console.log('Destructuring');

[first, second] = [second, first];
console.log('1st Number :',first);
console.log('2nd Number :',second);

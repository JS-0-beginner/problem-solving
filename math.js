/*
console.log('');

var negativeNumber = - 50;
var number = 21.5;

// absolute
var mynumber = Math.abs(negativeNumber);
console.log(mynumber,'absolute');

// ceiling
var ceilNumber = Math.ceil(number);
console.log(ceilNumber,'ceiling');

// floor
var floorNumber = Math.floor(number);
console.log(floorNumber,'floor');

// round
var roundNumber = Math.round(number);
console.log(roundNumber,'round');
*/

// random
/* 
for (i = 0; i <= 5; i++) {
  const output = Math.random() * 10;
  const rounded = Math.round(output);
  console.log(rounded);
}
 */

// remove duplicates from random numbers

console.log('');
console.log('If any duplicate comes it will reveal itself.');
console.log('');

const selected = [];
for (i = 0; i <= 10; i++) 
{
  const random = Math.random() * 100;
  const picked = Math.round(random);
  // console.log(selected);
  
  if(selected.indexOf(picked)==-1)
  {
    selected.push(picked);
  }
  else
  {
    // console.log('');
    console.log('Here,');

    console.log(selected);

    console.log('Duplicate :',picked);
    console.log('');
  }
}
console.log('');
console.log('Here are the selected ones, without duplicates.');
console.log(selected);
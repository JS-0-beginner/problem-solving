/// sum of an array \\\

var numbers = [34, 63, 61, 75, 95, 13, 25];

/* 
for(let i = 0; i<numbers.length; i++)
{
    var elements = numbers[i];
    console.log(elements);
} 
*/

/* 
var sum = 0;
for(let i = 0; i<numbers.length; i++)
{
    var elements = numbers[i];
    sum = sum + elements;
    
} 
console.log(sum); 
*/

function arraysum(numbers)
{
    var sum = 0;
for(let i = 0; i<numbers.length; i++)
{
    var elements = numbers[i];
    sum = sum + elements;
    
} 
return sum;
}

var sum = arraysum(numbers);
console.log('Sum of the given Array');
console.log(sum);
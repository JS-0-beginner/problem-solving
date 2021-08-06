/// node fibonacci-function.js \\\

function fibonacciSeries(numbers) 
{

  if(typeof numbers != 'number')
  {
    return 'Please give a valid number';
  }
  else if(numbers < 2)
  {
    return 'Please enter a positive number greater than 1';
  }

  const fibonacci = [0, 1];

  for (let i = 2; i <numbers; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }
  return fibonacci;
}

var fibonacci = fibonacciSeries(-3);
console.log(fibonacci);



/// array-largest-elements.js \\\

/// for positive numbers

/* 
function largeElement(numbers)
{
    var largest = 0;
    for(let i=0; i<numbers.length; i++)
    {
        var elements = numbers[i];

        if(elements>largest)
        {
            largest = elements
        }

    }
    return largest;
}

var largest = largeElement([34, 63, 61, 75, 95, 13, 25]);
console.log(largest);
 */

/// for negative numbers


function largeElement(numbers)
{
    var largest = numbers[0];
    for(let i=0; i<numbers.length; i++)
    {
        var elements = numbers[i];

        if(elements>largest)
        {
            largest = elements
        }

    }
    return largest;
}


var largest = largeElement([-96, -34, -63, -61, -75]);
console.log(largest);

/// array-smallest-element.js \\\

/// for positive numbers


function smallestElement(numbers)
{
    var smallest = numbers[0];
    for(let i=0; i<numbers.length; i++)
    {
        var elements = numbers[i];

        if(elements<smallest)
        {
            smallest = elements
        }

    }
    return smallest;
}

var smallest = smallestElement([34, 63, 61, 75, 95, 13, 25]);
console.log(smallest);


/// for negative numbers
/* 
function smallestElement(numbers)
{
    var smallest = numbers[0];
    for(let i=0; i<numbers.length; i++)
    {
        var elements = numbers[i];

        if(elements<smallest)
        {
            smallest = elements
        }

    }
    return smallest;
}


var smallest = smallestElement([-96, -34, -63, -61, -175]);
console.log(smallest);
 */
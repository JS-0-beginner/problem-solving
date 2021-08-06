/// fibonacci series \\\
/* 
0, 1, 1, 2, 3, 5, 8, 13, 21;

1 = 1 + 0
2 = 1 + 1
3 = 2 + 1
5 = 3 + 2
8 = 5 + 3
13 = 8 + 5
21 = 13 + 5

nth = (n-1)th + (n-2)th

*/

const fibonacci=[0,1];


for(let i = 2; i<8; i++)
{
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];

/*     
    Explaination:

    [0, 1, 1, 2, 3, 5, 8, 13, 21]

    Suppose,

    4th = (4-1)th + (4-2)th

    4th         =  3th      +  2th

    (0to3)      = (0to2)    + (0to1)

    3no.index   = 2no.index + 1no.index

        (2)     =   1       +       1
 */

}

console.log(fibonacci);

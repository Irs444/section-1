let num = [ 31, 654, 350, 386, 573, 76, 23];

for( let i=0; i<num.length; i++)
{
    if( num[i] %2 !=0)
    {
        console.log(num[i]);
    }
}

let newarr = [];
for( let n of num)
{
    if(n%2 !=0)
    {
        console.log(n);
        newarr.push(n);
    }
}
// console.log(newarr); 

let res = num.filter((n) => { return n%2 !=0} );
console.log(res);

let prices = [ '₹384/-', '₹3841/-', '₹3842/-', '₹3843/-'];

let numprices = prices.map( (p) => { return parseInt(p.slice(1, -2) ) } );

console.log(numprices);
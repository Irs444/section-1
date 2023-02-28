num =34;
if(num%2==0)
{
    console.log('even number');
    msg = "this should be global";
    var x = 'fuction scope';
    let y = 'block scope';
    const pi = 3.14;
    // pi = 2.13;
}
else{
    console.log('odd number');
}
console.log(msg);
console.log(x);
// console.log(y);
// console.log(pi);


let marks = 89;
if(marks > 90)
{
    console.log('Grade A');

}else if(marks > 70)
{
    console.log('Grade b');
}else if(marks >50)
{
    console.log('grade C');
}else if(marks < 30)
{
    console.log('Fail');
}

let mark = 289;
if(mark > 90  && marks <= 100)
{
    console.log('Grade A');

}else if(mark > 70  && mark <= 90)
{
    console.log('Grade b' );
}else if(mark >50  && mark <= 70)
{
    console.log('grade C' );
}else if(mark < 30 && mark >= 0)
{
    console.log('Fail');
}else{
    console.log('invalid mark');
}

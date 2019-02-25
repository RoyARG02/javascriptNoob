//data types: Numbers
/* Numeric values which may have floating point
format*/
var aNum=45;
var anotherNum=0.89;
var yetAnother=74423729;
console.log(aNum,anotherNum,yetAnother);

//symbolic numbers
/*MAX_VALUE: Largest number that can be represented in
             javaScript. (Any greater number is infinity)*/
console.log(Number.MAX_VALUE);
/*MIN_VALUE: Smallest number that can be represented in
             javaScript. (Any smaller number is zero)*/
console.log(Number.MIN_VALUE);

//infinity
console.log(23/0);      //divide by zero
console.log(Number.MAX_VALUE+1);    //Multiply by any >1 or add >0
//(-)Infinity
console.log(-5/0);      //divide by zero
console.log(Number.MAX_VALUE*(-3));    //Multiply by any <-1
//NaN: Not-a-Number
console.log(Math.sqrt(-3)); //unrepresentable

/*Safe Integer: A integer which cannot be a
round-off value of another integer*/

console.log('The largest Safe Integer is '+Number.MAX_SAFE_INTEGER);
console.log('The smallest Safe Integer is '+Number.MIN_SAFE_INTEGER);
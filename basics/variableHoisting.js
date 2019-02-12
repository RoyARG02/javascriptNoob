//variable hoisting
/*makes the referencing of undeclared 'var' variables
possible, in local scope, although initialized value is
not "hoisted"*/

console.log(foo);   //gives 'undefined'
var foo=123;

//in case of let and const, it gives "ReferenceError"
/*console.log(someData);
let someData='You shall not pass';
*/
/*for undeclared variables in functions/blocks, it is hoisted as
    a "global" variable, provided there is no declaration in
    the function/block*/
function bar(){
    num=399;
    {
        nested='Bruh';     //this also applies for nested functions/blocks
    }
}

bar();
console.log(num);   //gives 399
console.log(nested);    //gives 'Bruh'
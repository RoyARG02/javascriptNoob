/*'var', 'let' and 'const' are keywords used to 
define a variable in JavaScript. All of them do the same
functions, but have different behaviour*/

/*'var' defined variables have "global" scope(can be accessed anywhere in the program)
'let','const' defined variables have "block" scope(can be accessed ONLY in the block {...}
    in which they are defined)
additionaly, 'const' variables have to be assigned a value at declaration, which cannot be 
    further changed/modified */
var aNum=100;
const aConst='MEGALOVANIA';
{
    var VAR=22/7;
    let LET=0;
    const CONST=3.14159265;
}
//aConst='PAPYRUS'                //won't work
console.log('aNum= ',aNum);
console.log('aConst= ',aConst);
console.log('VAR= ',VAR);
//console.log('LET= ',LET);     //out of scope
//console.log('CONST= ',CONST); //out of scope
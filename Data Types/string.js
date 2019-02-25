//data types: strings
/*collection of characters enclosed by " " or ' '*/
var aString='2 plus 2 is four';
var anotherString="minus one that's three"; // ' enclosed by " "
var someString='"QUICK MATHS!!"';    // " enclosed by ' '
//string variables cannot be modified
aString[3]='k';
process.stdout.write(aString+'\n');


//some functions
//substr(<start>,<length>)  length is optional
//returns part of a string
var extract=someString.substr(3,7); //5 characters starting from '3rd' character of string
console.log(extract);
var three=anotherString.substr(10); //entire string from '10th' character
console.log(three);

//concat(<string>)  concatenates strings (similar to '+' operator)
var maths=aString.concat(anotherString);
console.log(maths);
var lyrics=maths+someString;
console.log(lyrics);
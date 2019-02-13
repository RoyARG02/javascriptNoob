//the order of precedence among
//variable declaration, function declaration and variable assignment
//is as follows:

//variable assignment > function declaration > variable declaration

someVar='String';         //hoisted to global

function someVar(){
    console.log('Function')
}

console.log('someVar is a type of '+typeof someVar);

var otherVar;

function otherVar(){
    console.log('otherFunction');
}

console.log('otherVar is a type of '+typeof otherVar);
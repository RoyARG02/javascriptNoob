//like variables, functions can also be hoisted:

message();

function message(){                     //hoisted
    console.log('This is a message!!');
}

//however, function expressions, either named
//or unnamed, cannot be hoisted

/*
alert();
hello('JavaScript');

var alert=function(){
    console.log('Will this work?');
}

var hello=function greet(name){
    console.log('Hello '+name);
}
*/
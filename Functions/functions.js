/*functions are used to break the entire code of the
program into "modules" which may/may not take some data
(called arguments) to produce a meaningful outcome*/

//functions are defined by "function" keyword

function add(x,y){  //function declaration(x,y are arguments)
    return x+y;     //'return' is used to give back the produced
                    //output/data to the calling instruction
                    //alongwith the control
}

console.log(add(3,8));

//function expressions
//these execute immediately when defined
//and assign the return value to some variable

//unnamed funtion expression
var subtract=function(x,y){
    return x-y;
}
console.log(subtract(10,7));

//named function expression
var multiply=function product(x,y){
    return x*y;
}
console.log(multiply(3,6));

//or through an object

var division={
    divide:function divide(x,y){
        if(y==0)
        return 'Zero Division Error';
        else
        return x/y;
    }
};
console.log(division.divide(90,6));
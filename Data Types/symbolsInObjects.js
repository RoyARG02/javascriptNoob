//use of symbols in objects
//symbols are used as a 'immutable(inaccessible)' property of an object
let height=Symbol();
var baggings = {
    name:'Frodo',
    [height]: 107,      //properties in objects are assumed as strings
                        //to define a symbol as property use '[ ]'
}
console.log(baggings);

//symbol property are skipped in for...in
for(let i in baggings){
    console.log(baggings[i]);
}

//although copying an object will also copy the symbol
var clone = Object.assign({},baggings);
console.log(clone);
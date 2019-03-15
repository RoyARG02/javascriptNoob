//global symbols
//even the description might be same, two symbols cannot be the same
//but sometimes it is desired to refer to the same symbol
//this is achieved by something called 'global symbols'

let sym = Symbol.for('The one and only');
let someSym = Symbol.for('Some other symbol');
let symAgain = Symbol.for('The one and only');
/*there is a 'global symbol registry' which has the global symbols used in
the script. When a symbol is defined using 'Symbol.for()' it checks
for any symbol having the same description and returns it. If not, a 
new symbol is created. */
console.log(sym == symAgain);

//the reverse application: getting the description/key using symbol
console.log(Symbol.keyFor(someSym));
console.log(Symbol.keyFor(sym));
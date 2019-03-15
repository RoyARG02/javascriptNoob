//data types: symbols
//represents a unique identifier
var aSym = Symbol();    //Symbols are initialized using Symbol()
console.log(typeof aSym);

//symbols usually contain a description/key
var Sym2 = Symbol('Just a Symbol');
//acccessing the description
console.log('Desc of Sym2 =' + Sym2.description);

//the symbols can't be printed as such as it is not a string
//thus a string conversion is required
console.log('Converting desc to string: ' + Sym2.toString());
console.log('typeof Sym2.toString(): ' + typeof Sym2.toString());

//even the description might be same, two symbols cannot be the same
let sym = Symbol('Just a Symbol');  //same description
console.log(sym == Sym2);

//symbols find common use in objects
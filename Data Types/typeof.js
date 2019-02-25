/*typeof keyword is used to find the 'type of' data a
variable holds*/

let aNum=420;
let aString='Yippie Ki-yay'
function aFunction(){
    console.log('aFunction() is running');
}
function Hobbit(str){
    this.name=str;
}
var Baggins=new Hobbit('Frodo');
console.log(aNum+' is a typeof '+typeof aNum);
console.log(aString +' is a typeof '+typeof aString);
console.log(aFunction(),' is a typeof '+typeof aFunction);
console.log(Baggins,' is a typeof '+typeof Baggins);

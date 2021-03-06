//An object is a collection of properties
//having an association between a property and a value
//An object can be defined in many ways:
//Creating an object by directly assigning property value
let android={
    os:'Android 9',
    name: 'Pie',
    API:28,
    year:2018,
}
console.log(android);

//accessing (and modifying) each of the property of the object
console.log(android.year);
android.year=2019;
android.name='Q';
android.os='Android 10'
android.API='Q';
console.log(android);

//creating an object by adding properties to an empty object
let language={};        //can be also done by language=new Object()
language.name='JavaScript';
language.intro=1995;
console.log(language);

//creating an object with the help of a function
function rect (a,b){
    this.length=a;
    this.width=b;
    this.perimeter=2*(a+b);
    this.area=(a*b);
    this.compare=function(){
        return (a>b)?'Length':'Width';
    }
}
let Rectangle=new rect(5,6);
console.log(Rectangle);

//defining an object through a function makes the function BEHAVE AS A CLASS,
//WITH THE OBJECTS defined as the INSTANCES of the class
let Rectangle2=new rect(10,4);
console.log(Rectangle2);
console.log(Rectangle.compare());
console.log(Rectangle2.compare());
//this type of functions are defined as FUNCTIONAL CLASSES
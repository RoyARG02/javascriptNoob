//there are three types of for loops
//the "C/C++" type for loop
for(var i=0;i<10;i++)
{
    process.stdout.write(i+" ");
}
process.stdout.write('\n');

//for iterating over an array/list
var list=[10,11,12,13,14,15,16,17,18,19];
for(let i of list)
{
    process.stdout.write(i+' ');
}
process.stdout.write('\n');

//for iterating over an object
var object={
    property1:100,
    property2:150,
    property3:200,
    property4:250,
    property5:300,
};
for(let i in object)
{
    process.stdout.write(i+" ");    //this prints object property only
    console.log(object[i]);    //this prints property value(process.stdout.write() takes string values only)
}
//there are two ways you can print to the standard output

console.log('This line is written through console.log()');
console.log('Notice that this function automatically breaks the line at the end');
//console.log() is generally used to print formatted output
console.log('%d is the next leap year after %d',2020,2016);
var name='Pewdiepie';
console.log('Subscribe to %s',name);

process.stdout.write('This line is written through process.stdout.write()');
process.stdout.write(' This function does not put a newline character at the end\n');
process.stdout.write('This function cannot be used to print formatted output\n');
process.stdout.write('%d is the next leap year after %d',2020,2016);    //doesn't work
console.log('\nconsole.log() is kind of a redeclaration of process.stdout.write');
console.log('alongwith a \'\\n\'');
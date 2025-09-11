console.log(a);
var a = 10;
console.log(a);


/*With var, accessing a variable before declaration outputs undefined
because the declaration is hoisted but not its value.*/

console.log(b);
let b = 20;
console.log(b);

/*With let, accessing a variable before declaration throws a ReferenceError
because let does not allow access before declaration.*/ 


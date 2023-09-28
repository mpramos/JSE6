

// let multiply = (a b) => a + b; // -> Uncaught SyntaxError: Unexpected identifier
// let result = multiply(10, 20);
// console.log(result);


let multiply = (a, b) => a + b;
let result = multipl(10, 20); // -> Uncaught ReferenceError: multiply is not defined
console.log(result);
console.log('mensaje1');

try {
    console.log('abc'); // -> abc
    conole.log('abc');
} catch (error) {  
    console.log(error.message); // -> conole is not defined 
}
console.log('abc1'); // -> abc1



console.log(100 / 0); // -> Infinity
console.log(100 * "2"); // -> 200
console.log(100 * "abc"); // -> NaN


console.log(Math.pow("abc", "def")); // -> NaN








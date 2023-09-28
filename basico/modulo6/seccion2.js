"use strict";
if (true) { //-> Uncaught SyntaxError: Unexpected token '{'
    console.log("true");
}


const someConstValue = 5;
someConstValue = 7; // -> Uncaught TypeError: Assignment to constant variable.

let someNumber ='juana'

 // -> Uncaught TypeError: someNumber.length is not a function

console.log(String.isFinite(someNumber));


let testArray1 = Array(10);
console.log(testArray1.length); // -> 10
console.log(testArray1);
let testArray2 = Array(-1); // -> Uncaught RangeError: Invalid array length
console.log(testArray2.length);


try {
    const someConstValue = 5;
    someConstValue = 7;
} catch (error) {
    console.log(error); // -> ReferenceError: b is not defined
}
console.log("Hemos manejado la excepción"); // -> Hemos manejado la excepción

let a = -2;
try {
    const someConstValue = 5;
    someConstValue = 7;
} catch (error) {
    if (error instanceof ReferenceError) {
        console.log("Reference error, restablecer a a -2"); // -> Reference error, restablecer a a -2
        a = -2;
    } else {
        console.log("Otro error - " + error);
    }
}
console.log(a); // -> -2


let a = 10;
try {
    a = b;  // ReferenceError
} catch (error) {
    console.log("¡Un error!"); // -> ¡Un error!
} finally {
    console.log("¡Finalmente!"); // -> ¡Finalmente!
}
console.log(a); // -> 10



let a = 10;
try {
    a = b; // Primer ReferenceError
} catch (error) {
    try {
        console.log(b); // Segundo ReferenceError
    } catch {
        console.log("¡Segundo catch!"); // -> ¡Segundo catch!
    }
} finally {
    console.log("¡Finalmente!"); // -> ¡Finalmente!
}



console.log("inicio"); // -> inicio
throw 100; // -> Uncaught 100
console.log("fin");


console.log("inicio"); // -> inicio
try {
    throw 100;
} catch (error) {
    console.log(error); // -> 100
}
console.log("fin"); // -> fin

function factorial(n) {
    if (n > 20) {
        throw new RangeError("Valor máximo 20");
    }
    let result = 1;
    for (; n > 1; n--) {
        result = result * n;
    }
    return result;
}

console.log(factorial(20)); // -> 2432902008176640000
console.log(factorial(1000)); // -> Uncaught RangeError: Valor máximo 20

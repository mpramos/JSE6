let nombre='juana'
console.log(nombre);

function MostrarComidas() {
    let comidas1 =['🍕','🍔','🍟','🌭']
    let comidas2 =['🍕','🍔','🍟']
    let comidas3=['12',2323,true]
    let nombre1 ='maria'
    let  bandera =true

    return {comidas1,comidas2,nombre1,bandera,comidas3}
}
console.log(MostrarComidas())


function getName() {
    return 123
}
console.log(getName())

function suma(a,b) {
   let numero1=Number(a)
   let numero2=Number(b)
    console.log(numero1+numero2);
}

function resta(a,b) {
    console.log(a-b);
}
 function division(a,b) {
    console.log(a/b);
 }

function multiplicacion(a,b) {
    console.log(a*b);
}
 let operacion ='*'

switch (operacion) {
    case '*':
        multiplicacion(false,6)
        break;
    case '+':
        suma('2',5)
        break;
    case '-':
        resta('2',5)
        break;
    case '/':
        division('2',5)
        break;

    default:
        console.log('Operacion incorrecta');
        break;
}


function getTrue() {
    return true;
}

let test = getTrue();
console.log(test); // -> true


let temperatures;
let meanTemp;

function getMeanTemp() {
    let sum = 0;
    let result;
    for (let i = 0; i < temperatures.length; i++) {
        sum += temperatures[i];
    }
    result = sum / temperatures.length;
    return result;  
}

temperatures = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
meanTemp = getMeanTemp();
console.log(`mean: ${meanTemp}`);

temperatures = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16];
meanTemp = getMeanTemp();
console.log(`mean: ${meanTemp}`);



function add(first, second) {
    return first + second;
    }

console.log(add(2,3));
    function add1(first, second) {
        return first + second;
        }
        console.log(add1(2,5));

        function getElement(elements, index) {
            return elements[index];
            }
        let names = ["Alice", "Bob", "Eve", "John"];
let name = getElement(names, 2);
console.log(name); // -> Eve



let a = 100, b = 200, c = 300;

function test(a) {
    let b = 10;
    console.log(a); // parameter a
    console.log(b); // local variable b
    console.log(c); // global variable c
}

test(1);        // -> 1
                // -> 10
                // -> 300

console.log(a); // -> 100
console.log(b); // -> 200
console.log(c); // -> 300

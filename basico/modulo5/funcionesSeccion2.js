function getNumber(a) {
    return a > 1 ? a * 2 : 'a no es mayor que uno'
}
console.log(getNumber(1));


function getMeanTemp(temperatures) {
    if (!(temperatures instanceof Array)) {
        return 'No cumple con el tipo de dato que estoy esperando';
    }
    let sum = 0;
    for (let i = 0; i < temperatures.length; i++) {
        sum += temperatures[i];
    }
    return sum / temperatures.length;
}

console.log(getMeanTemp(10));       // -> NaN
console.log(getMeanTemp([10, 30])); // -> 20

// 6!= 6 x 5 x 4 x 3 x 2 x 1 = 720
// 7!=7 x 6 x 5 x 4 x 3 x 2 x 1 = 720

function factorial(n) {
    let result = 1;
    while (n > 1) {
        result *= n;
        n--; // 
    }
    return result;
}

console.log(factorial(6)); // -> 720


//!RECURSIVIDAD

//* 6!=6*5!=720

// 6!= 6 x 5 x 4 x 3 x 2 x 1 = 720
//?
// 6!= 6 x 5! = 720
// 5!= 5 x 4! = 120
// 4!= 4 x 3! = 24
// 3!= 3 x 2! = 6
// 2!= 2 x 1! = 2
// 1!= 1 = 1

function factorial(n) {
    return n > 1 ? n * factorial(n - 1) : 1;
    //  6
    // 6 * factorial(5) = 720
    // 5 * factorial(4) = 120
    // 4 * factorial(3) = 24
    // 3 * factorial(2) = 6
    // 2 * factorial(1) = 2
    // 1

}

console.log(factorial(6)); // -> 720

//Funciones como miembro de primera clase

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function operation(func, first, second) {
    return func(first, second);
}

console.log(operation(add, 10, 20)); // -> 30
console.log(operation(multiply, 10, 20)); // -> 200

//!EXPRESION DE FUNCION


function add(a, b) {
    return a + b;
}

let myAdd = add;
console.log(myAdd(10, 20));     // -> 30
console.log(add(10, 20));   // -> 30






function operation(func, first, second) {
    return func(first, second);
}

let myAdd = function (a, b) {
    return a + b;
}

console.log(operation(myAdd, 10, 20)); // -> 30

console.log(operation(function (a, b) {
    return a * b;
}, 10, 20)); // -> 200


//!CALLBACKS

let inner = function () {
    console.log('inner 1');
}

let outer = function (callback) {
    console.log('outer 1');
    callback();
    console.log('outer 2');
}

console.log('test 1');
outer(inner);
console.log('test 2');




let inner = function () {
    console.log('inner 1');
}

let outer = function (callback) {
    console.log('outer 1');
    setTimeout(callback, 1000) /*ms*/;
    console.log('outer 2');
}

console.log('test 1');
outer(inner);
console.log('test 2');


setTimeout(() => {
    console.log('maria');
}, 3000);



let nombre = () => 'maria'
let nombre2 = () => {
    return 'juana'
}
console.log(nombre2());




//! TAREAS
function add(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return NaN;
    }
    return a + b;
}

function sub(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return NaN;
    }
    return a - b;
}

function mult(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return NaN;
    }
    return a * b;
}





let add = (a, b) => !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a + b;
let sub = (a, b) => !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a - b;
let mult = (a, b) => !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a * b;

let action = (callback, a, b) => callback(a, b);
// // or
// let action = function (callback, a, b) {
//     return callback(a, b);
// }
// // or
// function action(callback, a, b) {
//     return callback(a, b);
// }
console.log(action(add, 12, 10)); // -> 22
console.log(action(sub, '12', 10)); // -> 2
console.log(action(mult, 10, 10.1)); // -> NaN
let contacts = [{
name: "Maxwell Wright",
phone: "(0191) 719 6495",
email: "Curabitur@nonummyac.co.uk"
}, {
name: "Raja Villarreal",
phone: "0866 398 2895",
email: "posuere.vulputate@sed.com"
}, {
name: "Helen Richards",
phone: "0800 1111",
email: "libero@convallis.edu"
}];
let showContact = function (contacts, i) {
    if (contacts instanceof Array && contacts[i]) {
        console.log(`${contacts[i].name} / ${contacts[i].phone} / ${contacts[i].email}`);
    }
}
showContact(contacts, 1);

let showAllContacts = function (contacts) {
    if (contacts instanceof Array) {
        for (contact of contacts) {
            console.log(`${contact.name} / ${contact.phone} / ${contact.email}`);
        }
}
}
showAllContacts(contacts)

let addNewContact = function (contacts, name, phone, email) {
    if (contacts instanceof Array && name && phone && email) {
        contacts.push({
            name: name,
            phone: phone,
            email: email
        });
        console.log(`${contacts[contacts.length-1].name} / ${contacts[contacts.length-1].phone} / ${contacts[contacts.length-1].email}`);
    }
}
console.log('Ver el contacto nuevo');
addNewContact(contacts,'maria','65656565','maripao@gmail.com')
showContact(contacts, null); // undefined
showContact([], 0); // undefined

let contacts = [{
name: "Maxwell Wright",
phone: "(0191) 719 6495",
email: "Curabitur@nonummyac.co.uk"
}, {
name: "Raja Villarreal",
phone: "0866 398 2895",
email: "posuere.vulputate@sed.com"
}, {
name: "Helen Richards",
phone: "0800 1111",
email: "libero@convallis.edu"
}];
let showAllContacts = function (contacts) {
    if (contacts instanceof Array) {
        for (contact of contacts) {
            console.log(`${contact.name} / ${contact.phone} / ${contact.email}`);
        }
}
}
let sortContactByName=function(contacts) {
    if(contacts instanceof Array){
        contacts.sort((a,b)=>{
            const nameA= a.name.toLowerCase()
            const nameB= b.name.toLowerCase()
            if (nameA < nameB) {
                return -1
            } else  if(nameA > nameB){
                return 1
            } else {
                return 0
            }
        })
    }
}
sortContactByName(contacts)
showAllContacts(contacts)



const numeros =[4,2,9,1,5]
numeros.sort((a,b)=>a-b)
console.log(numeros);
numeros.sort((a,b)=>b-a)
console.log(numeros);


const frutas =['manzana','pera','naranja','banana']
frutas.sort((a,b)=> b.localeCompare(a))
console.log(frutas);


const personas =[
    {nombre:'Juan',edad:30},
    {nombre:'Ana',edad:25},
    {nombre:'Pedro',edad:35},
    {nombre:'Julian',edad:38},
]
personas.sort((a,b)=>a.edad-b.edad)
console.log(personas);
personas.sort((a,b)=>b.edad-a.edad)
console.log(personas);



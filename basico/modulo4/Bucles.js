let n = 0;
while(n < 91) {
    console.log(n); // -> 0, 10, 20, 30, 40, 50, 60, 70, 80, 90
    n += 10;
}

for (let i = 0; i < 10; i++) { // i=0 : 1<10 ; 2 => 3
    console.log(i);  //2
}


let i = 0;
while (i < 10) {
    console.log(i)
    i++
}


let values = [10, 30, 50, 100];
let sum = 0;
for (let i = 0; i <= values.length-1 ; i++) {
    sum += values[i]; //sum= 90 + 100
}
console.log(sum); // -> 190

// let  comidaChatarra =['🍕','🍔','🍟','🌭','🍿']
// console.log(comidaChatarra);
// console.log(comidaChatarra[0]);
// console.log(comidaChatarra[1]);
// console.log(comidaChatarra[2]);
// console.log(comidaChatarra[3]);
// console.log(comidaChatarra[4]);
// console.log(comidaChatarra[comidaChatarra.length-1]);

let user = {
    name: 'Calvin',
    surname: "Hart",
    age: 66,
    email: "CalvinMHart@teleworm.us"
};

for (let key in user) {
    console.log(`${key} -> ${user[key]}`);
};


console.log(user.name); // -> Calvin
console.log(user["name"]); // -> Calvin
console.log(user["surname"]); // -> Calvin


let values = [10, 30, 50, 100];
let sum = 0;
for (let numerito of values) {
    sum += numerito;
}
console.log(sum); // -> 190


let cities = [
    { name: "New York", population: 18.65e6 },
    { name: "Cairo", population: 18.82e6 },
    { name: "Mumbai", population: 19.32e6 },
    { name: "SÃ£o Paulo", population: 20.88e6 },
    { name: "Mexico City", population: 21.34e6 },
    { name: "Shanghai", population: 23.48e6 },
    { name: "Delhi", population: 25.87e6 },
    { name: "Tokyo", population: 37.26e6 }
];

for (let city of cities) {
    if (city.population > 20e6) {
        console.log(`${city.name} (${city.population})`);
    }
}

let i = 0;
// Un bucle infinito

while (true){
    console.log(i);
    i++;
    if (i >= 5) {
        break
    }
}

for (let i = 0; i < 10; i++) {
    if (i == 3) {
        continue;
    }
    console.log(i);
}

//?
while (true) {
    let firstNumber = prompt("Introduce el primer número");
    let secondNumber = prompt("Introduce el primer número");
    let operand = prompt("Introduce el operando (+, -, * o /)");
    let result;

    if (firstNumber === "S" || secondNumber === "S" || operand === "S") {
        break;
    }

    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);

    if (!Number.isNaN(firstNumber) && !Number.isNaN(secondNumber)) {
        switch (operand) {
            case "+":
                result = firstNumber + secondNumber;
                break;
            case "-":
                result = firstNumber - secondNumber;
                break;
            case "*":
                result = firstNumber * secondNumber;
                break;
            case "/":
                result = firstNumber / secondNumber;
                break;
            default:
                result = "Error: operando desconocido";
        }
    } else {
        result = "Error:al menos uno de los valores introducidos no es un número";
    }
    alert(result);
}
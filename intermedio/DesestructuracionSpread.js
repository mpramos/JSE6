// foods=[...foods,'🥗']; //Spread operator, copia el array original en un nuevo elemento del mismo tipo de dat
//! Desestructuracion y propagacion

let foods=['🍟','🍕','🍿']

// let helado= foods[foods.length-1]

// let newFood=()=>{
    //     console.log(`${helado} ${helado}`);
    // }
    // newFood()
    let [azucar,pizza,helado] = foods
    console.log(azucar);
    console.log(pizza);
    console.log(helado);
    
    let newFood=()=>{
        console.log(`${azucar} ${azucar}`);
        console.log(`${pizza} ${pizza}`);
        console.log(`${helado} ${helado}`);
}
console.log(foods);
let numbers=[1,2,3,4,5,6,67,8,9,3,3,2,3,4,5,5,6,9,8]
let [num1 ,...resto ]=numbers
let [num,...restito] = resto
console.log(num);
console.log(restito);
console.log(num1);
console.log(resto);
let [,num2,num3, ,num5]= numbers
console.log(num5);
console.log(num2);
console.log(num3);

const fullstack=[
    ['HTML','CSS','JS','REACT'],
    ['Node','Express','MongoDB'],
]
const [frontend, backend]=fullstack
console.log(frontend);
console.log(backend);
// console.log(fullstack);
//! Bucles
const paises=[['Bolivia','La Paz'],['Argentina','Buenos Aires'],['Colombia','Bogotá']]

for (const [pais,ciudad] of paises) {
    console.log(pais, ciudad);
}

const fullstack1=[
    ['HTML','CSS','JS','REACT'],
    ['Node','Express','MongoDB'],
]
for(let [tec1,tec2,tec3,tec4] of fullstack1) {
    console.log(tec1);
    console.log(tec2);
    console.log(tec3);
    console.log(tec4);
}
//! Objetos
const rectangulo1={
    base: 30,
    altura:60,
    area:200
}
{/* <h1>Figuras Geometricas</h1>
<Figura rectangulo={rectangulo1}></Figura>

const Figura =({base:b,altura:a,area:ar})=>{
    <h2>b</h2>
    <h2>a</h2>
    <h2>ar</h2>
} */}

const rectangulo={
    base: 30,
    altura:60,
    area:200,
    perimetro:undefined 
}
let {base: b,altura:a,area:ar, perimetro=70 } = rectangulo
console.log(b);
console.log(a);
console.log(ar);
console.log(perimetro);

const rect={
    ancho:20,
    altura: 10
}
// const calcularPerimetro1=(rect) =>{
//         return 2 * (rect.ancho + rect.altura)
// }
// console.log(calcularPerimetro1(rect));

// const calcularPerimetro2=({ancho,altura}) =>{
//         return 2 * (ancho + altura)
// }
// console.log(calcularPerimetro2(rect));
const calcularPerimetro3=({ancho:a,altura:al}) =>{
        return 2 * (a + al)
}
console.log(calcularPerimetro3(rect));

let user ={
    name:'Juan',
    age:30,
    city:'New York'
}
const copiedUser1= {...user,phone:'777777777'}
console.log(copiedUser1);
console.log(user);
//!
const pares =[2,4,6,8]
const numeros= [...pares]
console.log(numeros);
numeros.push(1,3,5)
console.log(numeros);
console.log(pares);
//! Spread Operator
let copiedUser= {...user}
console.log(copiedUser);
copiedUser.phone='777777'
console.log(copiedUser);
console.log(user);
const sumaTodosElementos =(...args1)=>{
    let sum=0
    for (const number of args1) {
        sum+=number
    }
    return sum
}
console.log(sumaTodosElementos(1,2,3,4,4,45,45,5,5,5,5,5,5,5));
alert(`${click}`)

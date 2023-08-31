//!Objetos
let user1 = {
    name: "Calvin",
    surname: "Hart",
    age: 66,
    email: "CalvinMHart@teleworm.us"
};

let user2 = {
    name: "Mateus",
    surname: "Pinto",
    age: 21,
    email: "MateusPinto@dayrep.com"
};
let user3 = {
    name: "Marco",
    surname: "Pinto",
    age: 24,
    email: "MarcoPinto@dayrep.com"
};

console.log(user1.name); // -> Calvin
console.log(user2.name); // -> Mateus

console.log(user1.age); // -> 66
user1.age = 67;
console.log(user1.age); // -> 67

console.log(user2.phone); // -> undefined
user2.phone = "904-399-7557";
console.log(user2.phone); // -> 904-399-7557
//!Arreglos


let emojis=['👉🏻','👀','🎉',221,true,[1,2,3],{nombre:'juan'}]
console.log(emojis);

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

console.log(days[0]); // -> Sun
console.log(days[2]); // -> Tue
console.log(days[5]); // -> Fri

days[0] = "Sunday";
console.log(days[0]); // -> Sunday

let emptyArray = [];
console.log(emptyArray[0]); // -> undefined
    

let names = [["Olivia", "Emma", "Mia", "Sofia"], ["William", "James", "Daniel"]];
console.log(names[0]); // -> ["Olivia", "Emma", "Mia", "Sofia"]
console.log(names[0][1]); // -> Emma
console.log(names[1][1]); // -> James

let femaleNames = names[0];
console.log(femaleNames[0]); // -> Olivia
console.log(femaleNames[2]); // -> Mia

let animals = [];
console.log(animals[0]); // -> undefined

animals[0] = "dog";
animals[2] = "cat";

console.log(animals[0]); // -> dog
console.log(animals[1]); // -> undefined
console.log(animals[2]); // -> cat


let names = [["Olivia", "Emma", "Mia", "Sofia"], ["William", "James", "Daniel"]];
console.log(names[0]); // -> ["Olivia", "Emma", "Mia", "Sofia"]
console.log(names[0][1]); // -> Emma
console.log(names[1][1]); // -> James

let femaleNames = names[0];
console.log(femaleNames[0]); // -> Olivia
console.log(femaleNames[2]); // -> Mia


//? Length

let names  = ["Olivia", "Emma", "Mateo", "Samuel"];
console.log(names.length); // -> 4

names[7] = "Amelia";
console.log(names);
console.log(names.length); // -> 6

console.log(names); // -> ["Olivia", "Emma", "Mateo", "Samuel", undefined, "Amelia"]
console.log(names[3]); // -> Samuel
console.log(names[4]); // -> undefined
console.log(names[5]); // -> Amelia

//! IndexOf
let names = ["Olivia", "Emma", "Mateo", "Samuel"];
console.log(names.indexOf("Mateo")); // -> 2
console.log(names.indexOf("Victor")); // -> -1
//!push
let names = ["Olivia", "Emma", "Mateo", "Samuel"];
console.log(names.length); // -> 4

names.push("Amelia");
console.log(names.length); // -> 5
console.log(names); // - > ["Olivia", "Emma", "Mateo","Samuel", "Amelia"]
    
//!unshift
let names = ["Olivia", "Emma", "Mateo", "Samuel"];
console.log(names);
console.log(names.indexOf("Mateo")); // -> 2
console.log(names.indexOf("Victor")); // -> -1 -> No existe
names.unshift("Amelia");
console.log(names.indexOf("Amelia")); // -> 0
console.log(names);

//!pop
let names= ["Olivia", "Emma", "Mateo", "Samuel"];
console.log(names.length); // -> 4

let name = names.pop();
console.log(names.length); // -> 3
console.log(name); // -> Samuel
console.log(names); // -> ["Olivia", "Emma", "Mateo"]
//!shift
let names = ["Olivia", "Emma", "Mateo", "Samuel"];
console.log(names.length); // -> 4

let name = names.shift();
console.log(names.length); // -> 3
console.log(name); // -> Olivia
console.log(names); // -> ["Emma", "Mateo", "Samuel"]

//! reverse
let names = ["Olivia", "Emma", "Mateo", "Samuel"];

names.reverse();
console.log(names); // -> ["Samuel", "Mateo", "Emma", "Olivia"]
    

//! Slice
let names = ["Olivia", "Emma", "Mateo", "Samuel"];

let n1 = names.slice(2);
console.log(n1); // -> ["Mateo", "Samuel"]

let n2 = names.slice(1,3);
console.log(n2); // -> ["Emma", "Mateo"]

let n3 = names.slice(0, -1);
console.log(n3); // -> ["Olivia", "Emma", "Mateo"]

let n4 = names.slice(-1);
console.log(n4); // -> ["Samuel"]

console.log(names); // -> ["Olivia", "Emma", "Mateo","Samuel"]

//! concat
let names = ["Olivia", "Emma", "Mateo", "Samuel"];
let otherNames = ["William", "Jane"];
let allNames = names.concat( otherNames);

console.log(names); // -> ["Olivia", "Emma", "Mateo", "Samuel"]
console.log(otherNames); // -> ["William", "Jane"]
console.log(allNames); // -> ["Olivia", "Emma", "Mateo","Samuel", "William", "Jane"]
//! Comentarios en una sola linea
// Este es un comentario de una sola línea
let x = 42; // Este también es un comentario de una sola línea, aunque la parte anterior a la doble diagonal es un código que se ejecutará.
// Esta línea y la siguiente serán ignoradas
// x = 8;
console.log(x); // -> 42
/*
    Este es un bloque
    de comentarios y puede
    abarcar varias líneas

    Entonces este código no se ejecutará
    console.log("¡Hola, Mundo!");
    dkfsdjjfsd
    jdfjfjfjf
    kjfdjfjfjf
*/

let x /*  ashjashhjwdhhjdshjdshjdshjfds*/ = 42;
console.log(x);


"use strict"; 
 
const prefix = "username_"; 
 
let userName = "Jack"; 
//const userName = "Adam"; 
 
let prefixedUserName; 
//const prefixedUserName; 
 
userName = "John"; 
prefixedUserName = prefix + userName; 
 
console.log(prefixedUserName ) //prefixedUserName2 ; 
// console.log(prefixedUserName2);


    



    








    






// Primitivos
const nombre='maria'
console.log(nombre)
nombre[0]='d'
console.log(nombre)

//Complejos
const nombres=['maria','juana','daria']
console.log(nombres);
nombres[0]='daria'
console.log(nombres);


const usuario={
    nombre:'juana',
    apellido:'ramirez'
}

const console={
    log:function(){return "muestra en consola"},
    end:function(){},
    clear:function(){}
}


console.log(console.log())



console.time();
console.log("probar consola"); // -> probar consola
console.log("probar consola"); // -> probar consola
console.log("probar consola"); // -> probar consola
console.timeEnd(); // -> default: 0.108154296875 ms




let str="java script language"
console.log(str);
let str1=str.slice(15,19)
console.log(str1);
console.log(str);



let str = "java script lan.guag.e";

console.log('192.168.1.1'.split('.',''));  // -> ['192', '168', '1', '1']


let str = "text";
let strStr = String(str);
console.log(`${typeof str} : ${str}`); // -> string : text
console.log(`${typeof strStr} : ${strStr}`); // -> string : text

let nr = 42;
let strNr = String(nr);
console.log(`${typeof nr} : ${nr}`); // -> number : 42
console.log(`${typeof strNr} : ${strNr}`); // -> string : 42

let bl = true;
let strBl = String(bl);
console.log(`${typeof bl} : ${bl}`); // -> boolean : true
console.log(`${typeof strBl} : ${strBl}`); // -> string : true

let bnr = 123n;
let strBnr = String(bnr);
console.log(`${typeof bnr} : ${bnr}`); // -> bigint : 123
console.log(`${typeof strBnr} : ${strBnr}`); // -> string : 123

let un = undefined;
let strUn = String(un);
console.log(`${typeof un} : ${un}`); // -> undefined : undefined
console.log(`${typeof strUn} : ${strUn}`); // -> string : undefined

let n = null;
let strN = String(n);
console.log(`${typeof n} : ${n}`); // -> object : null
console.log(`${typeof strN} : ${strN}`); // -> string : null



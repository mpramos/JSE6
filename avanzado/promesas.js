

setTimeout(() => {
    console.log('proceso1');
}, 1000);
setTimeout(() => {
    console.log('proceso2');
}, 2000);
setTimeout(() => {
    console.log('proceso3');
}, 3000);
setTimeout(() => {
    console.log('proceso4');
}, 4000);
setTimeout(() => {
    console.log('proceso5');
}, 5000);

console.log('proceso1');
console.log('proceso2');
console.log('proceso3');
console.log('proceso4');
console.log('proceso5');


console.log('proceso1');
console.log('proceso2');
setTimeout(()=>{
    console.log('proceso3');
},2000)
console.log('proceso4');
console.log('proceso5');


//! Callbacks
//*Privilegio 1
function multiplicar(numero1,numero2) {
    return numero1*numero2
}
function sumar(numero1,numero2) {
    return numero1+numero2
}
//*Privilegio 2
function operacion(cb,numero1,numero2) {
    return cb(numero1,numero2)
}
console.log(operacion(sumar,2,3));
//! Callbacks
let ejemplo1 = (callback)=>{
    setTimeout(() => {
    const skills=['HTML','CSS','JS']
    callback('aun me falta mejorar mis skills', skills)
}, 2000)}

let callback = (err,result)=>{
        if (!err) {
            return console.log(err);
        }
        return console.log(result);
}
ejemplo1(callback);

//! PROMESAS

const promesa = new Promise((resolve,reject)=>{
    resolve('satisfactoria')
    reject('falló ')
})
promesa
.then(resultado => console.log(resultado))
.catch(error=>console.log(error))


const promesa2= new Promise((resolve,reject)=>{
    setTimeout(() => {
        const skills=['HTML','CSS','JS']
        if (skills.length>0) {
            resolve(skills)
        } else {
            reject('No cumpli con mi promesa')
        }
    }, 2000);
})
promesa2
.then(resultado=>{console.log(resultado)})
.catch(error=>console.log(error))




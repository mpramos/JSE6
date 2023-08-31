//! Tarea 1

//? Crea un objeto que describa un boleto de tren y guárdalo en la variable ticket. El objeto debe tener tres campos:

//? estación inicial (el nombre clave es from, y como valor, proporciona el nombre de la estación más cercana en tu área)
//? estación final (el nombre clave es to, y como valor, dar cualquier otra estación dentro de 100 km)
//? el precio del boleto (el nombre clave es price, y como valor, proporciona la cantidad que te gustaría pagar por este boleto)
//? El objeto debe crearse usando llaves {}, en los que todos los campos se enumerarán inmediatamente. Luego muestra los valores de todos los campos del ticket en la consola.

let ticket = {
    from:'estacion1',
    to:'estacion2',
    price:200
}
console.log(`${ticket.from} ${ticket.to} ${ticket.price}`);
//! Tarea 1
//? Declara un objeto vacío y guárdalo en la variable person. Usando la notación de punto, agrega los campos name y surname al objeto ingresando tus datos como valores. Intenta mostrar los campos individuales en la consola.

let person ={}

person.name='Name 1'
person.surname='Surname 1'
console.log(`${person.name} ${person.surname}`);

//! Arreglos

//! Tarea 3
//? Estamos creando una pequeña biblioteca de libros sobre programación en JavaScript. Tenemos tres libros y queremos preparar una lista de ellos. Almacenaremos tres datos de cada libro: el título, el autor y el número de páginas:

//? Speaking JavaScript, Axel Rauschmayer, 460;
//? Programming JavaScript Applications, Eric Elliott, 254;
//? Understanding ECMAScript 6, Nicholas C. Zakas, 352.
//? Crea un arreglo de tres objetos que representen los libros. Cada objeto debe tener las siguientes propiedades: title, author, pages

let libros=[
    {
    title:'Speaking JavaScript',
    author:'Axel Rauschmayer',
    pages:460
    },
    {
    title:'Programming JavaScript Applications',
    author:'Eric Elliott',
    pages:254
    },
    {
    title:'Understanding ECMAScript 6',
    author:'Nicholas C. Zakas',
    pages:352
    },
]
//! Tarea 4

//? Agregar un nuevo libro a la colección: Learning JavaScript Design Patterns, por Addy Osmani, 254 páginas. Usa el método apropiado para adjunta el libro al final del arreglo. Muestra la longitud del arreglo y, a su vez, todos los nombres de los libros en la colección.

libros.push({
    title:"Learning JavaScript Design Patterns",
    author : "Addy Osmani",
    pages:254
})

console.log(libros);
console.log(libros.length);
for (let i = 0; i < libros.length; i++) {
    console.log(`${libros[i].title}`);
    
}
//TODO
//4 tareas pendientes



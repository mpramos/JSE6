//? Al final de la lista declarada de esta manera, agrega un nuevo contacto usando el método del arreglo apropiado. El nuevo contacto es: Maisie Haley / 0913 531 3030 / risus.Quisque@urna.ca.


let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
    }];

    //? Agregar un nuevo contacto

    //*Opcion 1 de la solucion 
    let nuevoContacto={
        name:"Maisie Haley",
        phone:"0913 531 3030",
        email:"risus.Quisque@urna.ca."
    }
    let nuevoContacto1={
        name:"Marisol Haley",
        phone:"0913 531 3030",
        email:"risus.Quisque@urna.ca."
    }
    let nuevoContacto2={
        name:"Juana Haley",
        phone:"0913 531 3030",
        email:"risus.Quisque@urna.ca."
    }
    contacts.push(nuevoContacto)
    contacts.push(nuevoContacto1)
    contacts.push(nuevoContacto2)
console.log(contacts);

//? Muestra el primer y último contacto, de nuevo en el formato: nombre /  teléfono / correo electrónico. Utiliza la propiedad length del arreglo para determinar el índice del último elemento. Recuerde que los elementos del arreglo se indexan a partir de 0.

//* Mostrar primer contacto
console.log(`${contacts[0].name} /${contacts[0].phone} / ${contacts[0].email}`);
//* Mostrar el ultimo contacto
console.log(`${contacts[contacts.length-1].name} /  ${contacts[contacts.length-1].phone} /  ${contacts[contacts.length-1].email} .`);






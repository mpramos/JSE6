

   
let contacts = [
    {
        name: "Maxwell Wright",
        phone: "(0191) 719 6495",
        email: "Curabitur@nonummyac.co.uk"
    },
    {
        name: "Raja Villarreal",
        phone: "0866 398 2895",
        email: "posuera@sed.com"
    },
    {
        name: "Helen Richards",
        phone: "0800 1111",
        email: "libero@convallis.edu"
    },
    {
        name: "Elen Richards",
        phone: "0800 1111",
        email: "libero@convallis.edu"
    }
];
//? Mostrar el primer contacto (primero)
console.log(`Name : ${contacts[0].name} , Phone : ${contacts[0].phone} , Email : ${contacts[0].email}`);
//? Mostrar el último contacto (último)
console.log(`Name : ${contacts[contacts.length-1].name} , Phone : ${contacts[contacts.length-1].phone} , Email : ${contacts[contacts.length-1].email}`);
//? Mostrar todos los contactos (todos)
for (const contact of contacts ) {
    console.log(`Name : ${contact.name} , Phone : ${contact.phone} , Email : ${contact.email}`);
}
//? Añadir un nuevo contacto (nuevo)
let newContact = {
    name:'Juana',
    phone:"(0191) 719 6495",
    email:'email@gmail.com'
};
contacts.push(newContact)
console.log(`New Contact -> Name : ${newContact.name} , Phone : ${newContact.phone}, Email :${newContact.email}`);
// for (const key in newContact) {
//     console.log(`${newContact[key]}`);
// }
//? Salir del programa (salir)


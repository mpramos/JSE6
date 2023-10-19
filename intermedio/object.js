
let ObCallback ={
    callback:function() {
     console.log('Se llamo al callback');   
    }
}
ObCallback.callback()


let person = {
    firstName:'Claudia',
    lastName:'Gonzales',
    age:38,
    country:'Bolivia',
    city:'La Paz',
    skills:[
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Node',
        'MongoDB',
        'Python'
    ],
    getFullName:function() {
        return `${this.firstName} ${this.lastName}`
    },
}
//console.log('person ',person);
//! Object.assign
const copyPerson= Object.assign({},person)
//console.log('copyPerson ',copyPerson);
copyPerson.isMarried=true
copyPerson.skills.push('Java')
copyPerson.skills.push('Sql')
//console.log('---copyPerson ',copyPerson);
//TODO spread Operator
//! Antes del Object.assign
// let persona1=person

// console.log('-----persona1 ', persona1);

// console.log('----person',person);
//! Object.keys
// const keys= Object.keys(copyPerson)
// console.log(keys);
// const sk= Object.keys(copyPerson.skills)
// console.log(sk);
//! Object.values
// const values= Object.values(copyPerson)
// console.log(values);
//! entries
const entries = Object.entries(copyPerson)
console.log(entries);
//! hasOwnProperty
// console.log(copyPerson.hasOwnProperty('firstName'));
// console.log(copyPerson.hasOwnProperty('name'));
Object()


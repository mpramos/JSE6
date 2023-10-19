//!PROGRAMACION FUNCIONAL
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }
// while (condition) {
    
// }
// do {
    
// } while (condition);
//? metodos integrados
// array.forEach(element => {
    
// });
// .mapp
// .filter
// .reduce
// .some
// .every

//!forEach
let sum=0
const numbers=[1,2,3,4,5] //15
numbers.forEach( num  => console.log(num) )
numbers.forEach( num  => sum+=num  )
console.log(sum);
let countries =['Bolivia','Argentina','Colombia','España']
countries.forEach(country=> country === 'Ecuador' ? console.log('Yes'):console.log('No') );
countries.forEach(country=>console.log(country.toUpperCase()));
countries.forEach(country=>console.log(country.toLowerCase()));
//!map
const numbersMap=[1,2,3,4,5] 
const numberSquare= numbersMap.map(num=> num * num) //[1,4,9,25]
const number= numbersMap.map(num=> num + num)
let names =['Juan','Cecilia','Rebeca','Soledad']
const namesToUpperCase=names.map( name=> name.toUpperCase())
console.log(namesToUpperCase);
console.log(names);
const namesFirstThreeLetters= names.map(name=>name.toUpperCase().slice(0,3))
console.log(namesFirstThreeLetters);

//! filter
let countries1 =['Bolivia','Argentina','Colombia','España','Uruguay']
const countriesContainIA = countries1.filter(country=> country.includes('ia'))
console.log(countriesContainIA);
const countriesEndsAY = countries1.filter(country=> country.endsWith('ay'))
console.log(countriesEndsAY);
const countriesStartWithA = countries1.filter(country=> country.startsWith('A'))
console.log(countriesStartWithA);
const countriesHaveFiveLetters = countries1.filter(country=> country.length === 6 )
console.log(countriesHaveFiveLetters);

const score=[
    {name:'Maria', score:100},
    {name:'Juana', score:90},
    {name:'Susana', score:87},
    {name:'Carlos', score:50},
    {name:'Andres', score:98},
]
const highScore=score.filter((student)=> student.score >= 90)
console.log(highScore);
console.log(score);

//! reduce
reduce(funcion,0)
const numbers2=[1,2,3,4,5] 
const sum1= numbers2.reduce((acc,cur)=> acc * cur,1)
console.log(sum1);
//! every => boolean
let names1 =['Juan','Cecilia','Rebeca','Soledad',2]
const areAllStr=names1.every(name=> typeof name === 'string')
console.log(areAllStr);
//! find
const ages=[24,22,25,32,35,18]
const ageFind=ages.find(age=> age < 30)
console.log(ageFind); 
let names2 =['Juan','Cecilia','Rebeca','Soledad']
const result = names2.find(name=> name.length >= 7)
console.log(result);
//!findIndex 
let names3 =['Juan','Cecilia','Rebeca','Soledad']
const result1= names3.findIndex( name=>name.length>4)
console.log(result1);
//! some
let names4 =['Juan','Cecilia','Rebeca','Soledad']
const isAnyNameLongerThanFourCharacters= names4.some (name=> name.length > 4 );
console.log(isAnyNameLongerThanFourCharacters);

//!sort
const products=['Milk','Coffe','Sugar','Apple','Carrot','Honey']
console.log(products.sort());
const numbers3=[9.81, 3.14,100, 37]
console.log(numbers3.sort());
const numbers4=[3,9 ,100, 37]
console.log(numbers4.sort());

console.log(numbers4.sort((a,b)=>a-b))
console.log(numbers4.sort((a,b)=>b-a))
const users =[
    {name: 'Juan', age:35},
    {name: 'Ricardo', age:25},
    {name: 'Sofia', age:27},
    {name: 'Cecilia', age:30},
]
users.sort((a,b)=>{
    if (a.age < b.age) return -1
    if (a.age > b.age) return 1
    return 0
})
console.log(users);










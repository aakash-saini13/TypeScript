// type personTA = {name:string}
// type personTB = { age: number }
// type personTC = personTA & personTB

// var personData1: { name: string } = { name: 'Aakash' }
// var personData2: {  age: number } = { age: 23 }

// var personData3: personTC = {
//   name: 'Aakash',
//   age: 23
// }
interface personTA {name:string}
interface personTB { age: number }
interface personTC extends personTA, personTB{}

var personData1: { name: string } = { name: 'Aakash' }
var personData2: {  age: number } = { age: 23 }

var personData3: personTC = {
  name: 'aadi',
  age: 33
}
console.log(personData3)
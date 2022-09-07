/**
 * Task
 * create object person name age
 * change object to json
 * write file json 
 * read file
 * json to object
 * change inside object
 * object --> json
 * write
 */

// create an object called person
const person = {
    name : 'Ahmed',
    age : 20
}

console.log(person);
console.log(person.name);
console.log(person.age);

// stringfy --> convert object to json
const personJson = JSON.stringify(person)

// write file json
const fs = require('fs')
fs.writeFileSync('person.json',personJson)

// read file json
console.log(fs.readFileSync('person.json').toString());


// parse --> convert json to object
const personObject = JSON.parse(personJson);

person.name = "Eslam"
person.age= 30
console.log(personObject);


const personJson1 = JSON.stringify(person)

fs.writeFileSync('person.json',personJson1)
console.log(person)


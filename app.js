/*
Modules allow to add functionality in your app

Three types :
1- Core Module File sSystem
2-
3-

*/

// Terminal --> new Terminal

const file_s = require('fs')
file_s.writeFileSync('notes.txt' , 'Hello Basant')

/*
const file = require('fs')
file.writeFileSync('index.html','ok')
*/



// read file
// buffer

console.log(file_s.readFileSync('notes.txt').toString());


// appendFileSync
file_s.appendFileSync('notes.txt',' Hello Everyone ');
console.log(file_s.readFileSync('notes.txt').toString());



// our own modules

const test = require('./data')
console.log(test);
console.log(test.h1);
console.log(test.h2);

console.log(test.add(4,5));
console.log(test.sub(10,4));




///////////////////////////////////////////////////////////

/*
npm --> node package manager

*/

var validator = require('validator');

console.log(validator.isEmail('foo@bar.com')); //=> true


var validator = require('validator');

console.log(validator.isEmail('foobar.com')); //=> false


/////////////////////////////////////////////////////////////////////////////////////////


// interview question
// allow me to deal input terminal

/*
console.log(process.argv);

if(process.argv[2]==='add'){
    console.log('Add item')
}
else if(process.argv[2]==='delete'){
    console.log('Delete item')
}

else{
    console.log('Error')
}
*/

///////////////////////////////////////////////////

// --key = "value"  --key = 20  --key = true
// parse arguments 
// yargs --> allow me to take input terminal and parse parameters
// npm i yargs





const yargs = require('yargs');

const notes = require('./notes')

// version1
// add command

yargs.command({
    command : 'add',
    describe : 'Add note', // comment

    // options command deal with
    builder:{
        title:{
            describe:'This is title description',
            type : 'string',
            demandOption : true // Obligatory
        }
        
    },

    body:{
        describe:'This is body description',
        type : 'string',
        demandOption : true // Obligatory
    },

    handler:() => {
        notes.addNote( yargs.argv.title ,  yargs.argv.body)
    }
})


yargs.command({
    command : 'delete',
    describe : 'Delete note', // comment

    builder:{
        title:{
            describe:'This is title description for delete',
            type : 'string',
            demandOption : true // Obligatory
        }
        
    },

 

    handler  : () => {
        notes.removeNotes(yargs.argv.title)

    }

}


)

// read

yargs.command({
    command : 'read',
    describe : 'read note', // comment
   

    builder:{
        title:{
            describe:'This is title description for delete',
            type : 'string',
            demandOption : true // Obligatory
        }
        
    },


    handler  : () => {
        notes.readNotes(yargs.argv.title)

    }
}


)

// list
yargs.command({
    command : 'list',
    describe : 'list note', // comment
    

    builder:{
        title:{
            describe:'This is title description for delete',
            type : 'string',
            
        }
        
    },

    body:{
        describe:'This is body description for delete',
        type : 'string',
        
    },

    handler  : () => {
       notes.listNotes()

    }
}


)
//console.log(yargs.argv);
yargs.parse();

///////////////////////////////////////////////////

// Version 2








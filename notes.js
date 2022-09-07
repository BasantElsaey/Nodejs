
     const fs = require('fs')
     // function header
     const loadNotes = () => {
         try{
             // array of json
             // [{"title": "note1","b":"newbody"}]
     
             const data = fs.readFileSync('notes.json').toString()
             // array of json --> array of object 
             // [{"title":"note1","b":"newbody"}]
             return JSON.parse(data)
         }
         catch(e){
             return []
         }
     
     }

const saveNotes = (data) =>{
    // console.log(data)
    // array of object --> array of json
    // [{title:"note1", b:"newbody"},{title:"note2", b:"new"}] -->
    // [{"title":"note1",b:"newbody"},{"title":'note2',"b":'new'}]

    const savedata = JSON.stringify(data)
    fs.writeFileSync('notes.json',savedata)

}


// title --> yargs.argv.title
// body --> yargs.argv.body
/*
const addNote = (title,body) =>{
    // function body
    const notes = loadNotes() // [] // [{title:"note1",b:"newbody"}]
    console.log(notes)
    // [{title:'notee1',body:'body1}]

    // [{"title":"note1",b:"newbody"},{"title":'note2',"b":'new'}]

    notes.push({

        title, // title:title
        body // or b:body

    })

    console.log(notes) // [{title:"note1",b:"newbody"}]
    saveNotes(notes) // // [{"title":"note1",b:"newbody"},{"title":'note2',"b":'new'}]
}
*/



/*
const addNote = (title,body) =>{
    
   
    // array of object
    
    const notes = loadNotes()
    console.log(notes)

// filter returns array
    const duplicateTitles = notes.filter((obj) =>{

        return obj.title === title
    })


    console.log(duplicateTitles) // empty array []

     if(duplicateTitles.length == 0){
        notes.push({
           
            title,
            body
        })

        saveNotes(notes)
        console.log('Note is saved successfully')
     }

     else{
        console.log('Error Duplicate title')
     }


}


*/



// const addNote = (title,body) =>{
//     const notes = loadNotes()
//     const duplicateNote = notes.find((el) =>{
            

   /*

     note1 === note 3 --> F
     note2 === note 3 --> F
     note3 === note 3 --> T

   */


//     return el.title === title
// })

// console.log(duplicateNote)

// if(!duplicateNote){
//     notes.push({
       
//         title,
//         body
        
//     })
//     saveNotes(notes)
//     console.log('Saved')
// }
// else{
//     console.log('Error duplicate title')
// }
// }



const addNote = (title,body) =>{
    const notes = loadNotes()
    const duplicateNote = notes.filter((el) =>{
            

   /*

     note1 === note 3 --> F
     note2 === note 3 --> F
     note3 === note 3 --> T

   */


    return el.title === title
})

console.log(duplicateNote)

if(duplicateNote.length==0){
    notes.push({
       
        title,
        body
        
    })
    saveNotes(notes)
    console.log('Saved')
}
else{
    console.log('Error duplicate title')
}
}

////////////////////////////////////////////////////////////////////////////


// removeNotes

// const removeNotes = (title) =>{
//     const notes = loadNotes()
//     const notesToKeep = notes.filter((el) =>{

//         /*
//          note 1 !== note5 --> T
//          note 2 !== note5 --> T
//          note 3 !== note5 --> T
//          note 4 !== note5 --> T
//          note 5 !== note5 --> F
//         */
//         return el.title !== title
//     })
    
//     console.log(notes)
//     console.log(notesToKeep) 
//     // saveNotes(notesToKeep)

//     if(notesToKeep.length !== notes.length){
//         saveNotes(notes)
//         console.log('Note is deleted')
//     }
//     else{
//         console.log('Sorry no note is found')
//     }
// }



const removeNotes = (title) =>{
    const notes = loadNotes()
    const note = notes.find((el) =>{

        /*
         note 1 !== note5 --> T
         note 2 !== note5 --> T
         note 3 !== note5 --> T
         note 4 !== note5 --> T
         note 5 !== note5 --> F
        */
        return el.title !== title
    })
    
     if(note){
        console.log(note)  // undefined
        const index = notes.indexOf(note)
        notes.splice(index,1)
        saveNotes(notes)

     }else{
        console.log('Input Is Not Found')
     }


     
}    

    /*
    console.log(notes)
    console.log(notesToKeep)
    
    */
    // saveNotes(notesToKeep)



/*
    if(notesToKeep.length==0){
       
        console.log('Error input')
    }
    else{
       notes.splice(1,1)
       console.log(notes)
    }
    */



    // if(!removeNotes.title){
    //     console.log("input is not found")
    // }
    // else {
        
    //     console.log(notesToKeep)
    //     saveNotes(notesToKeep)







// filter return array --> notesToKeep return array 
/////////////////////////////////////////////////////////////////////////////////////////////

/*
const readNotes = (title) => {
    const notes = loadNotes()
    const note = notes.find((el) =>{
        
        return el.title === title
    })


    
console.log(note)

if(note){
    console.log(notes.body)
    
}

else{
    console.log('Sorry input is not found')
}

}
*/


/*
const listNotes = () => {
    const notes = loadNotes()
    const note = notes.foreach((el) =>{
        
       console.log(el.body)
        
    })


    
console.log(note)

if(note){
    console.log(notes.body)
}

// else{
//     console.log('Error input)
// }

}
*/


// read

const readNotes = (title) => {

    const notes = loadNotes()
    const note = notes.find((el) =>{
// note1 === note3 --> F
// note5 === note3 --> F


        return el.title === title
    })

    console.log(note) // undefined
    if(note){
        console.log(note.body)
    }
    else{
        console.log('Sorry not found')
    }

}

const listNotes =() => {
       const notes = loadNotes()
       notes.forEnodeach((el) => {
         console.log(el.body)
       
    })

    
}










    module.exports ={
        addNote, //addNote:addNote
        removeNotes,
        readNotes, 
        listNotes 
        
    }

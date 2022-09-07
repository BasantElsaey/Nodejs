// let name = prompt('Enter your name');
// let grade= Number(prompt('Enter your grade'));




// if(grade >100 || grade<0){
//     document.getElementById('grade').innertext == 'undefined'
// }

// if(grade<=100 && grade>=90){
    
//     document.getElementById('grade').innertext=='A';
 
    
// }

// else if(grade<=90 && grade>=85){
//     document.getElementById('grade').innertext=='B';
    
// }


// else if(grade<=85 && grade>=70){
//     document.getElementById('grade').innertext=='C';
    
// }

// else if(grade<=70 && grade>60){
//     document.getElementById('grade').innertext=='D';
    
// }

// else {
//     document.getElementById('grade').innertext=='F';
   
// }

/*
let num = prompt('enter number');
let i = 0;
while (i % 2 !==0) {
    
    console.log(i + ' is an odd number ');
    i++
}

*/
//////////////////////////////////////////////////


/*
let maxNo = (a,b) => {
    if(a>b){
        return a + ' is greater than ' + b
        console.log('hi') // unreacable code bec. nothing comes after return 
    }
    else
    console.log('New')
    console.log('message')
    return b + ' is greater than ' + a

}

console.log(maxNo(3,7))
*/



// Arrays 
// index --> 0

let fruits = ['Strawberry','Apple','Orange','Grapes','Banana']
console.log(fruits[0]);

for(let i=0;i<fruits.length;i++){
    console.log(fruits[i])
}

//forEach
/*


el --. 'Strawberry'
el --. 'Apple'
el --. 'Orange'
el --. 'Grapes'
el --. 'Banana'

*/




fruits.forEach((el,i)=>{
   console.log(el,i)
})



let myarray = [1,2,3,4,,5,6,7,8,9,10];

console.log(myarray.findIndex((num)=>{
    return num > 9 //true
}))



////////////////////////////////////////////////////////////

let user = {
    userName : 'Basant' , age : 30 , email : 'basant@gmail.com'
}


//dot notation

user.userName = 'Hoda'
console.log(user);


//bracket notation 

user['email'] = 'ali@gmail.com'
console.log(user);



let selection = 'userName' 
// user.selection = 'adam'
user[selection] = 'adam' //
console.log(user)




let students = [
 {
   name : 'Basant',
   age: 15,
   degree : [18,20,9]
},

{
name : 'Ahmed',
age: 17,
degree : [11,40,2]
},

{
name : 'Omar',
age: 17,
degree : [13,30,8]
},

]
//////////////////////////////////////////////////////////////
/*
students.forEach((stu)=>{
      console.log(stu.name)
      console.log(stu.degree[0]+ stu.degree[1] + stu.degree[2]);
}
)
*/


/*

students.forEach((stu)=>{
    console.log(stu.name)
    sum=0
    stu.degree.forEach((deg) => sum+= deg )
    console.log(sum);
}
)

*/


///////////////////////////////////////////////////////////////////


/*
const s = students.find((s) => s.age == 17)
console.log(s)



const elements = students.filter((element) => element.age === 17)
console.log(elements)

*/



// setTimeOut --> delay in app
// 3000 --> 3sec
// setTimeOut(message,4000)


/*
console.log('First');


setTimeout(()=>{
    console.log('This message is shown after 3sec')
},3000)


console.log('Last')

*/

////////////////////////////////////////////////////////////////

// interview question

/*
let myPromise = new Promise ((resolve,reject)=>{
    if(true==1){
        resolve('yes')
    }

    //error 
    reject('no')
})


//data ==> 'yes'


myPromise.then((data) =>{
    console.log(data)
}).catch ((err)=>{
    console.log(err)
})
*/


let myPromise = new Promise ((resolve,reject)=>{
    if(false==1){
        resolve('yes')
    }

    //error 
    reject('no')
})


//data ==> 'yes'


myPromise.then((data) =>{
    console.log(data)
}).catch ((err)=>{
    console.log(err)
})


console.log('hello')

/////////////////////////////////////////////////////////////////

// async --> asynchronous function return promise
// await --> wait promise



let fetchUsers = async () =>{
    try{
        //return promise
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        // return promise
        const data = await res.json()
        console.log(data)
    }

    catch(errs){
            
        alert(errs)
    }
}

fetchUsers();

//console.log('Hi Everyone')

///////////////////////////////////////////////////////////////////////














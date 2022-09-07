const h1 = 'Hello Basant';
const h2 = 'Hello Hazem';


const add = (a,b) => {
    return a + b
}

const sub = (z,y) =>{
    return z - y
}

module.exports = {
    h1:h1, 
    //shorthand
    h2,
    add,
    sub

    // sum : addfunc --> key : value
    // add : add     --> key : value --> add only
}
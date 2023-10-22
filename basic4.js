function add(a,b){
    return a+b;
}

console.log(add(5,6));

//---------------------------------------------

const b = (function add(a,b){
    return a+b;
})(2,8);

console.log(b);

//------------------------------------------------

const square = function (number) {
    return number * number ;
}
console.log(square(11));

//-------------------------------------------------

//arrow function

add=(a,b)=>{
    return a+b;
}
console.log(add(5,6));

//-------------------------------------------------

console.log((abc =(a,b)=> a+b)(3,4));
let array = [1,3,4,5,[3,4], "mern"];

console.log(array[4][1]);

array.push(9);    // for adding in last
console.log(array);

array.unshift(6);    // for adding from first place in array
console.log(array);

console.log(array.pop());  // print the last value of array

var b= array.slice(4,9); // for printing the value between them
console.log(b);

var c= array.splice(2,4); // for printing the from mentioned index to given index. like array[1] to array[3].
console.log(c);

let a =[1,2,3,4,5,6,7.8];
console.log(a.splice(1,4));
let arr = [1,2,3,4];  //assiging arr
console.log(arr);
arr.push(5);   //add item at last of the array
console.log(arr);
arr.pop();  // remove item from last
console.log(arr);
arr.unshift(10);  //add item at very  begining
console.log(arr);
arr.shift();  //remove item from very first location
console.log(arr);

console.log(arr.includes(9)); //give boolean value if 9 is available in the array
console.log(arr.indexOf(9)); //give index if item if available in array otherwise gives -1

const newArr = arr.join() //it converts the whole array in the string comma seprated format 
console.log(newArr);


console.log("A ", arr);
const one = arr.slice(1,3);
console.log(one + " -> It will give the mentioned portion of an array");
console.log(arr + " -> Priniting the array to make sure");

const two = arr.splice(1,3);
console.log(two + " -> It will also provide the portion of an array including the last index but at the same time it will remove that portion from array");
console.log(arr + " -> Here is the portion which is left from that array after doing the SPLICE method");
// const score = 199;
// const number = new Number(100);

// console.log(score);
// console.log(number);

// console.log(score.toString().length);
// console.log(number.toFixed(2));  - it will give 2 zeros at beside the decimal

// const otherNumber = 23.866;
// console.log(otherNumber.toPrecision(4));


// const hundreds = 100000;
// console.log(hundreds.toLocaleString("en-IN"));  - It will segrigate the amount in commas


//========== MATHS =========

// console.log(Math);
// console.log(Math.abs(-1));  //it gives the absolute value, turns negative value into positive
// console.log(Math.round(4.5)); //it gives the round off value
// console.log(Math.ceil(4.2)); //it gives the ceiling/upper value of the given number
// console.log(Math.floor(4.2)); //it gives the floor/lower value of the given number
// console.log(Math.min(4,3,6,8)); //it gives the minimum value available in the array
// console.log(Math.max(4,3,6,8)); //it gives the maximum value available in the array


console.log(Math.random()); // always gives a random value between 0 to 1
console.log(Math.random()*10+1); //this is how we can get random number in assigned range, reason to add 1 at last is it will save to get 0 from the function

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min +1)) + min); //it will give a random number between 10 to 20
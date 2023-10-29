//Object literals
const JSuser = {
    name:"kartik bitla",
    email:"kartikbitla30@gmail.com",
    city:"Nagpur",
    isLoggedIn:false,
    lastLogindays:["monday","tuesday","wednesday"],
} 

const mySym = Symbol("key1");
console.log(mySym.toString());


console.log(JSuser["name"]);
console.log(JSuser["email"]);
console.log(JSuser["city"]);
console.log(JSuser["isLoggedIn"]);
console.log(JSuser["lastLogindays"]);

Object.freeze(JSuser); //this is how we freeze it, now it will prevent us to change any value in the object
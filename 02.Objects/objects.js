//Object literals
const JSuser = {
    name:"kartik bitla",
    email:"kartikbitla30@gmail.com",
    city:"Nagpur",
    isLoggedIn:false,
    lastLogindays:["monday","tuesday","wednesday"],
} 

const mySym = Symbol("key1");
//console.log(mySym.toString());


// console.log(JSuser["name"]);
// console.log(JSuser["email"]);
// console.log(JSuser["city"]);
// console.log(JSuser["isLoggedIn"]);
// console.log(JSuser["lastLogindays"]); 

//Object.freeze(JSuser); //this is how we freeze it, now it will prevent us to change any value in the object


JSuser.greeting = function(){
    console.log("Hello user");
}

// console.log(JSuser.greeting);


//singleton

const tinderUser = new Object();  //singleton object
console.log(tinderUser);  //it will give an empty curly braces

tinderUser.id = "234";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;


const regularUser = {
    email: "some@gmail.com",
    fullName:{
        userFullName: {
            fistName:"Kartik",
            lastName:"Bitla"
        }
    }
} //this is how we can nested an object inside another object

console.log(regularUser.fullName.userFullName.fistName); //we can access it giving dot notation


const obj1 = {1:"a", 2:"b"};
const obj2 = {3:"c", 4:"d"};
const obj4 = {5:"e", 6:"f"};
const obj3 = Object.assign({}, obj1, obj2, obj4); // this is how we can concat 2 or more objects
//reason to put a blank curly braces at the start is, all objects are getting copied into that blank curly braces
// instead of obj1

console.log(obj1); // we can by printing the first object
console.log(obj3); //here we can see all objects have been copied into that new object


//another way to add objects
//spread option

const obj5 = {...obj1, ...obj2, ...obj3};
console.log(obj5);

//how data come from database
const users = [
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:2,
        email:"j@gmail.com"
    },
    {
        id:3,
        email:"k@gmail.com"
    },
    {
        id:4,
        email:"l@gmail.com"
    },
    {
        id:5,
        email:"m@gmail.com"
    }
];

console.log(users[0]);


console.log(Object.keys(JSuser));  //this is how we can print all the keys from mentioned object
console.log(Object.values(JSuser)); //this is how we can print all the value from mentioned object
console.log(Object.entries(JSuser)); //it converts all the entries in an object into arrays inside an array

console.log(JSuser.hasOwnProperty("emails")); //it will give a boolean value based on key exists in object or not
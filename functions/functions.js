function isLoggedIn(agentName){
    if(!agentName){     //if it undefefined or null then it will be trated as false
        console.log("Enter agen name");
        return;
    }

    return `${agentName} is Just logged in`;
}


console.log(isLoggedIn());


function calculateCarPrice(...price){   //three dots before the parameter called rest operator, 
                                        //what it does is no matter how many argumnet were sent all will be return in the form of an array
    return price
}


console.log(calculateCarPrice(200, 400, 600));



//TYPES OF FUNCTIONS


//function declaration
console.log(addOne(10));  //you can call it before declaration of this kind of function
function addOne(num){  
    return num+1;
}



//function expression
//console.log(addTwo(20));  //we can not call it before the declaration, this will give an error
const addTwo = function(num){ 
    return num+2;
}



const userDetails = {
    userName:"Kartik",
    pric:999,

    welcomeMessage: function(){
        console.log(`${this.userName}, welcome to website`);
        console.log(this);
    }
}


// userDetails.welcomeMessage();
// userDetails.userName = "sam";
// userDetails.welcomeMessage();

//console.log(this);


function hello(){
    let userName = "kartik";
    //console.log(this);
    console.log(this.userName);
}

hello();




//arrow function
const hellos = () => {
    let userName = "world"; 
    console.log(this.userName);
}

hellos();


const sum = (num1, num2) => {
    return num1 + num2;
}

console.log(sum(1,5));


const sums = (num1, num2) => num1 + num2; //this is called implicit return

console.log(sums(10,5));
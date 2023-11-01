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
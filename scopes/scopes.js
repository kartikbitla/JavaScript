let a = 10;
const b = 20;
var c = 30;


if(true){
    let a = 20;
    const b = 40;
    var c = 60;

    console.log("innner: " + a);
    console.log("inner: " + b);
    console.log("inner: " + c);
}


console.log(a);
console.log(b);
console.log(c);

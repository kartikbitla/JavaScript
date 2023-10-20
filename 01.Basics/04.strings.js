const name = "kartik";
const repoCount = 50;
console.log(name + repoCount);
console.log(`my name is ${name}, how are you ?`);

const gameName = new String("kartik bitla software developer");
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("k"));

const newString = gameName.substring(0,5);
console.log(newString);

const sliceString = gameName.slice(-10, 4);
console.log(sliceString);


const newStringOne = "        Kartik";
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://kartikbitla%20bitla";

console.log(url.replace("%20", "-"));
console.log(url.includes("sundar"));

console.log(gameName.split(" "));
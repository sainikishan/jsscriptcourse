const name = "kishan";
const age = 26;
// console.log(name+age+"value");
console.log(`hello my ia m developer ${name} and my age is ${age}`);
//new type log

//start
//string declare
const gameName = new String("kishan");
console.log(gameName);
console.log(gameName[3])
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLocaleLowerCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('n'));
//slice
const newString = gameName.substring(0, 6);
console.log(newString);
//new method .slice
const anotherstring = gameName.slice(-6, 3);
console.log(anotherstring);
//url
const url = "hhtps::ksihan";
console.log(url.replace("ksihan", "jyoti"))
console.log(url.includes('ksihan'));
//Array
console.log(gameName.split('a'));

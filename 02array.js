const myArr = [1, 2, 3, 4, 5]
const myHeros = ["lkisa", "saijni"];
console.log(myArr[3]);
console.log(myHeros[0]);
//array bsic end
//array method
//add in array
myArr.push(6)
console.log(myArr);
//pop (remove in array)
myArr.pop()
console.log(myArr);
//unshift  add value in array start
myArr.unshift(9)
console.log(myArr);
//shift pass noparamter
myArr.shift(9)
console.log(myArr);
// qauetion in array
console.log(myArr.includes(1));
console.log(myArr.indexOf(0));
//join
const newArr = myArr.join()
console.log(newArr);
console.log(myArr);
//slice,splice slice means 
console.log("a", myArr);
const myn1 = myArr.slice(1, 3);
console.log(myn1);
console.log("b ".myArr);

const myn2 = myArr.splice(1, 3);
console.log(myn2);
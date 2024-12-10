const number = 100
console.log(number);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const othernumber = 123.8966;

console.log(othernumber.toPrecision(4));


const conthundred = 100000;
console.log(conthundred.toLocaleString());
console.log(conthundred.toLocaleString('en-IN'));


// math libary

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(2.89));
console.log(Math.ceil(4.2)); //this for top value
console.log(Math.floor(4.9)); //this for lower value
console.log(Math.min(4,3,6,8,9,2)); //this for lowesr value
console.log(Math.max(4,5,7,2,3,4,5)); //this for greater value

console.log(Math.random());//always value 0 and 1 this is always come on range
console.log((Math.random() * 10) + 1);

const min = 10;
const max = 20;

Math.random( )

let date = new Date();
console.log(date);
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toLocaleDateString());
console.log(typeof date);

let myCreatedDate = new Date(2023, 3, 23);
console.log(myCreatedDate);
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleDateString());

// time stamp
 let myTimestamp = new Date().getTime();
//let myTimestamp = Date.now();
// console.log(myTimestamp);
console.log(myTimestamp);
console.log(Date.now() / 1000);
console.log(Math.floor(Date.now() / 1000));

//new date
let newdate = new Date();
console.log(newdate);
console.log(newdate.getFullYear());
console.log(newdate.getDay());
console.log(newdate.getMonth()+1);
console.log(newdate.getTimezoneOffset());
//Importnat Methid intrentaional
// NewDate.toLocaleDateString('default', {
//     weekday: 'Long',
   
// });


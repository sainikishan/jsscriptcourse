//object Literals
// const JsUser = {
//     name: "kishan",
//     age: 27,
//     location: "gurgaon",
//     isloggedIn: False,
//     lastlogindays:["monday", "saturady"],
// }
// console.log(JsUser.name);
// Declare the symbol first
const sym = Symbol("key1");

const user = {
    name: "John",
    age: 30,
    [sym]: "key1", // Use the symbol as a key
    isloggedIn: false
};

console.log(user[sym]);
user.name = "kishan saini"
console.log(user);
//add function

user.greeting = function ()
{
    console.log("hello js user");  
}
console.log(user.greeting);

user.greetingteo = function ()
{
    console.log
        (`hello js user, ${this.name}`);  
}
console.log(user.greeting);
console.log(user.greetingteo());



//  https://www.notion.so/Lecture-02-Data-Type-2773a78e0e228042ba55df0265e78c6b


// variable ko kaise banate hai

// let name = "Rohit";
// let age = 20;

// if(true){
//     let c = 90;
// }

// age = 30;
// console.log(c);
// console.log(name , age);

// const account = 1234;
// // account = 23;

// console.log(account);




// old tarika
// var a = 10;
// var a = 20;

// if(true){
//    var a = 20;
// }

// function fun(){
//     var c = 20;
// }

// var b = 30;
// console.log(c);


// data types

// primitive data type

// number,string,boolean,undefined, null, bigint, symbol


// number
// let a = 10;
// let b = 2.36;
// console.log(a,b);
// console.log(typeof b);


// // string

// let c = "Strike is coming";
// let d = 'Anjali';
// console.log(typeof d);
// console.log(c,d);


// // boolean
// let login = true;
// let f = false;
// console.log(typeof f);
// console.log(login, f);


// // undefined

// let user;
// console.log(typeof user);
// // const p;

// console.log(user);

// bigint
// let num = 23216378261783213461n;
// console.log(typeof num);
// console.log(num);


// null
// let weather = null;
// console.log(typeof weather);

// let weather = current_weather("Dwarka")
// 25
// null
// undefined


// symbol

// const id1 = Symbol("id");
// const id2 = Symbol("id");
// console.log(typeof id2);
// console.log(id2==id1);

// Non Primitive Data type
// array, object, function

// let arr = [10,20,11,"Rohit",true];
// console.log(typeof arr);

// console.log(arr);

// Rohit 12312 18 gen

// let user = {
//     name:"Rohit",
//     account:12312,
//     age:18,
//     category:'gen'
// }

// console.log(typeof user);

// let s = function add(){
//     console.log("Hello");
// }

// console.log(typeof s);




// Primitive data type is immutable

let a = 10;
let b = a; // pass by value hoga , means a keliye 10 and b keliye 10 banega memory me 

b = 20;
console.log(a,b);

// let str = "Rohit";
// str = "Mohan";

// console.log(str);


// Non primitive data type mutable

let arr = [10,20,30,40];

arr.push(90);
arr[0] = 70;
console.log(arr);

let obj ={
    name:"Mohan",
    age:20
}

let obj2 = obj; // pass by reference

obj2.name = "Rohan";

console.log(obj);


/*

The reason for the mistake
In the original JavaScript implementation, values were stored in 32-bit units, which included a small type tag to identify the data type. 
The type tag for objects was 000 (binary).
The value for null was represented internally as the NULL pointer (which is 0x00 or all zeros in most platforms). 
Because null's internal representation had a type tag of 000, the typeof operator interpreted it as an object, resulting in the "object" return value you see today. 
Why it hasn't been fixed
The behavior of typeof null is a legacy issue that has not been corrected because of backward compatibility. Changing it now would likely break countless existing websites, libraries, and applications that rely on this established (albeit incorrect) behavior. The ECMAScript specification even acknowledges it as a "longstanding bug" that is preserved for compatibility reasons. 
How to correctly check for null
Because typeof null is unreliable for checking the null type specifically, you should use the strict equality operator (===): 
javascript
if (value === null) {
  // code to handle null value
}
This is the standard and correct way to check if a value is exactly null in modern JavaScript. 

*/
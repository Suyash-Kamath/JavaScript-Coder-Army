// // // Prototype and classes
// https://www.notion.so/Lecture-21-Prototype-and-Class-in-javascript-2a73a78e0e2280f9a76ad7141e3bd3b6

// // const obj = {
// //     name:"Rohit",
// //     age:38,
// //     greet: function(){
// //         console.log("Hello Ji")
// //     }
// // };


// // // console.log(obj.greet());
// // // obj.greet()

// // // console.log(obj.hasOwnProperty("names"));
// // // console.log(obj.toString());

// // // const arr = [10,20,30];
// arr.__proto__.__proto__  // this points to Object prototype 
// this is called DRY principle , ek baar ban gaya toh baar baar repeat mat karnaa 
// Why arrays is called Object ? Because it inherits its property from the Object , same goes with the function , at the end , it is Object 
// // // console.log(arr.length)

// // const obj2 = {
// //     account:30
// // }


// // obj2.__proto__ = obj; // created link to object , first it will check if it has name property or not , if not then in obj 

// // console.log(obj.hasOwnProperty("name"))


// // const obj1 = {
// //     name:"Rohit",
// //     age:30,
// //     greet:function(){
// //         console.log(`Hello ${this.name}`);
// //     }
// // }

// // const obj2 = {
// //     name:"Mohit",
// //     age:20,
// //     greet:function(){
// //         console.log(`Hello ${this.name}`);
// //     }
// // }


// // const obj3 = {
// //     name:"Mohan",
// //     age:10,
// //     greet:function(){
// //         console.log(`Hello ${this.name}`);
// //     }
// // }


// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }

//     sayHi(){
//         console.log(`Hi ${this.name}`);
//     }
// }


// // const person1 = new Person("Rohit",20);
// // const person2 = new Person("Mohit",10);

// // console.log(person1);

// // const ob1 = {
// //     name:"Mohan",
// //     age:20,
// //     greet: function(){

// //     }
// // };

// // console.log(ob1);


// class Customer extends Person{
//   constructor(name,age,account,balance){
//     super(name,age);
//     this.account = account;
//     this.balance = balance;
//   }

//   checkBalance(){
//     return this.balance;
//   }
// }

// const c1 = new Customer("Mohan",20,12,540);

// console.log(c1.checkBalance());

const obj = {
    name:"Rohit",
    age:20
}


const obj2 = Object.create(obj);
// This is same as create new object which is of type obj and inherit all the properties of it 
// same as mera prototype obj2 ka yeh object wala hi ho , so that property of obj can be accessed , means same as obj2.__proto__
obj2.account = 10;

console.log(obj2.account);


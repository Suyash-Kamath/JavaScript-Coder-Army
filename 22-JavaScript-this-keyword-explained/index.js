// https://www.notion.so/Lecture-22-This-Keyword-in-javascript-2aa3a78e0e22802aa703dfcdce606b37

// this call apply bind
// this: class object method
// strict mode vs non strict mode

// 'use strict' // strict javascript mode ke andhar hai means forgiving hai lekin itna bhi forgiving mat banao javascript ko ki without declaring variable , you ssign it , for e.g b=25 where var is not used and function cannot contain two parameters of same name for e.g function sayhI(name,name)

// window object is global object, javascript ka part nahi hai ,it is created by Browser , ye webAPIs hai , jisse aap bohot saare features ko enable kar sakte hai
// global object javascript ka part nahi hai , isliye har koi usko kuch bhi naam rakh sakta hai 


// global Object: In window it is called window, in node js, It is called global
// globalThis points to global object of any environment

// normal function: non strict mode, this will point to global object
// in strict mode: It will point to undefined


// this keyword in global scope: NodeJS(Empty Object), in browser it will point to global Object, going to behave same for strict mode and non strict mode
// arrow function take this kewyord from it lexical environment scope
// call apply bind, this point to the invoking object


//  In class constructor, this will point to newly create empty object

// var a = 10;
// var b = 20;

// console.log(a,b);

// function greet(name1,name2){
//     console.log(name1,name2);
// }

// greet("Rohit","Mohit");

// document.getElementById("first");
// console.log(globalThis);


// Learn about this keyword
// 'use strict'

// console.log(this);


// Function
// 100 user: greet function: 100*memory , code copy paste
// 'use strict'

// function greet(){
//     console.log(`hi ${this.name}`);
// }

// function incrementAge(value,name){
//     this.age+=value;
//     this.name= name;
//     console.log(this.age);
//     console.log(this.name)
// }

// const user = {
//     name:"Rohit",
//     age:30,
// }

// const user2 = {
//     name:"Mohit",
//     age:10
// }

// // greet.call(user); // Greet function, me aapko call kar raha hu and wo this keyword hai, wo user ko point kare
// // greet.call(user2);
// so function ne ek baar memory li hai , so memory is saved 


// // incrementAge.call(user2,10,"Mohan");
// // incrementAge.apply(user2,[10,"Mohan"]);
// apply aapke arguments array ke form me bhejegaa 


// const incr = incrementAge.bind(user2,10,"Mohan");
// bind kya karega ki mene user2 ko incrementAge ke saath bind kar diya hai with the above  arguments , so future me aap kabhi bhi call kar sakte hai ise
// call usi samay call kardegaa , bind bolta hai usi samay mat karo mitra, inka reference incr ke saath store karado , taaki baadme code me jabhi mujhe run karna ho toh me karr du 
// incr();

// this == user

// user2.greet();

// 'use strict'


// function greet(){
//     console.log(this);
// }

// greet();


// class

// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
// }

// new keyword use kiya toh , B.T.S empty object create kar deta hai  and this points to empty object 
// class ke saath jo this keyword rehta hai wo kisko point karta hai ? jab aap new keyword se usko create karet ho toh empty object ko point karta hai 
// // this = {name:"Rohit", age:20}

// const p1 = new Person("Rohit",20);

// console.log(p1);




// Arrow Function: this doesnt exist for arrow function, lexical environment scope
// 'use strict'

// console.log(this);

// const greet = ()=>{
//     console.log(this);
// }

// // function meet(){
// //     console.log(this);
// // }

// greet();

// // 'use strict'

// const user = {
//     name:"Rohit",
//     greet: function(){
//         // console.log(this);
//         const that = this;
//         function meet(){
//             console.log(that);
//         }
//         meet();
//     }
// }

// user.greet();




// const stopWatch = {
//     second:0,
//     start: function(){
         
//         const that = this;
//         setInterval(function(){
//           that.second++;
//           console.log(that.second);
//         },1000);
//     }
// }

// const stopWatch = {
//     second:0,
//     start: function(){
//          console.log(this);
//         setInterval(()=>{
//             this.second++;
//             console.log(this.second);
//         },1000)
//     }
// };
// when writing normla function in the setInterval , this used to point to the Timeout 

// stopWatch.start();
// 'use strict'

// console.log(this);

// hey ye context hai , ye  data structure hai , toh this keyword user ko nahi dekhega , kyuki ye block scope and function scope nahi hai samjhe , so this keyword global scope se borrow kardegaa and global scope me wo empty object ko point out kar raha tha
// const user = {
//     name:"Rohit",
//     greet: ()=>{
//         console.log(this);
//     }
// }



// user.greet();


// const button = document.getElementById("first");


// button.addEventListener('click',()=>{
//     console.log(this);
// })



// this keyword: Global scope in Node Js: {} , chahe strict hoya fir non-strict ho
// Windows: window Object

// function: this keyword, if someone invoke the method or function, this will point to that
// Normal function: When no one is invoking it, 
// Non strict: Global Object for node and browser
// strict mode: Undefined

// arrow function: this doesnt exist for arrow function.  It takes this from its lexical enoviroment scope

// 'use strict'
// function greet(){
//     console.log(this);
// }

// greet();
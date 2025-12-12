// https://www.notion.so/Lecture-11-Scope-and-Closures-2873a78e0e228059a849d06ad3267ed9

// Scope and closure , HOF
// Global_> Accessible to everyone
// functional -> accesible only to that function
// Block level scope-> accesible only to that Block

// let a = 10;
// const b = 20;



// if(true){
//     let d = 30;
    
// }

 

// function greet(){

//     let c = 30;
//    var e = 90;
// }

// // console.log(c);
// console.log(e);
// greet();


// let global = 30;


// function greet(){
     
//     let global = 40;
   

//     function meet(){
//         let global = 10;
//         console.log(global);
//     }
    
//     meet();
// }

// greet();


// function createCounter(){
    
//     let count = 0;
//     function increment(){
//         count++;
//         return count;
//     }

//     return increment;
// }

// count ko stack se hatake as a context object heap me daala jata hai
// javascript is single-threaded, so chalega rukega garbage collector , fir context swtich 

// // console.log(count);

// const counter = createCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());


// let balance = 500;




// // // balance+="Rohit";
// // balance-=500;
// // console.log(balance);

// let balance = 500;
// // private

// let user = {
//     deposit: function(amount){
//         if(typeof amount==="number" && amount>0){
//         balance+=amount;
//         return balance;
//         }
//     },
//     withdraw: function(amount){
//         if(typeof amount==="number" && amount>0 && balance>=amount){
//         balance-=amount;
//         return balance;
//         }
//     },
//     getBalance: function(){
//         return balance;
//     }
    
// }

// balance="Rohit"

// user.balance="Rohit";
// console.log(user.getBalance());
// console.log(user.deposit("2sa00"));
// console.log(user.deposit(500));

// method ko access(function)
// balance: usko directly access na


// function createBankAccount(){

//     let balance = 500;
    
//     return {
//     deposit: function(amount){
//         if(typeof amount==="number" && amount>0){
//         balance+=amount;
//         return balance;
//         }
//     },
//     withdraw: function(amount){
//         if(typeof amount==="number" && amount>0 && balance>=amount){
//         balance-=amount;
//         return balance;
//         }
//     },
//     getBalance: function(){
//         return balance;
//     }
    
//     }

 
// }

// closure ki method se , jo functions banaya hai object me , wo outer function ke balance ko yaad rakhega
// but developer cannot directly access it , means variable ko private bana sakta hai dost , taaki developer direct access naa kare , createBankAccount ke andhar hi change ho sakta lekin bahar nahi 



// const customer = createBankAccount();
// console.log(customer.withdraw(200));


// Higher order function


function double(value){

    return function execute(num){
        return num*value;
    }
    
}

const n = double(20)(5);
console.log(n);
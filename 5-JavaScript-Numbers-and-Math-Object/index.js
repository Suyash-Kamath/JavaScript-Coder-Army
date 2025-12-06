// notion.so/Lecture-05-Number-Math-and-String-27d3a78e0e2280c8a606ceb93c369d1b?source=copy_link

// Number
// let a = 10;
// let b = 345.6821;
// let c = b.toFixed(1);
// console.log(typeof c);

// console.log(b.toPrecision(4));
// console.log(b.toString());


// 

// let a = new Number(20); creates number as an object but this is worst method
// let b = new Number(20);
// a and b keliye 20 create kiya alag alag memory me , but not same because references same nahi hai 

// console.log(a==b); output is false , whenever you compare objects , wo reference me compare karta hai mere dost stating , are we pointing to one 
// object aur number kaise honge compared , because if comparing with object then it should compare with the reference
// remember console.log(Boolean(new Number(0))) => gives true, kyuki objects are truthy values even if they are empty: Boolean({}), even for array, kyuki heap me adress is assigned , it checks kya refernece hai kya wo variable me ?? If reference exists then true
// console.log(Boolean(null)); => this gives false because null is type of object and null means me kisi ko refer nahi kar raha hu 

// let b = 20;

// console.log(typeof b);

// let obj1 = {
//     name:"Rohit"
// }

// let obj2 = obj1;

// let obj2 = {
//     name:"Rohit"
// }

// console.log(obj1==obj2);

// Non Primitive: Reference bases pe compare
// Primitive: Copy by value
// let a = 10;
// let b = a;

// console.log(a==b);



// console.log(Math.abs(-4));
// console.log(Math.PI);
// console.log(Math.LN10);
// console.log(Math.SQRT2);
// console.log(Math.ceil(6.3));
// console.log(Math.floor(6.3));
// console.log(Math.log10(20));
// console.log(Math.max(20,11,3421,12));
// console.log(Math.random());
// [0,1): It will generate value between 0 and 1, where 0 is included but 1 is not included


// Satebaaji ek game banata:(0-9)

// console.log(Math.floor(Math.random()*10)+1);

// console.log(Math.floor(Math.random()*6)+1);

// Math.floor(Math.random()*totalNumberOfOutcome)+shift


// 15-25


// console.log(Math.floor(Math.random()*11)+15)

// Math.floor(Math.random()*(max-min+1))+min

// OTP Generate: 4 digit: 1000-9999

// Math.random aap keliye random value generate nahi karta hai
// console.log(Math.floor(Math.random()*(9999-1000+1))+1000);
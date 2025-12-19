// https://www.notion.so/Lecture-15-Event-Listener-and-Handler-28e3a78e0e2280b6a720c5387d057dae

// function handleClick(){
//     const element = document.getElementById("first");
//     element.textContent = "Strike is Coming";
// }


const element = document.getElementById("first");
// element.onclick = function handleClick(){
// //    element.textContent = "Strike is Coming";
//     element.style.backgroundColor="pink";
// }

// element.onclick = function handleClick(){
//    element.textContent = "I am the best";
// }
// object ke andhar ye value hai , aise samjho
// problem arises here is overriding 


// element.addEventListener('click',()=>{
//     element.textContent = "Strike is Coming";
// })

// element.addEventListener('click',()=>{
//     element.style.backgroundColor="brown";
// })

// const child1 = document.getElementById("child1");
// child1.addEventListener('click',()=>{
//     child1.textContent = "I am clicked";
// })

const parent = document.getElementById("parent");
// console.log(parent.children);

function handleClick(e){
   e.target.textContent = "I am Clicked";
   parent.removeEventListener('click',handleClick); // andhar rakha so that atleast ek baar toh chal jaaye mere aaka 
}

parent.addEventListener('click',handleClick)

// do this to remove event listener 

// for(let child of parent.children){
//     console.log(child);
//     child.addEventListener('click',()=>{
//         child.textContent = "I am Clicked";
//     })
// }
// 100 baar event listener lagana pageda which is not optimised approach
// so let's now learn about bubbling 

// const grandparent = document.getElementById("grandparent");
// grandparent.addEventListener('click',(e)=>{
//     console.log(e.target); // it tells ki  exactly konse waale element ko click kiya hai , konse waale element mere andhar tha jisne trigger kia hai event
// e.target usko,means uss element ko  point out karta hai jisne ise trigger kiya tha , benefit from e.target is aapko ek hi jaaga event listener lagana padaa.....outer div pe event listener laga sakta huu and pata kar sakta hu kis inner div ne click kiya hai , e.target points to that single element
//     // console.log("GrandParent is clicked");
// })

// const parent = document.getElementById("parent");
// parent.addEventListener('click',(e)=>{
//     // console.log(e);
//     // console.log("Parent is clicked");
// })

// const child = document.getElementById("child");
// child.addEventListener('click',(e)=>{
//     // console.log(e);
//     // e.stopPropagation(); // Prevents Bubbling, means Bubbling math karnaaa
//     // console.log("child is clicked");
// })
// addEventListener ka third argument is by default false, true kardoge toh ulte order pe chala jaayega 

// third argument which is true/false meaning is 
// capture phase on hai: Top se down aaoge: Us time pe event ko trigger kar diya jaayega
// capture phase off hai: Event hai usko down to up(Bubbling phase bolte hai, tab trigger kiya jaayega)

// sometimes people say as we attached eventlistener , but please remove it too

// you cannot do this parent.removeEventListener , even though the callback function apears same but they have got different memory , so alag alag consider kardegaa naa 

// Mene event handler nahi lagaya hai , me koi listen nahi kar raha hu event ? 
// dekho events hotey rehte hai but agar koi sunne waala ho toh hi mazaa aayega and action perform hoga 
// agar children  me event daala hai toh wo window Object tak bubble hoga but unke upar hai sunna ya nahi sunna 
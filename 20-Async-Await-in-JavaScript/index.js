// https://www.notion.so/Lecture-20-Async-Await-in-Javascript-2a73a78e0e228063b899c85279911c35

// async await
// aysnc function always return a promise, you returned Rohit and it caught Rohit and wrapped it up around a Promise Object and returned it to you
// async function greet(){
//     return "Rohit";

//     // return new Promise((resolve,reject)=>{
//     //     reject("Rohit");
//     // })
// the both return statement are equivalent to each other 
// }

// const response = greet();
// // console.log(response);
// response.then((data)=>console.log(data))
// .catch((error)=>{
//     console.log("Error:", error);
// // })


// // fetch("https://api.github.com/users")
// // .then((response)=>response.json())
// // .then((data)=>console.log(data));


// await se wait karta hai , jabtak naa aayein , tab tak aage naa jaye
// try using await with async function kyuki program freeze hota hai , website nahi chalega but we have studied javascript doesnt waits for anyone 
// async function github() {


//     try {
//     const response = await fetch("https://api.github.com/users");
//     if(!response.ok){
//         throw new Error("Data is not persent");
//     }

//     const data = await response.json();
//     // console.log(data);
     
//     const parent = document.getElementById("first");

//     for(let user of data){
        
//         const element = document.createElement("div");
//         element.classList.add("user");

//         const image = document.createElement('img');
//         image.src = user.avatar_url;

//         const userName = document.createElement('h2');
//         userName.textContent = user.login;

//         const anchor = document.createElement('a');
//         anchor.href = user.html_url;
//         anchor.textContent = "Visit Profile";

//         element.append(image,userName,anchor);
//         parent.append(element);
//     }
//     }
//     catch(error){
//         console.log("error");
//     }


// }


// github();

// console.log("Hello Ji kaise ho");


// await  aapke code / program ko wait karata hai , dont move until it comes 
// async ke saath isliy use kiya hai taaki wait naa karein


// const orderDetail = {
//     orderId: 123123,
//     food:["Pizza","biryani","coke"],
//     cost: 620,
//     customer_name: "Rohit",
//     customer_location: "Dwarka",
//     restaurant_location: "Delhi"
// }

// function placedOrder(orderDetail){
//     console.log(`${orderDetail.cost} Payment is in progress`);
    
//     return new Promise((resolve,reject)=>{
//        setTimeout(()=>{
     
//       if(Math.random()>0.1){
//       console.log("Payment is received and order get placed");
//       orderDetail.status = true;
//        resolve(orderDetail);
//       }
//       else{
//         reject("Payment is failed");
//       }

//     },3000)
//     })
   
// }



// function preparingOrder(orderDetail){
//     console.log(`Your food preparation started of ${orderDetail.food}`);
    
//     return new Promise((resolve,reject)=>{
  
//      setTimeout(()=>{

//         if(Math.random()>0.05){ 
//         console.log("Your order is now prepared");
//         orderDetail.token = 123;
//         resolve(orderDetail);
//         }
//         else{
//             reject("Food item is not persent at restaurant");
//         }
        
//     },3000);
//     })
    
// }


// function pickupOrder(orderDetail){
//     console.log(`Delivery boy is on way to pickup order from ${orderDetail.restaurant_location} `);
    
//     return new Promise((resolve,reject)=>{


//         setTimeout(()=>{
//          if(Math.random()>0.05){   
//         console.log("I have picked up the order");
//         orderDetail.received = true;
//         resolve(orderDetail);
//         }
//         else{
//            reject("Delivery boy Unable to reach restaurant")
//         }
//     },3000);
//     })
    
// }


// function deliverOrder(orderDetail){
//     console.log(`I am on my way to deliver order ${orderDetail.customer_location}`);
    
//     return new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//         console.log("Order delivered succesfully");
//         orderDetail.delivery = true;
//         resolve(orderDetail);
//     },3000)
//     })
    
// }


// async function ordering() {

//     try{
//     const response1 = await placedOrder(orderDetail);
//     const response2 = await preparingOrder(response1);
//     const response3 = await pickupOrder(response2);
//     const response4 = await deliverOrder(response3);

//     console.log(response4);
//     }
//     catch(error){
//         console.log("Error: ",error);
//     }
// }


// ordering();




// 
async function userDetail(params) {
    
    // const comment = await fetch("userComment");
    // const photos = await fetch("userPhoto");
    // const chat = await fetch("chat");

    // these all are independent , but await ki vajase freeze ho raha hai, I want to run them independently and parallely 

    const [comment,photos,chat]= await Promise.all([fetch("userComment"),fetch("photo"),fetch("chat")]);

    // with Promise.all , saare calls parallely kardunga , saare Promise ko resolve kardo 
    // only after these three are present , tabhi aapki agli line execute karadi jaayegi
    // use case is parallel database connection
}
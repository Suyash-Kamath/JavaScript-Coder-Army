// notion.so/Lecture-19-Promise-in-JS-2993a78e0e228091a900ff5fa583094a?source=copy_link

console.log("Hello World Start");

// code

// website create where 30 users of github is shown 

// const p1= fetch('https://api.github.com/users');
// console.log(p1); 


// red p1 when promise is in fulfilled state else rejected but never  read it whenever it is in pending state

// const p2=p1.then((response)=>{
//     return response.json();
// })
// response ke andhar p1.then dalega, jo bhi p1 ke andhar aaya hai 


// data is in body , but in the byte streamble format, but when I click the link , browser ne saara solve karliya aapke liye , wo bhi bytes me aaya hoga lekin browser solved it

// convert bytes format into Java Script Objects, uske baad hi read hoga

// to convert it , response.json() kardo
// p1.then((response)=>{
//     console.log(response.json())
// })
// guys this is also async task , response.json() bhi async hai , isliye output me promise pending aaya hai , kyuki jyada calculations hoti hai 




// console.log(p2)

// p2.then((response)=>{
//     console.log(response)
// })

// jo bhi p2 ke andhar response aaya hai wo daaldo

// This is not how we do , in fact we can make chaining of promises

// Promise chaining

// fetch('https://api.github.com/users')
// .then((response)=>{
//     return response.json()
// })
// .then((data)=>{
//     // console.log(data)
//     const parent=document.getElementById('first')

//     for(let i=0;i<data.length;i++){

//         const image = document.createElement('img')
//         image.src = data[i].avatar_url;
//         image.style.height='40px'
//         image.style.width='40px'
//         parent.append(image)
//     }
    


// });

// console.log("Hello World End")


// you cannot write undefined and function in JSON
// JSON is nothing but string format and it is universal , can be understood by any language


// const j1 = {
//     name:'Rohit',
//     age:30,
//     address:'Dwarka',
//     c:undefined
// }

// convert javascript object to json

// const jsonFormat = JSON.stringify(j1)

// console.log(jsonFormat)
// console.log(typeof jsonFormat);

// so it ignores trailing comma  and undefined and puts all keys also into string but number ko aise ho chodaa jaayega 


// this is how json looks

// const jsonLooks = `{
//     "name":"Rohit",
//     "age":30,
//     "address":"Dwarka"
// }`

// this is how json looks
// convert to javascript object

// const jsObject = JSON.parse(jsonLooks)

// console.log(jsObject);
// agar comma daala hota jsonLooks ke address ke baad , toh error deta hai , allowed hi nahi hai aisa 
// JSON format is string format 


// why string format , becuase at the end, ye data ko bits/ bytes ke form me hi travel karna ha , internet ke through  bits ke format me hi honge 
// string ke andhaar characters honge and uske corresponding bytes dhoondh sakta hu and transport kar sakta hu 


// ============ //

// handling failures in the fetch , means showing error on frontend
// lets say spelling error of url , nothing gets deplayed , internet off , nothing displayed , means placeholder images are displayed , which is wrong , should view the  failed message , so use .catch method
// fetch('https://api.github.com/usrs')
// .then((response)=>{
//     if(!response.ok){
//         throw new Error("Data is not present in Server")
//     }
//     return response.json()
// })
// .then((data)=>{
//     // console.log(data)
//     const parent=document.getElementById('first')

//     for(let i=0;i<data.length;i++){

//         const image = document.createElement('img')
//         image.src = data[i].avatar_url;
//         image.style.height='40px'
//         image.style.width='40px'
//         parent.append(image)
//     }
    


// }).catch((error)=>{
//     const parent = document.getElementById('first')
//     parent.textContent = error.message
// });

/*
catch() only runs for:

network failure

CORS failure

JS errors
DNS server down 



404 ≠ fetch error, even if wrong link , server always responds , even if wrong url , api limit hit and user info not available , server responds  and this is fulfilled category , server ke paas promises ke concept nahi hotey , it is javascript concept 
// reject cases is handled by catch : internet slow bhi hai 


also Rejected works for this case: Server Down , Internet down , DNS down 


It is client's responsibility ki how to handle  the answer from the server 

fulfilled defination is : If server has replied whether present or absent 
reject: when server se baat hi nahi kar paaya , server down , no server response 


leking how to identify if server has responsed whether the data is there or not ? , i GUESS HERE COMES THE STATUS CODE 
// response is also object , so response.ok lilho 

// if data is not present then it is error and Error throw karo mere bhai so that catch will handle it 

*/





// Till now studied how to consume promise

// But now let's study how to create promise 

// resolve means promise fulfilled ho chuka hai and reject means aapka promise reject ho chuka hai 
// you can even send resolve as an object
// const p1 = new Promise((resolve,reject)=>{
//     // reject("Hello")
//     resolve({
//         name:"Rohit",
//         age:30
//     })


// })
// agar resolve or reject likhoge toh fulfilled / reject waali  state p1 ke andhar jaayegi 
// console.log(p1)

// p1.then((response)=>{
//     console.log(response)
// }).catch((error)=>{
//     console.log(error)
// })


// How can we reolve Callback hell problem using promises 

// https://www.notion.so/Lecture-18-Callback-Hell-2953a78e0e228000a2e8cba5544e79db
// zomato application


// ======================= Callback Hell Start ======================= //
/*
const orderDetail = {
    orderId: 123123,
    food:["Pizza","biryani","coke"],
    cost: 620,
    customer_name: "Rohit",
    customer_location: "Dwarka",
    restaurant_location: "Delhi"
}

function placedOrder(orderDetail , Callback){
    console.log(`${orderDetail.cost} Payment is in progress`);

    setTimeout(()=>{
      console.log("Payment is received and order get placed");
      orderDetail.status = true;
      Callback(orderDetail);
    },3000)
}



function preparingOrder(orderDetail,Callback){
    console.log(`Your food preparation started of ${orderDetail.food}`);

    setTimeout(()=>{
        console.log("Your order is now prepared");
        orderDetail.token = 123;
        Callback(orderDetail)
    },3000);
}


function pickupOrder(orderDetail ,Callback){
    console.log(`Delivery boy is on way to pickup order from ${orderDetail.restaurant_location} `);

    setTimeout(()=>{
        console.log("I have picked up the order");
        orderDetail.received = true;
        Callback(orderDetail);
    },3000);
}


function deliverOrder(orderDetail){
    console.log(`I am on my way to deliver order ${orderDetail.customer_location}`);

    setTimeout(()=>{
        console.log("Order delivered succesfully");
        orderDetail.delivery = true;
    },3000)
}


// never do 
// placedOrder()
// preparingOrder()
// because output will be wrong , but what if I do callback way , yes it is showing me right 

// also you cannot do this below
// placedOrder(preparingOrder(pickupOrder))
// becuase function call ke andhar function call chall raha hai 
// remember, dont hardcode the function call , make it in such a way that it is reusable 
// lets say delivery boy ke bajaaye me jaau  pickup karneko order as a customer , so yes...



placedOrder(orderDetail, (orderDetail)=>{
    preparingOrder(orderDetail ,(orderDetail)=>{
        pickupOrder(orderDetail, (orderDetail)=>{
            deliverOrder(orderDetail);
        });
    });
});
*/
// ======================= Callback Hell End ======================= //


// Callback made our life hell : Low code readability , so kicking out the concept of Callback


const orderDetail = {
    orderId: 123123,
    food:["Pizza","biryani","coke"],
    cost: 620,
    customer_name: "Rohit",
    customer_location: "Dwarka",
    restaurant_location: "Delhi"
}

function placedOrder(orderDetail){
    console.log(`${orderDetail.cost} Payment is in progress`);
    
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
     
      if(Math.random()>0.1){
      console.log("Payment is received and order get placed");
      orderDetail.status = true;
       resolve(orderDetail);
      }
      else{
        reject("Payment is failed");
      }

    },3000)
    })
   
}


function preparingOrder(orderDetail){
    console.log(`Your food preparation started of ${orderDetail.food}`);
    
    return new Promise((resolve,reject)=>{
  
     setTimeout(()=>{

        if(Math.random()>0.05){ 
        console.log("Your order is now prepared");
        orderDetail.token = 123;
        resolve(orderDetail);
        }
        else{
            reject("Food item is not persent at restaurant");
        }
        
    },3000);
    })
    
}


function pickupOrder(orderDetail){
    console.log(`Delivery boy is on way to pickup order from ${orderDetail.restaurant_location} `);
    
    return new Promise((resolve,reject)=>{


        setTimeout(()=>{
         if(Math.random()>0.05){   
        console.log("I have picked up the order");
        orderDetail.received = true;
        resolve(orderDetail);
        }
        else{
           reject("Delivery boy Unable to reach restaurant")
        }
    },3000);
    })
    
}




function deliverOrder(orderDetail){
    console.log(`I am on my way to deliver order ${orderDetail.customer_location}`);
    
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
        console.log("Order delivered succesfully");
        orderDetail.delivery = true;
        resolve(orderDetail);
    },3000)
    })
    
}





// placedOrder(orderDetail)
// preparingOrder(orderDetail)
// pickupOrder(orderDetail)
// deliverOrder(orderDetail)

// cant run this becuase wrong output aayega , means 4 log jaldi execute hoke callback queue gadbad karlegaa

// What I want is ek function call hoke answer mil jaaye mujhe and orderDetail Status preparingOrder ko bheja jaaye
// means mujhe jab milega tabhi me tumko de dunga , it is like that

placedOrder(orderDetail)
.then((orderDetail)=>preparingOrder(orderDetail))
.then((orderDetail)=>pickupOrder(orderDetail))
.then((orderDetail)=>deliverOrder(orderDetail))
.then((orderDetail)=>{
    console.log(orderDetail);
    
})
.catch((error)=>{
    console.log("Error: ", error);
    
})
.finally(()=>{
    console.log("I am doing cleanup");
})



// Why was the need for Promise 
// jabtak data naa aye , tabtak uske upar kuch naa kaam karu 

// why finally and where it is used : whenever I request , loader is enabled , jaisehi request ka answer aayega , mujhe screen se hatana hai loader ko , toh finally use kar sakte hai or database connection close
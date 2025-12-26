// This file is solely made for practice

const orderDetail = {
    orderId:123123,
    food:['Pizza','Biryani','Coke'],
    cost:620,
    customer_name:'Suyash',
    customer_location:'Mumbai',
    restaurant_location:'Mumbai'
}



function placedOrder(orderDetail,){
    console.log(`${orderDetail.cost} Payment is in Progress`);
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            console.log('Payment is received and order got placed');
            orderDetail.status = true;
            
            resolve(orderDetail)
        },3000)
    })
}

function preparingOrder(orderDetail,){
    console.log(`Your food preparation started of ${orderDetail.food}`);
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            console.log("Your order is now prepared");
            orderDetail.token = 123;
            
            resolve(orderDetail)
        },3000);
    })
}

function pickupOrder(orderDetail ,){
    console.log(`Delivery boy is on way to pickup order from ${orderDetail.restaurant_location} `);
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            console.log("I have picked up the order");
            orderDetail.received = true;
            ;
            resolve(orderDetail)
        },3000);
    })
}


function deliverOrder(orderDetail){
    console.log(`I am on my way to deliver order ${orderDetail.customer_location}`);

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            console.log("Order delivered succesfully");
            orderDetail.delivery = true;
            resolve(orderDetail)
        },3000)
    })
}



placedOrder(orderDetail)
.then((orderDetail)=>preparingOrder(orderDetail))
.then((orderDetail)=>pickupOrder(orderDetail))
.then((orderDetail)=>deliverOrder(orderDetail))
.then(orderDetail=>console.log(orderDetail))
.catch((error)=>console.log(`Error: ${error}`))
.finally(()=>console.log('I am doing cleanup'))


console.log('Hare Krishna ')
console.log('Kaise Ho Bhai ');

// Place Order -> Preparing Order -> Pickup Order -> Deliver Order
const body = document.querySelector('body');

body.addEventListener('click',(e)=>{
  console.log(e.clientX , e.clientY);
  
  const circleElement = document.createElement('div');
  circleElement.classList.add('circle');
  circleElement.textContent = "HI";

  const color = ['red','blue','orange','green','pink','purple'];
  circleElement.style.backgroundColor = color[Math.floor(Math.random()*6)];

  circleElement.style.top = `${e.clientY-25}px`;
  circleElement.style.left = `${e.clientX-25}px`;

//   why subtracting 25? because jaha click karta hu , wahase edge start hota hai , I want jahape click kiya hai , original wahase start hona chahiye, lekn mujhe corners mil rahe hai , I wanted to start it in middle , but from edge when I click
// height is 50 as well as width, to get it in center , 25 pixel se subtract 


  body.append(circleElement);
  console.log(body);

  // even though opacity is 0 after 5 seconds but you have not removed that element , so also remove the element after 5 second body se
 // it is like setInterval but ek baar chalega 
  setTimeout(()=>{
    circleElement.remove();
  },5000);

})
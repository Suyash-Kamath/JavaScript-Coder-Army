const parent = document.getElementById('parent');

parent.addEventListener('click',(e)=>{
    console.log(e.target) // yaad hoga naa bubbling ke time padha tha !! See, Buttons are inside parent okay , if we click or do anything within parent , we get to know from the event object
   const child = e.target;
   const body = document.querySelector('body');
   body.style.backgroundColor = child.id ;
}) 
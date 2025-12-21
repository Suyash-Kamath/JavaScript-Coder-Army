const parent = document.getElementById('parent');

parent.addEventListener('click',(e)=>{
    console.log(e.target) // yaad hoga naa bubbling ke time padha tha !!
   const child = e.target;
   const body = document.querySelector('body');
   body.style.backgroundColor = child.id ;
}) 
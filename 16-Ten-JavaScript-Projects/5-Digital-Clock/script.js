const div = document.querySelector('div')

setInterval(()=>{
    const time = new Date()
    div.textContent = time.toLocaleTimeString()
},1000)
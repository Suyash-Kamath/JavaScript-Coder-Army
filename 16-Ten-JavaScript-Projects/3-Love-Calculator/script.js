const form = document.querySelector('form') // Listen to form kyuki input de rahe ho naa 

form.addEventListener('submit',(e)=>{
    e.preventDefault() // Form ko submit karta toh pura data gayab, result stable aaya hi nahi , I dont want ki by default seedha jaakar submit ho jaaye , I want to break this default behaviour, e.preventDefault() ye direct submit nahi karwata hai 
    const Boy = document.getElementById("Boy");
    const Girl = document.getElementById("Girl");

    const value1 = Boy.value.length
    const value2 = Girl.value.length

    const result = (Math.pow(value1+value2,3))%101

    document.querySelector('h2').textContent = `Result: ${result}%`;

    form.reset() 

    // diff between reset and submit : poora page refresh ho jaa raha tha submit ki vajase , submit karne se kya hoga hai ki submit hoke poora page refresh maar deta hai 

})


// submit kiya hai type because button ke upar listen kar rahe ho , jaise hi button ke upar submit kar raha hu , isliye type submit banaya hai , form ke andhar jab button banate hai then agar type submit mention kiya ho then aapko listen karna padega , wo submit ke hisaab se karna padega ki me submit wala event dekh raha hu , jabhi form ke andhar aap submit vala click karenge tabh koi action lunga 
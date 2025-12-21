
const result = document.getElementById('result');

setInterval(()=>{
const currentTime = Date.now();
const olympicTime = new Date(2028,6,14).getTime(); // 0-based indexing leta hai , yeh july hai 
let timer = olympicTime-currentTime;

// millsecond

const day = Math.floor((timer)/(1000*60*60*24)); // milliseconds ko seconds me convert keliye divide by 1000 then divide by 60 to get the mins and then divide by 60 to get the hours and then divide by 24 to get the day 
timer%=1000*60*60*24; // mod kiya so that to know aur kitne milli seconds bache hai , jaroori nahi ki saare milli seconds convert ho jaye , kuch milliseconds bachenge naa 
const hour = Math.floor((timer)/(1000*60*60));
timer%=1000*60*60;
const minute = Math.floor((timer)/(1000*60));
timer%=1000*60;
const second = Math.floor((timer)/(1000));
timer%=1000;

result.textContent = `${day}:Days ${hour}:Hour  ${minute}:Minute ${second}:Second`;
},1000);


/*


Math is lets say 

130005 millisecond , to convert it into seconds , divide it by 1000 and get the floor value, and to get the milliseconds , just get the remainder

130005/1000 = 130 sec and 130005 % 1000 = 5


130  second to convert into mins 

130/60 = 2 mins and 130 % 60 = 10 which is remaining seconds


*/
// https://www.notion.so/Lecture-06-String-and-Date-27e3a78e0e22803ca796f1eef30bc86b?source=copy_link

// String
// const str1 = "Rohitboy";
// const str2 = 'Rohit Negi';
// const day = 18;
// const str3 = `Strike is coming on ${day}`;

// console.log(str3);

// const str = `Hello Coder Army`;

// console.log(str.length)
// console.log(str[1]);

// str[2] = "S";
// console.log(str)

// upper case
// const a = str.toUpperCase(); // new string is returned 
// const b = str.toLowerCase();
// console.log(b);

// const str = `Hello Coder Army Coder`;

// console.log(str.indexOf('Cod'));
// console.log(str.lastIndexOf('Cod'));
// console.log(str.includes('cod'));

// slice 
// console.log(str.slice(2,7));
// console.log(str.slice(3));
// console.log(str.slice(-4)) // ye +1 karta hai isliye oder aaya hai 
// console.log(str.slice(-5,-2));

// const str = `Hello Coder Army Coder`;

// console.log(str.substring(2,5)); // only difference between slice and this is you cannot mark negative index 

// const a = "Rohit";
// const b = "Negi";
// const c = a+" "+b;
// console.log(c);

// console.log(24+"Rohit");
// console.log(24+"Rohit"+10);
// console.log(24+30+"Rohit");

// const str = `Hello Coder Army Coder`;

// console.log(str.replaceAll("ode",'iam'));

// const user = "  Rohit  Negi ";
// console.log(user.trim());

// const names = "Rohit Mohit Suraj Rohan Anjali";

// console.log(names.split(" "))
// console.log(names.split(","))

// const now = new Date(); // Picks from our computer , but question is : JavaScript Code has no access to our system , but how ?? Laptop on and off , but device me sahi time rehta hai , answer is System Clock

// console.log(now);
// console.log(now.toString()); // utc + 5:30 hours
// console.log(now.toISOString()); // UTC format 
// console.log(now.toLocaleString());


// Local time chal rha
// console.log(now.getDay()); // Monday keliye 1 ,Tuesday keliye 2
// console.log(now.getDate());
// console.log(now.getFullYear());
// console.log(now.getMonth()); // Month starts from 0 , jan 0 , feb 1 , means 0 based index
// console.log(now.getHours());
// console.log(now.getSeconds());


// days: Mon-tue(1 based)
// Month: 0 1 2

// year month date hour minute second millisecond
// const now = new Date(2025,8,20,8,25,16,125); // in consistency , mentions UTC , so minus 5:30

// console.log(now.toString());


// Timestamp
const now = Date.now();
const dates = new Date(1759275037293);
// console.log(dates.toString());

console.log(dates);
console.log(now);
// 1759272851288: TimeStamp
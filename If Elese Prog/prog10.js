//DATE OBJECTS IN JAVA SCRIPT
//Date Object
let date = new Date();
console.log(date);

//Proper Date
let currentDate = new Date().toLocaleDateString();
console.log(currentDate);

//Proper Time
let currentTime = new Date().toLocaleTimeString();
console.log(currentTime);

//USA TIME
let options = {timezone: 'America/New_York'};
let usaDate = new Date().toLocaleDateString('en-US',options);
console.log(usaDate);
/////
let option = {timezone: 'America/New_York'};
let usaTime = new Date().toLocaleTimeString('en-US',option);
console.log(usaTime);

//TODAY
let today = new Date().getDay();
console.log(today);

//MONTH
let currentMonth = new Date().getMonth();
console.log(currentMonth);

//CUSTOM DATE
let c_date = new Date().getDate();
let c_month = new Date().getMonth();
let c_year = new Date().getFullYear();
console.log(`${c_date} - ${c_month} - ${c_year}`);




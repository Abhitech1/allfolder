// let sayGoodMorning = () => {
//     let h1Tag = document.querySelector('#msg-1');
//     h1Tag.innerText = 'Good Morning';
//     h1Tag.style.backgroundColor = '#32CD32';
//     h1Tag.style.padding = '15px';
//     h1Tag.style.boxShadow = '0 0 10px black';
// };

// let sayGoodAfternoon = () => {
//     let h1Tag = document.querySelector('#msg-1');
//     h1Tag.innerText = 'Good Afternoon';
//     h1Tag.style.backgroundColor = 'orangered';
//     h1Tag.style.padding = '15px';
//     h1Tag.style.boxShadow = '0 0 10px black';
// };

// let sayGoodEvening = () => {
//     let h1Tag = document.querySelector('#msg-1');
//     h1Tag.innerText = 'Good Evening';
//     h1Tag.style.backgroundColor = 'purple';
//     h1Tag.style.padding = '15px';
//     h1Tag.style.boxShadow = '0 0 10px black';
// };

// let sayGoodNight = () => {
//     let h1Tag = document.querySelector('#msg-1');
//     h1Tag.innerText = 'Good Night';
//     h1Tag.style.backgroundColor = 'black';
//     h1Tag.style.padding = '15px';
//     h1Tag.style.boxShadow = '0 0 10px black';
// };


/*--------------------------------------------------Another way--------------------------------------------------------*/
//printwishMessage
let printwishMessage = (message , color) => {
let h1Tag = document.querySelector('#msg-1');
h1Tag.innerText = message;
h1Tag.style.backgroundColor = color;
h1Tag.style.padding = '15px';
h1Tag.style.boxShadow = '0 0 10px black';
};
/*----------------------------------------------Another way------------------------------------------------------*/  
//Good Morning Button
let gmButton = document.querySelector('#gm-btn');
gmButton.addEventListener('click', function() {
    printwishMessage('Good Morning' , 'limegreen');
});

//Good Afternoon Button
let gaButton = document.querySelector('#ga-btn');
gaButton.addEventListener('click', function() {
    printwishMessage('Good Afternoon' , 'orangered');
});

//Good Evening Button
let geButton = document.querySelector('#ge-btn');
geButton.addEventListener('click', function() {
    printwishMessage('Good Evening' , 'purple');
});

//Good Night Button
let gnButton = document.querySelector('#gn-btn');
gnButton.addEventListener('click', function() {
    printwishMessage('Good Night' , 'black');
});



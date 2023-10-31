// let h1Tag = document.querySelector('#msg-1');
// h1Tag.innerText = 'Good Morning';

// let sayGoodMorning = () => {
//     let h1Tag = document.querySelector('#msg-1');
//     h1Tag.innerText = 'Good Morning';
//     h1Tag.style.backgroundColor = 'limegreen';
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

//printWishMessage
let printWishMessage = (message,color) => {
    let h1Tag = document.querySelector('#msg-1');
    h1Tag.innerText = message;
    h1Tag.style.backgroundColor = color;
    h1Tag.style.padding = '15px';
    h1Tag.style.boxShadow = '0 0 10px black';

};

// //Good Morning Button
// let gmbutton = document.querySelector('#gm-btn');
// gmbutton.addEventListener('click',function() {
//     printWishMessage('Good Morning','limegreen');

// });

// //Good Afternoon Button
// let gabutton = document.querySelector('#ga-btn');
// gabutton.addEventListener('click',function() {
//     printWishMessage('Good Afternoon','orangered');

// });

// //Good Evening Button
// let gebutton = document.querySelector('#ge-btn');
// gebutton.addEventListener('click',function() {
//     printWishMessage('Good Evening','purple');

// });

// //Good Night Button
// let gnbutton = document.querySelector('#gn-btn');
// gnbutton.addEventListener('click',function() {
//     printWishMessage('Good Night','black');

// });


//Good Morning Button
let gmbutton = document.querySelector('#gm-btn');
gmbutton.addEventListener('click',function() {
    alert('GM button is clicked');

});





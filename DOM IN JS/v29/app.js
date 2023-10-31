//document
console.log(document);

//head
console.log(document.head);

//title
console.log(document.title);
document.title = 'JS DOM';

//body
console.log(document.body);

//nav
let navTag = document.querySelector('nav');
console.log(navTag);

//anchor Tag
let anchorTag = document.querySelector('nav a');
console.log(anchorTag);

//InnerText
let theText = anchorTag.innerText;
console.log(theText);

//Change the inner text
anchorTag.innerText = 'Abhishek Dubey';

//h1 Tag
let h1Tag = document.querySelector('#msg');
// console.log(h1Tag);
h1Tag.innerText = 'GOOD EVENING';

//styles
h1Tag.style.backgroundColor = 'limegreen';
h1Tag.style.color = 'white';
h1Tag.style.textAlign = 'center';
h1Tag.style.padding = '15px';
h1Tag.style.fontSize = '45px';
h1Tag.style.boxShadow = '0 0 10px black';







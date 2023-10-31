console.log('We are at tut 6');
const naame = 'Abhi';
const greeting = 'Good Morning';
console.log(greeting + ' ' + naame);

let html;
html = "<h1>this is heading</h1>"+
        "<p>this is my para</p>";
        
html = html.concat('this', 'str2');
// console.log(html);
// console.log(html.length);  
// console.log(html.toLocaleLowerCase());
// console.log(html.toLocaleUpperCase());
// console.log(html);    

// console.log(html[1]);
// console.log(html.indexOf('h1'));
// console.log(html.lastIndexOf('<'));
// console.log(html.charAt(3));
// console.log(html.endsWith('/p>thisstr2'));
// console.log(html.includes('fg'));
// console.log(html.substring(1,6));
// console.log(html.slice(0,4));
// console.log(html.split('>'));
// console.log(html.replace('this','it'));
let fruit1 = 'orange';
let fruit2 = 'Apple';
let myHtml = `Hello ${naame}
             <h1>This is heading </h1>
             <p> You like ${fruit1} and ${fruit2}`;
             document.body.innerHTML = myHtml;
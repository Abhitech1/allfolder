//NUMBER,STRING,JSON OBJECT IN JS

//Number
//Max Number
console.log(Number.MAX_SAFE_INTEGER);

//Min Number
console.log(Number.MIN_SAFE_INTEGER);

//POS INFINITY
console.log(Number.POSITIVE_INFINITY);

//NEG INFINITY
console.log(Number.NEGATIVE_INFINITY);

//Parse Int
let str = '100';
console.log(typeof str);

//OR
let str1 = '100';
let num1 = Number.parseInt(str1);
console.log(`${typeof str1} => ${typeof num1}`);

//PARSE FLOAT
let str2 = '100.145';
let num2 = Number.parseFloat(str2);
console.log(`${typeof str1}=> ${typeof num2}`);

//TO STRING
let num3 = 100;
let numstring = num3.toString();
console.log(`${typeof num3}=>${typeof numstring}`);

//TO FIXED
let amount = 520;
console.log(amount.toFixed(fractionDigits = 2));

//String Related Operations
let msg = String('Good Morning');

//length
console.log(msg.length);

//lowercase
console.log(msg.toLowerCase());

//uppercase
console.log(msg.toUpperCase());

//substring or substr(start index, no.of chars)
console.log(msg.substring(0,4));

//2nd example
console.log(msg.substring(5,7));

//CharAt
console.log(msg.charAt(5));

//charCodeAt(ASSCII)
console.log(msg.charCodeAt(5));

//JSON Object
/* 
   String => Object : parse()
   Object => String : stringify()
*/

let student = {
    naame : 'Rajan',
    age : 20,
    course : 'CSE',
    college : 'IIT Mumbai'
};
console.log(student);

//Object to String
let studentStr = JSON.stringify(student);
console.log(studentStr);

//String to object
let newStudent = JSON.parse(studentStr);
console.log(newStudent);





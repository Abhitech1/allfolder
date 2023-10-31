//JAVA SCRIPT FUNCTIONS

//Print from 0-10 with difference 1
// let result = ' ';
// for(let i=0;i<=10;i++){
//     result += `${i}`;
// }
// console.log(result);

//Ex---------------------
// function printNumbers(endNumber){
//     let result = ' ';
//     for(let i=0;i<=endNumber;i++){
//         result +='${i}';
//     }
//     console.log(result);
// }
// printNumbers(50,100);

//Same we can do from another method-------------
// function printNumbers(startNumber,endNumber,increment){
//     let result = ' ';
//     for(let i = startNumber;i<=endNumber;i+=increment){
//         result += '${i}';
//     }
//     console.log(result);
        
    
// }
// printNumbers(10,50,5);

//Function Without Parameters

// function greet(){
//     console.log('Good Morning');
// }
// greet();

//Functional Expression
// let greetMe = function(){
//     console.log('Good Morning');
// };
// greetMe();

//Functions With Parameters
 
// let WishMe = function(name,age){
//     let message = 'Hello $ {name} you are $ {age} yrs old';
//     console.log(message)
// };
// WishMe();

//FUNCTIONS WITH RETURN TYPE
// let sum = function(a,b){
//     let result = 2*(a+b);
//     return result;
// };
// let output = sum(10,20);
// console.log(output);

//FUNCTIONS OF ARRAYS
//1.SHIFT()
let technologies = ['html','css','javascript','jquery','bootstrap'];
console.log(technologies);
technologies.shift();
console.log(technologies);

//2.UNSHIFT()
technologies = ['html','css','javascript','jquery','bootstrap'];
console.log(technologies);
technologies.unshift('node js');
console.log(technologies);

//3.PUSH()
technologies=['html','css','javascript','jquery','bootstrap'];
console.log(technologies);
technologies.push('node js');
console.log(technologies);

//4.POP()
technologies=['html','css','javascript','jquery','bootstrap'];
console.log(technologies);
technologies.pop();
console.log(technologies);

//5.SORT()
technologies=['html','css','javascript','jquery','bootstrap'];
console.log(technologies);
technologies.sort();
console.log(technologies);

//6.REVERSE()
technologies=['html','css','javascript','jquery','bootstrap'];
console.log(technologies);
technologies.reverse();
console.log(technologies);

//7.SPLICE()
technologies=['html','css','javascript','jquery','bootstrap'];
console.log(technologies);
technologies.splice(2);
console.log(technologies);

//OR
technologies=['html','css','javascript','jquery','bootstrap'];
console.log(technologies);
technologies.splice(2,1);
console.log(technologies);

//OR
technologies=['html','css','javascript','jquery','bootstrap'];
console.log(technologies);
technologies.splice(2,1,'node js');
console.log(technologies);

//8.JOIN()
technologies=['html','css','javascript','jquery','bootstrap'];
console.log(technologies);
let techString = technologies.join('-');
console.log(techString);


//9.SPLIT()
console.log(techString);
let newTechs = techString.split(' - ');
console.log(newTechs);

//10.FOR EACH()












//prog 1

// for(let i=1;i<=10;i++){
//     console.log(i);
// }

//prog 3
// let sum = 0;
// let n = parseInt(prompt("Enter a number that you want to print sum of n natural n number : "));
// for(let i=1;i<=n;i++){
//     // console.log(i*2-1);
//     // sum = sum + (i*2-1);
//     console.log(i*2);
//     sum = sum + (i*2);
// }
// console.log("The sum of odd numbers is : " + sum);

//prog 4

// let sum = 0;
// let Avg;
// for(let i=1;i<=10;i++){
//     sum = sum+i;
//     Avg = parseFloat(sum/i);
// }
//     console.log("The average of 1st ten natural no is " + sum);
//     console.log("The average of 1st ten natural no is " + Avg);

//prog5
// let term = parseInt(prompt("Enter the value of n: "));
// i = 1;
// while (i<=term) {
//     console.log(i*i*i);
//     console.log("\n");
//     i = i + 1;
// }

//prog6
// let table = parseInt(prompt("Enter the value of table: "));
// for(let i=1;i<=10;i++){
//     console.log(table + "X" + i + "=" + (table*i));
// }

//prog7
// let start = parseInt(prompt("Enter the value of table starts: "));
// let end = parseInt(prompt("Enter the value of table ends: "));
// while(start<=end){
//     console.log("\n");
//     let string = " ";
//     i = 1;
//     while(i <= 10){
//         console.log(start * i);
//         console.log("\n");
//         i = i + 1;
//     }
//     string +="";
//     start = start + 1;
//     }

//prog8
// let num = parseInt(prompt("Enter the value of table n: "));
// let sum=0;
// i=1;
// while(i<=num){
//     if(i%2!=0){
//         console.log(i);
//         sum = sum + i;
//     }
//     i = i + 1;
// }
// console.log("sum =",sum);

//prog9
// let n = parseInt(prompt("enter the number of n: "));
// let string = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 0; j < i; j++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

//prog10
// let n = parseInt(prompt("enter the number of n: "));
// let string = "";
// for(let i = 1; i <= n; i++){
//     string += "";
//     for(let j = 1; j < i; j++){
//         string += j+" ";
        
//     }
//     string += "\n";
// }
// console.log(string);

//prog11
// let n = parseInt(prompt("enter the number of n: "));
// let string = "";
// for(let i = 1; i <= n; i++){
//     string += "";
//     for(let j = 1; j <= i; j++){
//         string += i+" ";
        
//     }
//     string += "\n";
   
// }
// console.log(string);

//prog12
// let n = parseInt(prompt("enter the number of n: "));
// let string = "";
// let k = 1;
// for (let i = 1; i <= n; i = i + 1)
// {
  
  
//   for (let j = 1; j <= i; j = j + 1) {
//     string += k + " ";
//     k = k + 1;
   
//   }
//   string += "\n";
// }
//   console.log(string);

//prog13
// let n = parseInt(prompt("enter the number of n: "));
// let i = 1;
// let k = 1;
// while (i <= n) {
//   let j = 1;
//   let string = " ".repeat(n - i);
//   while (j <= i) {
//     string += k + " ";
//     k = k + 1;
//     j = j + 1;
//   }
//   console.log(string);
//   i = i + 1;
// }
  
//prog14
// let n = parseInt(prompt("enter the number of n: "));
// let i = 1;
// let k = 1;
// while (i <= n) {
//   let j = 1;
//   let string = " ".repeat(n - i);
//   while (j <= i) {
//     string += "*"+" ";
//     k = k + 1;
//     j = j + 1;
//   }
//   console.log(string);
//   i = i + 1;
// }

//prog16
// let number = parseInt(prompt("enter the value of number :"));
// console.log("input the value of  number :", number);
// let s = "";
// let sum = 0;
// let i = 1;
// while (i <= number) {
//   s += 2 * i + " ";
//   sum = sum + 2 * i + 1;
//   i = i + 1;
// }
// console.log(" The even numbers are :", s);
// console.log("here Sum of even Natural Number upto", number, "terms :", sum);

//prog17
// let n = parseInt(prompt("enter the number of n: "));
// let i = 1;
// let k = 1;
// while (i <= n) {
//   let j = 1;
//   let string = " ".repeat(n - i);
//   while (j <= i) {
//     string += i + " ";
//     k = k + 1;
//     j = j + 1;
//   }
//   console.log(string);
//   i = i + 1;
// }

//prog20
// let n = parseInt(prompt("enter the number of row : "));
// let string = ` `;
// let i = -1;
// while (i <= n) {
//   let x = 0;
//   while (x < i) {
//     string += "*";
//     x++;
//   }
//   string += "\n";
//   i = i + 2;
// }
// console.log(string);

//prog22
// let n = parseInt(prompt("enter the number of n: "));
// let string = "";
// let k = 0;
// for (let i = 1; i <=n; i = i + 1)
// {
  
  
//   for (let j = 1; j <=i; j = j + 1) {
//     if(k==1){
//         k=0;
//     }else{
//         k=1;
//     }
    
    
//     string += k + " ";
//   }

//   string += "\n";
// }
//   console.log(string);

//prog28
// let n1 = parseInt(prompt("enter the number of n1: "));
// let n2 = parseInt(prompt("enter the number of n2: "));
// function is_perfect(number)
// {
// let temp = 0;
//    for(var i=1;i<=number/2;i++)
//      {
//          if(number%i === 0)
//           {
//             temp += i;
//           }
//      }
   
//      if(temp === number && temp !== 0)
//         {
//        console.log("It is a perfect number.");
//         } 
//      else
//         {
//        console.log("It is not a perfect number.");
//         }   
//  } 
// is_perfect(28); 

// prog29
// let n = parseInt(prompt("enter the number: "));
// let r,sum = 0,temp = 0;
// for(i=n;i<=200;i++){
//     temp = n;
//     while(n>0){
//         r = n%10;153%10 == 3;
        
//         sum = sum + (r*r*r);
//         sum = 0 + (3*3*3) == 27
//         n = parseInt(n/10);
//         n = 153/10 == 15
//     }
//     if(temp==sum){
//         console.log("The number is armstrong.");
//     }else{
//         console.log("The number is not armstrong.")
//     }
// }

//prog30
// let start = parseInt(prompt("enter the number: "));
// let end = parseInt(prompt("enter the number: "));
// let r = 0,sum = 0,temp,num;
// for(num = start;num<=end;num++){
//     temp = num;
//     while(temp>0){
//         r = temp%10;
//         console.log(r)
        
//         sum = sum + (r*r*r);
//         temp = parseInt(temp/10);
//     }
//     if(sum==num){
//         console.log("The armstrong no. is:"+num);
//     }
// }
 
//prog31
// let n = 5;
// let string = "";
// // Upside pyramid
// for (let i = 1; i <= n; i++) {
//   // printing spaces
//   for (let j = n; j > i; j--) {
//     string += " ";
//   }
//   // printing star
//   for (let k = 0; k < i * 2 - 1; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// // downside pyramid
// for (let i = 1; i <= n - 1; i++) {
//   // printing spaces
//   for (let j = 0; j < i; j++) {
//     string += " ";
//   }
//   // printing star
//   for (let k = (n - i) * 2 - 1; k > 0; k--) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

//prog32
// function isPrime(num) {

//     if (num === 2) {
//       return true;
//     } else if (num > 1) {
//       for (var i = 2; i < num; i++) {
  
//         if (num % i !== 0) {
//           return true;
//         } else if (num === i * i) {
//           return false
//         } else {
//           return false;
//         }
//       }
//     } else {
//       return false;
//     }
  
//   }
  
//   console.log(isPrime(8));

//prog 33
// let n = 5;
// let c;
// let string = "";
// for(let i=0;i<n;i++){
//   for(let m=1;m<=n-i;m++){
//     string+=" ";
//   }
//   for(let j=0;j<=i;j++){
//     if(j==0||i==0){
//       c=1;
//     }else{
//       c=(c*(i-j+1))/j;
//     }
//     string+=" "+ c;
//   }
//   string+="\n";
// }
// console.log(string);

//prog 36







  









    





// const age = 21;
// if (age >= 18) {
//     console.log(age >= 18)
//     console.log('congratulations! you are eligible')
// }
// else {
//     console.log('Not eligible to vote')
// }

// //prog6

// let m = -5;
// if (m > 0) {
//     console.log('1');
// }
// else if (m == 0) {
//     console.log('0');
// }
// else {
//     console.log('-1');
// }

// //prog7

// let height = 135;
// if (height < 150) {
//     console.log('Dwarf')
// }
// else if ((height == 135) && (height < 165)) {

// }

// else if (height >= 165) {
//     console.log('Tall')
// }

// //prog8

// let x = 1;
// let y = 2;
// let z = 3;
// if (x > y) {
//     if (x > z) {
//         console.log(x + " greater than " + y + " and " + z);

//     }
//     else {
//         console.log(z + " greater than " + x + " and " + y);

//     }
// }
// else if (y > x) {

//     if (y > z) {
//         console.log(y + " greater than " + x + " and " + z);

//     }
//     else {
//         console.log(z + " greater than " + x + " and " + y);

//     }
// }

//prog9

// let a=1;
// let b=2;
// if(a>0 && b>0){
//     console.log('The value of a and b lies in 1st quad');
// }
// else if(a<0 && b<0){
//     console.log('The value of a and b lies in 3rd quad');
// }
// else if(a>0 && b<0){
//     console.log('The value of a and b lies in 4th quad');
// }
// else{
//     console.log(" value belongs to 2nd quad")
// }

// prog10

// let Maths = prompt("Enter Your Marks");
// let Physics = prompt("Enter your marks");
// let Chemistry = prompt("Enter Your Marks");
// let MP = Maths + Physics;
// let total = Maths + Physics + Chemistry;
// if ((Maths >= 65) && (Physics >= 55) && (Chemistry >= 50)) {
//     if ((total >= 190) || (MP >= 140)) {
//         console.log("You are eligible");
//     }
//     else {
//         console.log("You are not eligible");
//     }
// }
// else {
//     console.log("You are not eligible");
// }


//prog11

// let a = prompt("enter the value : ");
// let b = prompt("enter the value : ");
// let c = prompt("enter the value : ");
// let d = ((b*b)-4*a*c);
// if(d==0){
//     console.log("Root is equal");

// }else if(d>0){
//     console.log("Root is Real")
// }
// else{
//     console.log("Root is imaginary")
// }

// //program13
// let Temp = parseInt(prompt("Enter the temp"));
// if(Temp<0){
//     console.log("Freezing weather")
// }
// else if((Temp>=0) && (Temp<10)){
//     console.log("Very Cold Weather")
// }
// else if ((Temp>=10) && (Temp<20)){
//     console.log("Cold weather")
// }
// else if((Temp>=20) && (Temp<30)){
//     console.log("Normal Temp")
// }
// else if ((Temp>=30) && (Temp<40)){
//     console.log("Its Hot")
// }
// else{
//     console.log("Its very Hot")
// }

//program14
// let s1 = parseInt(prompt("Enter side"));
// let s2 = parseInt(prompt("Enter side"));
// let s3 = parseInt(prompt("Enter side"));
// if((s1==s2) && (s2==s3) &&(s3==s1)){
//     console.log("It's a equilateral triangle")
// }
// else if(((s1==s2) || (s2==s3) ||s3!=s1)){
//     console.log("It's a Isosceles triangle")
// }
// else{
//     console.log("It's a scalene triangle")
// }

//program15
// let s1 = parseInt(prompt("Enter side"));
// let s2 = parseInt(prompt("Enter side"));
// let s3 = parseInt(prompt("Enter side"));
// let total = s1+s2+s3;
// if(total==180){
//     console.log("It is a valid triangle")
// }
// else{
//     console.log("It is not a valid triangle")
// }

//program16
// let c = prompt("Enter a char")
// if((c>='A' && c<='Z') || (c>='a' && c<='z')){
//     console.log("It is a character")
// }
// else if(c>='0' && c<=9){
//     console.log("It is a number")
// }
// else{
//     console.log("It is a special character")
// }

//program18
// let sp = parseInt(prompt("Enter price"));
// let cp = parseInt(prompt("Enter price"));
// let profit = sp-cp;
// let loss = cp-sp;
// if(sp>cp){
//     console.log("You are in profit")
// }
// else if (cp>sp){
//     console.log("you are in loss")
// }
// else{
//     console.log("Nither profit nor loss")
// }

//program19
// let CustId = parseInt(prompt("Enter Id"));
// let CustName = parseInt(prompt("Enter Name"));
// let Unit = parseInt(prompt("Enter Unit"));
// if(Unit==199){
//    charge1 = Unit*1.20;
//     console.log(charge1)
// }
// else if((Unit>=200) && (Unit<=400)){
//     charge2 = Unit*1.50;
//     console.log(charge2)
// }
// else if((Unit>=400) && (Unit<=600)){
//     charge3 = Unit*1.80;
//     console.log(charge3)
// }
// else{
//     charge4 = Unit*600;
//     console.log(charge4);
// }

//program20
// let Grade = (prompt("Enter Grade"));

// if(Grade=='E'){
//     console.log("Excellent")
// }
// else if(Grade=='V'){
//     console.log("Very Good")
// }
// else if(Grade=='G'){
//     console.log("Good")
// }
// else if(Grade=='A'){
//     console.log("Average")
// }
// else if(Grade=='F'){
//     console.log("Fail")
// }
// else{
//     console.log("Not applicable")
// }

 // Program 21

// let day = parseInt(prompt("Enter the day number in between 1 to 7 : "));
// if(day == 1){
//     console.log("Monday");
// } else if(day == 2){
//     console.log("Tuesday");
// } else if(day == 3){
//     console.log("Wednesday");
// } else if(day == 4){
//     console.log("Thursday");
// } else if(day == 5){
//     console.log("Friday");
// } else if(day == 6){
//     console.log("Saturday");
// } else if(day == 7){
//     console.log("Sunday");
// } else {
//     console.log("Please enter correct input");
// }

// Program 22

// let num = parseInt(prompt("Enter the number from 1 to 9 : "));
// if(num == 1){
//     console.log("One");
// } else if(num == 2){
//     console.log("Two");
// } else if(num == 3){
//     console.log("Three");
// } else if(num == 4){
//     console.log("Four");
// } else if(num == 5){
//     console.log("Five");
// } else if(num == 6){
//     console.log("Six");
// } else if(num == 7){
//     console.log("Seven");
// } else if(num == 8){
//     console.log("Eight");
// } else if(num == 9){
//     console.log("Nine");
// } else {
//     console.log("Please enter correct input.")
// }

// Program 23

// let month = parseInt(prompt("Enter the month number from 1 to 12 : "));
// if(month == 1){
//     console.log("January");
// } else if(month == 2){
//     console.log("Februray");
// } else if(month == 3){
//     console.log("March");
// } else if(month == 4){
//     console.log("April");
// } else if(month == 5){
//     console.log("May");
// } else if(month == 6){
//     console.log("June");
// } else if(month == 7){
//     console.log("July");
// } else if(month == 8){
//     console.log("August");
// } else if(month == 9){
//     console.log("September");
// } else if(month == 10){
//     console.log("October");
// } else if(month == 11){
//     console.log("November");
// } else if(month == 12){
//     console.log("December");
// } else {
//     console.log("Please enter the correct input.")
// }


// Program 24

// let month = parseInt(prompt("Enter the month in number between 1 to 12 : "));
// if(month == 1){
//     console.log("Month have 31 days");
// } else if(month == 2){
//     console.log("Month have 28 days");
// } else if(month == 3){
//     console.log("Month have 31 days");
// } else if(month == 4){
//     console.log("Month have 30 days");
// } else if(month == 5){
//     console.log("Month have 31 days");
// }  else if(month == 6){
//     console.log("Month have 30 days");
// } else if(month == 7){
//     console.log("Month have 31 days");
// } else if(month == 8){
//     console.log("Month have 31 days");
// } else  if(month == 9){
//     console.log("Month have 30 days");
// } else if(month == 10){
//     console.log("Month have 31 days");
// } else if(month == 11){
//     console.log("Month have 30 days ");
// } else if(month == 12){
//     console.log("Month have 31 days");
// } else {
//     console.log("Please enter the correct input.");
// }

// Program 25

// console.log("1. Area of rectangle");
// console.log("2. Area of square");
// console.log("3. Area of triangle");
// console.log("4. Area of Circle");
// let choice = parseInt(prompt("Enter your choice : "));
// switch(choice){
//     case 1:
//         let a = parseInt(prompt("Enter the length of rectangle : "));
//         let b = parseInt(prompt("Enter the Width of rectangle : "));
//         let c = (a * b);
//         console.log("Area of Rectangle is " + c);
//         break;
//     case 2:
//         let side = parseInt(prompt("Enter the length of square : "));
//         let sq = (side * side);
//         console.log("The area of square is : " + sq);
//         break;
//     case 3:
//         let base = parseInt(prompt("Enter the base of triangle : "));
//         let height = parseInt(prompt("Enter the height of triangle : "));
//         let tri = ((1/2) * base * height);
//         console.log("The area of triangle is " + tri);
//         break;
//     case 4:
//         let radius = parseInt(prompt("Enter the radius of circle  : "));
//         const pi = 3.14;
//         let cir = (pi * radius * radius); 
//         console.log("The area of circle is : " + cir);
//         break;
//     default:
//         console.log("Please enter correct input");
// }

// Program 26

// let choice = parseInt(prompt("Enter your choice : 1 for addition, 2 for Substraction, 3 for Multiplication, 4 for Division"));
// let a = parseInt(prompt("Enter the value of a : "));
// let b = parseInt(prompt("Enter the value of b : "));
// switch(choice){
//     case 1:
//         let c =  a + b;
//         console.log("The addition of a and b is " + c);
//         break;
//     case 2:
//         let d = a - b;
//         console.log("The subtraction of a and b is " + d);
//         break;
//     case 3:
//         let e = a * b;
//         console.log("The multiplication of a and b is " + e);
//         break;
//     case 4:
//         let f = a / b;
//         console.log("The Division of a and b is " + f);
//         break;
//     case 5:
//         let g = a % b;
//         console.log("The modulo of a and b is " + g);
//     default:
//         console.log("Please enter correct input");
// }






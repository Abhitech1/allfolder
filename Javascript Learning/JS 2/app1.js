/*--------------------------------CALL BACK FUNCTION--------------------*/
// const perOne = (friend,callfrnd) => {
//     console.log(`I am busy right now.I am talking to ${friend}.I will call you back`);

// }
// const perTwo = () => {
//     console.log(`Hey what's up.I call back you Abhi`);
//     callfrnd();
// }
// perOne("Abhishek",perTwo);

/*-----------------Example of call back function--------------*/
// let sum = (a,b) => {
//     return a+b;
// };
// let mul = (a,b) => {
//     return a*b;
// };
// let calculate = (a,b,callback) => {
//     let result = '';
//     return callback(a,b);
// };
// let output = calculate(10,20,sum);
// console.log(output);
// output = calculate(10,20,mul);
// console.log(output);
// output = calculate(10,20,(a,b) => {
//     return a-b;
// });
// console.log(output);
/*-------------------Real Time usage of a Callback Function------------------*/
// let employees = [{id :1 , name : 'John' , age : 35},
//                  {id:2 , name : 'Rajan' , age : 25}];
// let createEmployee = (employee) => {
//     setTimeout(() => {
//         employees.push(employee);
 
//     } , 2000);

// };
// let getEmployees = () => {

// };

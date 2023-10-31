//Template strings(`) back tick operator +
// let mobile = {
//     brand : 'Apple',
//     color : 'silver',
//     price : 35000
// };
// let msg = "BRAND : " + mobile.brand +  "COLOR : " + mobile.color +  "PRICE : " + mobile.price;
// console.log(msg);
// let msg1 = `BRAND : ${mobile.brand} COLOR : ${mobile.color} PRICE : ${mobile.price}`;
// console.log(msg1);

// let template1 = "<ul>" +
//                  "<li>" + mobile.brand +"</li>" +
//                  "<li>" + mobile.color +"</li>" +
//                  "<li>" + mobile.price +"</li>" +
//                  "</ul>;                  


//2) OPtional Parameters
// let greet = function(name,age){
//     let msg = `Hello ${name} You are ${age} yrs old`;
//     console.log(msg);
// };
// greet('Abhishek',24);


// let greet = function(name,age){
//     if(age === undefined){
//         age = 24;
//     }
//     let msg = `Hello ${name} You are ${age} yrs old`;
//     console.log(msg);
// };
// greet('Abhishek');

//For-of loops
// let employees = [
//         {
//             id : 1,
//             naame : 'John',
//             age : 40,
//             designation : 'Manager',
//             isActive : true
//         },
//         {
//             id : 2,
//             naame : 'Wilson',
//             age : 46,
//             designation : 'Sr.Manager',
//             isActive : false
    
//         },
//         {
//             id : 3,
//             naame : 'Rajan',
//             age : 25,
//             designation : 'Software Engineer',
//             isActive : true
    
//         },
//         {
//             id : 4,
//             naame : 'Laura',
//             age : 28,
//             designation : 'Tech Lead',
//             isActive : false
    
//         },
//         {
//             id : 5,
//             naame : 'David',
//             age : 26,
//             designation : 'Software Enginner',
//             isActive : true
//         }
//     ];

//     //Normal FOr-of loop
// let result = ' ';
// for(let i=0;i<=employees.length-1;i++){
//     let employee = employees[i];
//     result += `${employee.naame.toUpperCase()}`;
// }
// console.log(result);

// //for-in loop upto ES5
// result = ' ';
// for(let index in employees){
//     let employee = employees[index];
//     result += `${employee.naame.toUpperCase()}`;
// }
// console.log(result);

// //For-of loop of Es6
// result = '';
// for(let employee of employees){
//     result += `${employee.naame.toUpperCase()}`;
// }
// console.log(result);

// //For-each Function Es5
// result = '';
// employees.forEach(function(employee){
//     result += `${employee.naame.toUpperCase()}`;
// });
// console.log(result);

// //forEach with Arrow Function Es6
// result = '';
// employees.forEach(employee => {
//     result += `${employee.naame.toUpperCase()}`;
// });
// console.log(result);

//DE-STRUCTURING CONCEPT
// let student = {
//     name : 'Abhishek',
//     age : 24,
//     course : 'MBBS',
//     address : {
//         street : 'Hitech City',
//         city : 'Hyderabad',
//         state : 'TS'
//     },
//     hobbies : {
//         regular : {
//             id : 1,
//             regHobbies : ['Reading Books','Playing Cricket']
//         },
//         occasional : {
//             id : 1,
//             occHobbies :['Playing Cards' , 'Online Games']
//         }

//     }
// };
// //Destructuring
// let {street,city,state} = student.address;
// console.log(`STREET : ${street}
//              CITY : ${city}
//             STATE : ${state}`);
// //regular Hobbies
// let { regHobbies } = student.hobbies.regular;
// console.log(regHobbies);


//SPREAD OPERATORS
// let array1 = ['white','black','blue','purple'];
// let array2 = ['yellow','silver','orange'];
// let colors = [];
// for(let color of array1){
//     colors.push(color);
// }
// for(let color of array2){
//     colors.push(color);
// }
// console.log(colors);

///------------------------------////
// let array1 = ['white','black','blue','purple'];
// let array2 = ['yellow','silver','orange'];
// let colors = [...array1,...array2];
// console.log(colors);

//ASYNCRONUS
// console.log('car 1');
// console.log('car 2');
// setTimeout(() =>{
//     console.log('car 3');
// }, 3000);
// console.log('car 4');
// console.log('car 5');

//ASYNCRONUS AWAIT
// let createEmployee = (employee) => {
//     return new Promise((resolve,reject) => {
//         setTimeout(() =>{
//             employees.push(employee);
//             let isDone = true;
//             if(isDone){
//                 resolve();
//             }
//             else{
//                 reject('Employee Creation is Failed');
//             }
//         },2000);
//     });
// };
// //get Employees
// let getEmployees = () => {
//     setTimeout(() => {
//         let employeeRows = '';
//         employees.forEach((employee) => {
//             employeeRows += `<tr>
//                              <td>${employee.id}</td>
//                              <td>${employee.name}</td>
//                              <td>${employee.age}</td>
//                              </tr>`;

            
//         });
//         document.querySelector('#table-body').innerHTML = employeeRows;
//     },1000);
// };
// //async,await
// let init = async () => {
//     let result = await createEmployee({id : 3,name : 'wilson' , age : 48});
//     getEmployees();
// };
// init();










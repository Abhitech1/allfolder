// //Iteration of array elements
// let colors = ['white','black','black','silver','purple','blue','yellow'];
// //normal for loop
// for(let i=0;i<=colors.length-1;i++){
//     console.log(colors[i]);
// }



// //For-in loop upto ES5

// result = ' ';
// for(let a in colors){
//     console.log(a);

// }

// //2nd prog using same concept
//  result = ' ';
//  for(let a of colors){
//     console.log(a);
//  }

//  //3rd prog using same concept
//  result = ' ';
//  for(let index in colors){
//     result += '${colors[index]}';
//  }
//  console.log(result);

// // For-Each function upto ES5
// result = ' ';
// colors.forEach(function(color) {
//     result += '${color}';
    
// });
// console.log(result);

// // ForEach with Arrow function from ES6
// result = ' ';
// colors.forEach((color)=>{
//     result += `${color}`;
// });
// console.log(result);

//Array of Objects
let employees = [
    {
        id : 1,
        naame : 'John',
        age : 40,
        designation : 'Manager',
        isActive : true
    },
    {
        id : 2,
        naame : 'Wilson',
        age : 46,
        designation : 'Sr.Manager',
        isActive : false

    },
    {
        id : 3,
        naame : 'Rajan',
        age : 25,
        designation : 'Software Engineer',
        isActive : true

    },
    {
        id : 4,
        naame : 'Laura',
        age : 28,
        designation : 'Tech Lead',
        isActive : false

    },
    {
        id : 5,
        naame : 'David',
        age : 26,
        designation : 'Software Enginner',
        isActive : true

    }
];
// //Access all employee details
// console.log(employees);
// //for specific content like name.
// console.log(employees[0].naame);


// //iterate employees
// for(let employee of employees){
//     console.log(employee);
// }

//Filter the junior Employee: age<=30
// console.log(employees);
// let juniorEmployees = [];
// for(let employee of employees){
//     if (employee.age<=30){
//         juniorEmployees.push(employee);
//     }
// }
// console.log(juniorEmployees);

//Filter active employee: isActive:true
let activeEmployees = [];
for(let employee of employees){
    if(employee.isActive){
        activeEmployees.push(employee);
    }
    console.log(activeEmployees);
}







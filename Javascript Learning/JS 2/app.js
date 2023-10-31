// let employees = [
//     {
//         id : 1,
//         naame : 'John',
//         age : 40,
//         designation : 'Manager',
//         isActive : true
//     },
//     {
//         id : 2,
//         naame : 'Wilson',
//         age : 46,
//         designation : 'Sr.Manager',
//         isActive : false

//     },
//     {
//         id : 3,
//         naame : 'Rajan',
//         age : 25,
//         designation : 'Software Engineer',
//         isActive : true

//     },
//     {
//         id : 4,
//         naame : 'Laura',
//         age : 28,
//         designation : 'Tech Lead',
//         isActive : false

//     },
//     {
//         id : 5,
//         naame : 'David',
//         age : 26,
//         designation : 'Software Enginner',
//         isActive : true
//     }
// ];
// //Junior Employees
// let juniorEmployees = employees.filter(function(employees) {
//     return employees.age<=30;
// });
// console.log(juniorEmployees);

//Junior Employees with Arrow Function
// let jrEmployees = employees.filter((employee) => {
//     return employee.age<=30;
// });
// console.log(jrEmployees);
/*------------------------Simplified Version---------------------*/
// let jrEmployees = employees.filter(employee =>employee.age<=30);
// console.log(jrEmployees);

// //Limitation of Arrow Function
// let student = {
//     firstName : 'Abhishek',
//     lastName :  'Dubey',
//     fullName : function(){
//         return `${this.firstName} ${this.lastName}`;
//     }
// };
// console.log(student.fullName());
/*--------------------------------Promises in Js-----------------------*/
//promise concept with callbacks
let doTask = (success,failure) =>{
    //doing the task
    let isDone = true;
    if(isDone){
        success('Task is Done');
    }
    else{
        failure('Task is NOT Done');
    }

};
doTask((message) => {
    console.log(message);

} ,  (message) => {
    console.error(message);
});

//Actual promises creation
let cleanCamera = new Promise((resolve,reject) => {
    //cleaning camera
    let isDone = true;
    if(isDone){
        resolve('Cleaning is Done');
    }
    else{
        reject('cleaning is NOT Done');
    }

});
cleanCamera.then((message) => {
    console.log(message);

}).catch((err) =>{
    console.error(err);
});
//Dependent promises in JavaScript
let buildProject = new Promise((resolve,reject) => {
    let isDone = true;
    if(isDone){
        resolve('Project is Finished');
    }
    else{
        reject('Project is NOT Finished');
    }
});
let attendTechnicalRound = new Promise((resolve,reject) => {
    let isDone = true;
    if(isDone){
        resolve('Technical Round is Finished');
    }
    else{
        reject('Technical Round is NOT Finished');
    }
});
let attendManagerRound = new Promise((resolve,reject) => {
    let isDone = true;
    if(isDone){
        resolve('Manager Round is Finished');
    }
    else{
        reject('Manager Round is NOT Finished');
    }
});
let attendHRRound = new Promise((resolve,reject) => {
    let isDone = true;
    if(isDone){
        resolve('HR Round is Finished, got JOB');
    }
    else{
        reject('HR Round is NOT Finished');
    }
});
buildProject.then(() => {
    attendTechnicalRound.then(() => {
        attendManagerRound.then().catch(() => {

        });

    }).catch(() =>{

    });
}).catch(() => {

})
//JS BLOCK SCOPES
// let a =10;
// console.log(a);

//block scope
// let course = 'Engineering';
// if (course === 'Engineering'){
//     let dept = 'Software';
// }
// console.log(course);

// //Functions
// let greet = function(){
//     let msg = 'Good Morning';
//     console.log(msg);
// };
// greet();


//--------------------LOCAL STORAGE AND SESSION STORAGE-------------------------------//
//local storage for simple string
// let empName = 'John';
//set
// console.log(localStorage.getItem('name'));
//delete the key
// localStorage.removeItem('name');
//clear
// localStorage.clear();
//local storage with an array
//1 let colors = ['white','black','silver','purple','yellow'];
// localStorage.setItem('colors',colors);
//2
// let colors = [{id : 1, name : 'white'},
//              {id : 2, name : 'black'},
//              {id :3, name : 'blue'},
//              {id : 4, name : 'yellow'}];

// localStorage.setItem('colors',JSON.stringify(colors));
// let thecolors = JSON.parse((localStorage.getItem('colors')));
// console.log(thecolors);

//Session storage with simple string
// let studentName = 'Rajan';
// sessionStorage.setItem('name',studentName);







//---------------------------FILTER,MAPS,REDUCE------------------------------//
// const ages = [32,33,16,40];
// const newArr = ages.filter(checkAdult);
// function checkAdult(age){
//     return age>=18;
// }

//--------------------setInterval,setTime,clearInterval--------------------//
let greet = () {
    console.log('Hello Welcome to Js');
};

                                      
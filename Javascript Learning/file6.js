console.log('we are in tut7.js and lets discus about arrays');
let marks = [34,23,24,93,73,25];
const fruits = ['orange','Apple','pineapple'];
const mixed = ['str',89,[3,5]];
const arr = new Array(23,123,21,'orange');
console.log(arr);
console.log(mixed);
console.log(fruits[1]);
console.log(arr.length);
console.log(Array.isArray('gjgg'));
arr[0] = 'harry';
console.log(arr);
let arrelement = arr[0];
console.log('element :', arrelement);
console.log(arr);
let value = marks.indexOf(73);
console.log(value)
// Mutating or Modifying arrays
marks.push(3564);
marks.unshift(1009);
marks.pop();
marks.shift();
marks.splice(2,3);
marks.reverse();
let marks2 = [1,2,3,7];
marks = marks.concat(marks2)
console.log(marks);
let myobj = {
    naame: 'Abhi',
    channel: 'CodeWithHarry',
    isActive: true,
    marks: [1,5,3,6]

}
console.log(myobj);
console.log(myobj.isActive);









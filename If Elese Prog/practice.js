//  for(let i=1;i<=4;i++){
//  console.log(i);

    

// }

// let n = parseInt(prompt("enter the number of n: "));
// let i = n;
// while(i>=1){
//     let j=1;
//     let string = "";
//     while(j<=i){
//         string += j+" ";
//         j = j+1;
//     }
//     console.log(string);
//     i--;
// }
//------------------------------------------------------//
// let n = parseInt(prompt("enter the number of n: "));
// let i = n;
// while(i>=1){
//     let j=1;
//     let string = "";
//     while(j<=i){
//         string += j+" ";
//         j = j+1;
//     }
//     console.log(string);
//     i--;
// }

//---------------------------------------------------//
let n = parseInt(prompt("enter the number of n: "));
let string = "";
for (let i = 1; i <= n; i++) {
    
    

  for (let j = 0; j < i; j++) {
    if(i%2==0){

        string += `*  `;
    }
    else{
        string += `${i}  `;
    }

  }
  
  string +=` \n`;

} 

console.log(string);




   













    
    










     


 



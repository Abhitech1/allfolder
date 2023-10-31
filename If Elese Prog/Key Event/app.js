//keyup event Example
// let textBox = document.querySelector('username');
// textBox.addEventListener('keyup',function(){
//     let textEntered = textBox.value ;
//     let messageElement = document.querySelector('#msg');
//     messageElement.innerText = textEntered;
//     document.querySelector('#msg').innerText = textEntered;

// });

function myFirstFunc(){
    var y = document.querySelector("#username").value;
    document.querySelector("#msg").innerHTML = y;
}
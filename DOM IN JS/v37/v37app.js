let numberEl = document.getElementById('req-number');
numberEl.addEventListener('onkeyup',function(){
    let theNumber = Number(numberEl.value);
    document.querySelector('#number').innerHTML = theNumber;
    calculate();
});

let rangeEl = document.querySelector('#multiplier');
rangeEl.addEventListener('input',function(){
    let selectedMultiplier = Number(rangeEl.value);
    document.querySelector('#multi').innerText = selectedMultiplier;
    calculate();


});

//calculate
let calculate = () =>{
    let theNumber = Number(document.querySelector('#number').innerText);
    let multiplier = Number(document.querySelector('#multi').innerText);
    let mathResult = theNumber * multiplier;
    document.querySelector('#result').innerHTML = mathResult;
    calculate();
};
//Form Validation
let registrationForm = document.querySelector('#register-form');
registrationForm.addEventListener('submit',function(event){
    event.preventDefault(); //stops auto form submission
    
    validateForm();
});

let validateForm = () => {
    checkUserName();

};
let checkUserName = () => {
    let inputEl = document.querySelector('#username');
    let inputFeedbackEl = document.querySelector('#username-feedback');
    let regExp = /^[a-zA-Z0-9] {4,10}$/;
    if(regExp.test(inputEl.value)){
        makeValid(inputEl,inputFeedbackEl);

    }
    else{
        makeInValid(inputEl,inputFeedbackEl);
    }

};

//make Valid
let makeValid = (inputEl,inputFeedbackEl) => {
    inputEl.classList.add('is-form-valid');
    inputEl.classList.remove('is-form-invalid');
    inputFeedbackEl.classList.add('text-success');
    inputFeedbackEl.classList.remove('text-danger');
    inputFeedbackEl.innerText = 'Looks Good';


};
//make InValid
let makeIvalid = (inputEl,inputFeedbackEl) => {
    inputEl.classList.remove('is-form-valid');
    inputEl.classList.add('is-form-valid');
    inputFeedbackEl.classList.remove('text-success');
    inputFeedbackEl.classList.add('text-danger');
    inputFeedbackEl.innerText = `Please Enter a ${inputEl.placeholder}`;


};


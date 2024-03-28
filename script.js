const passwordSpan = document.querySelector('#passwordSpan + span.error');
let confirmSpan = document.querySelector('#confirmPass + span.error');
const passwordInput = document.querySelector('#userPass');
const confirmPasswordInput = document.querySelector('#confirmPass');
const registerButton = document.querySelector('.register-button')


confirmPasswordInput.addEventListener('input', (e) => {
    if(confirmPasswordInput.value === passwordInput.value){
        confirmSpan.textContent = 'Passwords match!';
        confirmSpan.setAttribute('class', 'success');
    }
    else{
        confirmSpan.textContent = 'Passwords do not match!';
        confirmSpan.setAttribute('class', 'error')
    }
});


passwordInput.addEventListener('input', (e) => {
    if(confirmPasswordInput.value === passwordInput.value){
        confirmSpan.textContent = 'Passwords match!';
        confirmSpan.setAttribute('class', 'success');
    }
    else{
        confirmSpan.textContent = 'Passwords do not match!';
        confirmSpan.setAttribute('class', 'error')
    }
});

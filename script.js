const form = document.querySelector('form');
const login = document.querySelector('.already-signed-up span');
const phoneNumber = document.querySelector('#phone-number');

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let passOne = document.querySelector('#password').value
    let passTwo = document.querySelector('#confirm-password').value
    let name = document.querySelector('#first-name').value
    
    if (passOne == passTwo) {
        alert(`Hello ${name}, thanks for stopping by! This is not a real form. The default form behaviour has been disabled.`)
    } else {
        alert(`Oops! The passwords do not match. Please try again`)
    }

    clearInputs()
});

login.addEventListener('click', () => {
    alert('This is not a real form. Thanks for stopping by!')
});

const inputs = document.querySelectorAll('input');
function clearInputs() {
    inputs.forEach(input => {
        input.value = ''
    });
}
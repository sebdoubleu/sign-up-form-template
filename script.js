// const button = document.querySelector('button');
// const inputs = document.querySelectorAll('input');

// button.addEventListener('click', () => {
//     let formData = {};
//     inputs.forEach(e => {
//         if (e.name == 'email' && !e.value.includes('@')) {
//             alert('Invalid email!');
//             return;
//         }
//         formData[e.name] = e.value;
//         e.value = '';
//     });
//     alert(`This is a test form. You submitted:
//     First Name: ${formData['first-name']}
//     Last Name: ${formData['last-name']}
//     Email: ${formData['email']}
//     Phone Number: ${formData['phone-number']}
//     Password: Hidden
//     Confirm Password: Hidden`);
// });

const login = document.querySelector('.already-signed-up span');

login.addEventListener('click', () => {
    alert('This is not a real form. Thanks for stopping by!')
});
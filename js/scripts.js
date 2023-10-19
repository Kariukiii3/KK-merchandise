// checks whether the passwords correspond for sign up
const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        if (password !== confirmPassword) {
            event.preventDefault();
            alert('Passwords do not match. Please re-enter your password.');
        }
    });
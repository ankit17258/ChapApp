document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.querySelector('.register-container form');

    registerForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting and reloading the page

        // Get values from the form
        const fullName = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Create an object to store user information
        const user = {
            username: fullName,
            email: email,
            password: password
        };

        // Check if the user already exists in local storage
        const users = JSON.parse(localStorage.getItem('users')) || [];

        // Check if the email is already registered
        const existingUser = users.find(u => u.email === email);
        if (existingUser) {
            alert('This email is already registered. Please use a different email.');
            return;
        }

        // Add the new user to the array
        users.push(user);

        // Store the updated array in local storage
        localStorage.setItem('users', JSON.stringify(users));

        // Show a success message
        alert('Registered successfully! Click on Login button to login.');
    });
});
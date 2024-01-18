document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.login-container form');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting and reloading the page

        // Get values from the form
        const enteredUsername = document.getElementById('username').value;
        const enteredPassword = document.getElementById('password').value;

        // Check if the user exists in local storage
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const authenticatedUser = users.find(user => user.username === enteredUsername && user.password === enteredPassword);

        if (authenticatedUser) {
            // Redirect to the index.html page or any other destination
            window.location.href = "usertable.html?username=" + encodeURIComponent(enteredUsername) + "&password=" + encodeURIComponent(enteredPassword);
        } else {
            // Display an alert if the user is not found
            alert("User doesn't exist. Please register first.");
        }
    });
});

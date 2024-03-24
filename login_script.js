// document.addEventListener("DOMContentLoaded", function() {
//     // Add event listener to the form
//     document.querySelector(".login-form").addEventListener("submit", function(event) {
//         // Prevent the default form submission behavior
//         event.preventDefault();

//         // Get the values of username and password fields
//         var username = document.getElementById("username").value;
//         var password = document.getElementById("password").value;

//         // For demonstration purposes, display the entered username and password
//         alert("Username: " + username + "\nPassword: " + password);

//         // You can replace the alert with code to send the username and password to a server for validation
//         // Example AJAX request:
//         /*
//         var xhr = new XMLHttpRequest();
//         xhr.open("POST", "login.php", true);
//         xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//         xhr.onreadystatechange = function() {
//             if (xhr.readyState === 4 && xhr.status === 200) {
//                 // Handle the server response here
//             }
//         };
//         xhr.send("username=" + encodeURIComponent(username) + "&password=" + encodeURIComponent(password));
//         */
//     });
// });

// Function to handle login form submission
function handleLogin(event) {
    event.preventDefault(); // Prevent default form submission

    // Get the username and password entered by the user
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if username and password are correct
    if (username === 'exampleuser' && password === 'examplepassword') {
        // If correct, redirect to dashboard page
        window.location.href = 'dashboard.html';
    } else {
        // If incorrect, display error message
        alert('Invalid username or password. Please try again.');
    }
}

// Add event listener to the login form
document.querySelector('.login-form').addEventListener('submit', handleLogin);


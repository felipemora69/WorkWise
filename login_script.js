// Function to handle login form submission
function handleLogin(event) {
    event.preventDefault(); // Prevent default form submission

    // Get the username and password entered by the user
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if username and password are correct
    if (username === 'exampleuser' && password === 'examplepassword') {
        // Determine the role of the user (assuming you have this information)
        const userRole = 'owner'; // Replace 'owner' with the actual role retrieved from your backend
        
        // Redirect based on user role
        if (userRole === 'owner') {
            window.location.href = 'owner_profile.html';
        } else if (userRole === 'coworker') {
            window.location.href = 'coworker_profile.html';
        } else {
            // Default redirection if role is not recognized
            window.location.href = 'profile.html';
        }
    } else {
        // If incorrect, display error message
        alert('Invalid username or password. Please try again.');
    }
}

// Add event listener to the login form
document.querySelector('.login-form').addEventListener('submit', handleLogin);

// Add event listener to the login form
document.querySelector('.login-form').addEventListener('submit', handleLogin);
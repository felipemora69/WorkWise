// Function to reset the checkboxes
function resetCheckboxes() {
    const ownerCheckbox = document.getElementById("owner");
    const coworkerCheckbox = document.getElementById("coworker");
    ownerCheckbox.disabled = false;
    coworkerCheckbox.disabled = false;
}

// Event listener for checkbox changes
document.getElementById("owner").addEventListener("change", function(event) {
    const coworkerCheckbox = document.getElementById("coworker");
    if (this.checked) {
        coworkerCheckbox.checked = false; // Uncheck coworker checkbox if owner checkbox is checked
        coworkerCheckbox.disabled = true; // Disable coworker checkbox
    } else {
        coworkerCheckbox.disabled = false; // Enable coworker checkbox if owner checkbox is unchecked
    }
});

document.getElementById("coworker").addEventListener("change", function(event) {
    const ownerCheckbox = document.getElementById("owner");
    if (this.checked) {
        ownerCheckbox.checked = false; // Uncheck owner checkbox if coworker checkbox is checked
        ownerCheckbox.disabled = true; // Disable owner checkbox
    } else {
        ownerCheckbox.disabled = false; // Enable owner checkbox if coworker checkbox is unchecked
    }
});

// Function to navigate to the profile page
function goToProfilePage() {
    // Smoothly fade out the signup page
    const signupContainer = document.querySelector('.container');
    signupContainer.style.transition = 'opacity 5s'; // Transition duration
    signupContainer.style.opacity = 1;
    setTimeout(() => {
        // Redirect to the profile page
        window.location.href = 'coworker-profile.html';
    }, 5000); // Wait for the transition to complete
}

// Function to validate password
function isValidPassword(password) {
    console.log("Validating password:", password);
    // Password must contain at least one capital letter, one lowercase letter, one number, and be at least 8 characters long
    var capitalRegex = /[A-Z]/;
    var lowercaseRegex = /[a-z]/;
    var numberRegex = /[0-9]/;
    var isValid = password.length >= 8 && capitalRegex.test(password) && lowercaseRegex.test(password) && numberRegex.test(password);
    console.log("Password is valid:", isValid);
    console.log("Length:", password.length);
    console.log("Capital:", capitalRegex.test(password));
    console.log("Lowercase:", lowercaseRegex.test(password));
    console.log("Number:", numberRegex.test(password));
    return isValid;
}

// Event listener for form submission
document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var fullname = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;
    var isOwner = document.getElementById("owner").checked;

    // Validate password
    if (!isValidPassword(password)) {
        document.getElementById("password-error").textContent = "Password must contain at least one capital letter, one lowercase letter, one number, and be at least 8 characters long.";
        return; // Stop form submission
    }

    // Store user information in localStorage
    var userData = {
        fullname: fullname,
        email: email,
        phone: phone,
        password: password,
        userType: isOwner ? "owner" : "coworker"
    };
    localStorage.setItem("userData", JSON.stringify(userData));

    // Redirect to respective profile page
    var redirectUrl = isOwner ? 'owner-profile.html' : 'coworker-profile.html'; // Corrected URL
    window.location.href = redirectUrl;
});
document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var fullname = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;
    var isOwner = document.getElementById("owner").checked;

    // Validate password
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
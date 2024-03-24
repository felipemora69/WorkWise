document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var fullname = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var subject = "New Office Rental Sign Up";
    var body = "Full Name: " + fullname + "\nEmail: " + email + "\nPassword: " + password;

    var mailtoLink = "mailto:your_email@example.com" + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

    // Open default email client with pre-filled email
    window.location.href = mailtoLink;

    alert("Thank you for signing up! We will contact you shortly.");
    document.getElementById("signup-form").reset(); // Clear form fields on successful submission
});

//Redirect the page to their respective profile, when they select one of the options betwwen owner or coworker.
document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var fullname = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;
    var isOwner = document.getElementById("owner").checked;

    var redirectUrl = isOwner ? 'owner.html' : 'profile.html';

    // Redirect based on user type
    window.location.href = redirectUrl + '?fullname=' + encodeURIComponent(fullname) + '&email=' + encodeURIComponent(email) + '&phone=' + encodeURIComponent(phone);

    // Optional: You can also send the password securely to the server for authentication
});

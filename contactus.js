const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.contact-form form');

  form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the form from submitting

      // Validate the form fields
      const name = form.querySelector('input[name="name"]').value.trim();
      const email = form.querySelector('input[name="email"]').value.trim();
      const phone = form.querySelector('input[name="phone"]').value.trim();
      const message = form.querySelector('textarea[name="message"]').value.trim();

      if (name === '') {
          showError('Please enter your name.');
      } else if (email === '') {
          showError('Please enter your email address.');
      } else if (!isValidEmail(email)) {
          showError('Please enter a valid email address.');
      } else if (phone === '') {
          showError('Please enter your phone number.');
      } else if (!isValidPhone(phone)) {
          showError('Please enter a valid phone number.');
      } else if (message === '') {
          showError('Please enter your message.');
      } else {
          // If all fields are valid, you can submit the form here
          // For demonstration, let's log the form data
          console.log('Name:', name);
          console.log('Email:', email);
          console.log('Phone:', phone);
          console.log('Message:', message);

          // You can also submit the form using AJAX or any other method here
          // Example: form.submit();
      }
  });

  function showError(message) {
      alert(message);
  }

  function isValidEmail(email) {
      // This is a simple email validation function, you can replace it with a more sophisticated one if needed
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
  }

  function isValidPhone(phone) {
      // This is a simple phone number validation function, you can replace it with a more sophisticated one if needed
      const phoneRegex = /^\d{10}$/;
      return phoneRegex.test(phone);
  }
});

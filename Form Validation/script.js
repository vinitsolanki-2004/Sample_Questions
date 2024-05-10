function validateForm(event) {
    event.preventDefault();

    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var gender = document.getElementById("gender").value;

    var nameError = document.getElementById("name-error");
    var emailError = document.getElementById("email-error");
    var genderError = document.getElementById("gender-error");

    var valid = true;

    // Reset error messages
    nameError.textContent = "";
    emailError.textContent = "";
    genderError.textContent = "";

    // Validate name
    if (name === "") {
      nameError.textContent = "Name is required";
      valid = false;
    }

    // Validate email
    if (email === "") {
      emailError.textContent = "Email is required";
      valid = false;
    } else if (!isValidEmail(email)) {
      emailError.textContent = "Invalid email format";
      valid = false;
    }

    // Validate gender
    if (gender === "") {
      genderError.textContent = "Gender is required";
      valid = false;
    }

    // If form is valid, show registration details
    if (valid) {
      showRegistrationDetails(name, email, gender);
    }
  }

  function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function showRegistrationDetails(name, email, gender) {
    var details = `
<h3>Registration Details:</h3>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Gender:</strong> ${gender}</p>
`;
    document.getElementById("registration-details").innerHTML = details;
  }
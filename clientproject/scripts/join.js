document.addEventListener("DOMContentLoaded", function () {
  const joinForm = document.getElementById("joinForm");

  joinForm.addEventListener("submit", function (event) {
    event.preventDefault();
    if (validateForm()) {
      // Process the form data
      console.log("Form submitted");
    }
  });

  function validateForm() {
    const inputs = joinForm.elements;
    let isValid = true;

    for (const input of inputs) {
      const errorElement = document.getElementById(input.name + "Error");
      if (input.checkValidity()) {
        errorElement.classList.remove("active");
      } else {
        errorElement.textContent = input.validationMessage;
        errorElement.classList.add("active");
        isValid = false;
      }
    }

    return isValid;
  }
});

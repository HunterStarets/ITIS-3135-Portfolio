$(document).ready(function () {
  const joinForm = $("#joinForm");
  joinForm.validate({
    rules: {
      firstName: {
        required: true,
      },
      lastName: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      phone: {
        required: true,
      },
      dob: {
        required: true,
        date: true,
      },
    },
    messages: {
      firstName: {
        required: "Please enter your first name",
      },
      lastName: {
        required: "Please enter your last name",
      },
      email: {
        required: "Please enter your email address",
        email: "Please enter a valid email address",
      },
      phone: {
        required: "Please enter your phone number",
      },
      dob: {
        required: "Please enter your date of birth",
        date: "Please enter a valid date",
      },
    },
    errorPlacement: function (error, element) {
      const errorElement = $("#" + element.attr("name") + "Error");
      error.appendTo(errorElement);
      errorElement.addClass("active");
    },
    submitHandler: function () {
      console.log("Form submitted");
    },
  });
});

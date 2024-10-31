let input = document.getElementById("inputField");
let form = document.getElementById("myForm");

// JavaScript code for form validation

let inputRegex = /^[a-zA-Z0-9]*$/
form.addEventListener('submit', function(submit) {
  if (inputRegex.test(input.value)) {
    if (window.confirm("Are you sure you want to submit the form?")) {
      console.log("Submitted data: " + input.value);
      window.alert("form submitted");
      let formInfo = info.value;
    } else {
      submit.preventDefault()
    };
  } else {
    submit.preventDefault();
    window.alert("please enter alphanumeric input");
  };
})
inputRegex.test(input.value);

	// Prevent form from submitting

      // Retrieve the input field value

      // Regular expression pattern for alphanumeric input

      // Check if the input value matches the pattern

        // Valid input: display confirmation and submit the form

        // Invalid input: display error message
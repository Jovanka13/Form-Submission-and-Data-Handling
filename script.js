//Empty array for storing data
let formDataArray = [];

const form = document.getElementById("form");

function handleFormSubmission(event) {
  event.preventDefault();

  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  const usernameVal = username.value.trim();
  const emailVal = email.value.trim();
  const passwordVal = password.value.trim();

  //Create object
  const formData = {
    name: usernameVal,
    email: emailVal,
    password: passwordVal,
  };

  //Add object into array
  formDataArray.push(formData);

  //Print the array in browser console
  console.log("Form Data:", formDataArray);

  form.reset();

  //Display message of form submited
  alert("Form successfully submited");
}

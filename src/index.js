const submitButton = document.getElementById("submitButton");
const email = document.getElementById("email-address");
const error = document.querySelector(".error");
let regex = new RegExp(/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/im);
function handleSubmit() {
  console.log(email.value);

  if (email.value === "" || !regex.test(email.value)) {
    error.style.display = "block";
  } else {
    error.style.display = "none";
  }
}

submitButton.addEventListener("click", handleSubmit);

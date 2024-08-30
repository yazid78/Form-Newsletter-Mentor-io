const submitButton = document.getElementById("submitButton");
const email = document.getElementById("email-address");
const error = document.querySelector(".error");
const modal = document.querySelector(".modal");
const dismiss = document.getElementById("btnDismiss");
const test = document.querySelector(".test");

let regex = new RegExp(/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/im);

function handleSubmit() {
  console.log(email.value);

  if (email.value === "" || !regex.test(email.value)) {
    error.style.display = "block";
  } else {
    error.style.display = "none";
    modal.style.visibility = "visible";
    test.style.visibility = "hidden";
  }
}
function Dismiss() {
  modal.style.visibility = "hidden";
  test.style.visibility = "visible";
}
submitButton.addEventListener("click", handleSubmit);
dismiss.addEventListener("click", Dismiss);

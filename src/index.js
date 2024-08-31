const submitButton = document.getElementById("submitButton");
const email = document.getElementById("email-address");
const error = document.querySelector(".error");
const modal = document.querySelector(".modal");
const dismiss = document.getElementById("btnDismiss");
const newsletter = document.querySelector(".test");
const emailSend = document.querySelector(".emailSend");

let regex = new RegExp(/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/im);

function handleSubmit() {
  console.log(email.value);

  if (email.value === "" || !regex.test(email.value)) {
    error.style.display = "block";
  } else {
    error.style.display = "none";
    modal.style.visibility = "visible";
    newsletter.style.visibility = "hidden";
    emailSend.textContent = email.value;
  }
}
function Dismiss() {
  modal.style.visibility = "hidden";
  newsletter.style.visibility = "visible";
}
submitButton.addEventListener("click", handleSubmit);
dismiss.addEventListener("click", Dismiss);

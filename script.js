// TOGGLE CLASSES: invalid-message, email-input-invalid

const emailLabel = document.querySelector(".email-label");
const emailInput = document.querySelector(".email-input");
const newsletterForm = document.querySelector("form");

function validateEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
}

newsletterForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validateEmail(emailInput.value)) {
    //TO DO: show the modal
    newsletterForm.submit();
  } else {
    emailLabel.classList.toggle("invalid-message");
    emailInput.classList.toggle("email-input-invalid");
  }
});

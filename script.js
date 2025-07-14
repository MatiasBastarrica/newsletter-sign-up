// TOGGLE CLASSES: invalid-message, email-input-invalid

const emailLabel = document.querySelector(".email-label");
const emailInput = document.querySelector(".email-input");
const newsletterForm = document.querySelector("form");
const successModal = document.querySelector(".success-message");
const successModalBtn = successModal.querySelector("button");

function validateEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
}

function toggleSuccessModal() {
  successModal.classList.toggle("hide");
}

newsletterForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validateEmail(emailInput.value)) {
    // newsletterForm.submit();
    toggleSuccessModal();
  } else {
    emailLabel.classList.toggle("invalid-message");
    emailInput.classList.toggle("email-input-invalid");
  }
});

successModalBtn.addEventListener("click", toggleSuccessModal);

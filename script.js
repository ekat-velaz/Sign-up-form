const pswdInput = document.getElementById("password");
const toggleBtn = document.getElementById("toggle-btn");
const confirmPswdInput = document.getElementById("confirm-password");
const toggleConfirmBtn = document.getElementById("toggle-confirm-btn");
const validationContainer = document.querySelector(".validation");
// const submitBtn = document.querySelector(".submit-button");
const confirmError = document.querySelector(".confirm-error");

const lowerCase = document.getElementById("lower");
const upperCase = document.getElementById("upper");
const digit = document.getElementById("number");
const specialChar = document.getElementById("special");
const minLength = document.getElementById("min");

toggleBtn.addEventListener("click", () => {
  togglePassword(pswdInput, toggleBtn);
});

toggleConfirmBtn.addEventListener("click", () => {
  togglePassword(confirmPswdInput, toggleConfirmBtn);
});

function togglePassword(input, btn) {
  if (input.type === "password") {
    input.setAttribute("type", "text");
    btn.classList.add("hide");
  } else {
    input.setAttribute("type", "password");
    btn.classList.remove("hide");
  }
}

function checkPassword(data) {
  const lower = new RegExp("(?=.*[a-z])");
  const upper = new RegExp("(?=.*[A-Z])");
  const number = new RegExp("(?=.*[0-9])");
  const special = new RegExp("(?=.*[!@#$%^&*])");
  const length = new RegExp("(?=.{8,})");

  if (lower.test(data)) {
    lowerCase.classList.add("valid");
  } else {
    lowerCase.classList.remove("valid");
  }

  if (upper.test(data)) {
    upperCase.classList.add("valid");
  } else {
    upperCase.classList.remove("valid");
  }

  if (number.test(data)) {
    digit.classList.add("valid");
  } else {
    digit.classList.remove("valid");
  }

  if (special.test(data)) {
    specialChar.classList.add("valid");
  } else {
    specialChar.classList.remove("valid");
  }

  if (length.test(data)) {
    minLength.classList.add("valid");
  } else {
    minLength.classList.remove("valid");
  }
}

// submitBtn.addEventListener("click", (e) => {
//   e.preventDefault();
// });

function checkConfirmPassword(data) {
  if (data === pswdInput.value) {
    confirmError.textContent = "Password confirmed!";
    confirmError.classList.add("valid");
  } else {
    confirmError.textContent = "Passwords should match.";
    confirmError.classList.remove("valid");
  }
}

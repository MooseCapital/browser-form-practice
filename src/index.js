const form = document.querySelector("form");
const email = document.querySelector("#email");
const email_error = document.querySelector("#email-error");
let emailTimeout;
const emailError = () => {
  if (email.validity.valueMissing) {
    email_error.textContent = "* You need to enter an E-mail Address";
  } else if (email.validity.typeMismatch) {
    email_error.textContent = "* Follow the E-mail format: email@website.com";
  }
  email.classList.add("error");
};

email.addEventListener("input", () => {
  if (email.validity.valid) {
    email_error.textContent = "";
    email.classList.remove("error");
    // email.classList.add("correct");
  } else {
    clearTimeout(emailTimeout);
    emailTimeout = setTimeout(emailError, 2000);

    // email.classList.remove("correct");
  }
});

const country = document.querySelector("#country");
const country_error = document.querySelector("#country-error");
let countryTimeout;
const countryError = () => {
  if (country.validity.valueMissing) {
    country_error.textContent = "You need to enter a Country";
  } else if (country.validity.tooShort) {
    country_error.textContent = "Country name is too short";
  }
  country.classList.add("error");
};

country.addEventListener("input", () => {
  if (country.validity.valid) {
    country_error.textContent = "";
    country.classList.remove("error");
  } else {
    clearTimeout(countryTimeout);
    countryTimeout = setTimeout(countryError, 2000);
  }
});

const zipcode = document.querySelector("#zipcode");
const zipcode_error = document.querySelector("#zipcode-error");
let zipTimeout;
const zipCodeError = () => {
  if (zipcode.validity.valueMissing) {
    zipcode_error.textContent = "You need to enter a Zip Code";
  } else if (zipcode.validity.patternMismatch) {
    zipcode_error.textContent = "Please follow the zip code format: 53021";
  }
  zipcode.classList.add("error");
};

zipcode.addEventListener("input", () => {
  if (zipcode.validity.valid) {
    zipcode_error.textContent = "";
    zipcode.classList.remove("error");
  } else {
    clearTimeout(zipTimeout);
    zipTimeout = setTimeout(zipCodeError, 2000);
  }
});

const password = document.querySelector("#password");
const password_error = document.querySelector("#password-error");
let passTimeout;
const passWordError = () => {
  if (password.validity.valueMissing) {
    password_error.textContent = "You need to enter a password";
  } else if (password.validity.tooShort) {
    password_error.textContent = "Password is too short. 6-20 Characters";
  } else if (password.validity.tooLong) {
    password_error.textContent = "Password is too long. 6-20 Characters";
  }
  password.classList.add("error");
};

password.addEventListener("input", () => {
  if (password.validity.valid) {
    password_error.textContent = "";
    password.classList.remove("error");
    password.classList.add("correct");
  } else {
    clearTimeout(passTimeout);
    passTimeout = setTimeout(passWordError, 1000);
  }
});

const password_confirm = document.querySelector("#password-confirm");
const password_confirm_error = document.querySelector(
  "#password-confirm-error"
);

const passWordConfirmError = () => {
  if (password_confirm.validity.valueMissing) {
    password_confirm_error.textContent = "You need to match the password above";
  } else if (password_confirm.validity.tooShort) {
    password_confirm_error.textContent = "You need to match the password above";
  }
  password_confirm.classList.add("error");
  password_confirm.classList.remove("correct");
  password_confirm.classList.remove("validerror");
};

password_confirm.addEventListener("input", () => {
  if (password_confirm.validity.valid) {
    if (password_confirm.value === password.value) {
      password_confirm_error.textContent = "";
      password_confirm.classList.remove("error");
      password_confirm.classList.remove("validerror");
      password_confirm.classList.add("correct");
    } else {
      password_confirm_error.textContent = "Passwords do not match";
      password_confirm.classList.add("validerror");
    }
  } else {
    passWordConfirmError();
  }
});

// because we put novalidate on html form, the form submits with empty fields despite being empty, so we need to code a-submit listener on the form
// that will stop submit if wrong

form.addEventListener("submit", (event) => {
  if (
    !email.validity.valid ||
    !country.validity.valid ||
    !zipcode.validity.valid ||
    !password.validity.valid ||
    !password_confirm.validity.valid
  ) {
    if (email.validity.valueMissing) {
      email_error.textContent = "* You need to enter an E-mail Address";
      email.classList.add("error");
    }
    if (country.validity.valueMissing) {
      country_error.textContent = "You need to enter a Country";
      country.classList.add("error");
    }
    if (zipcode.validity.valueMissing) {
      zipcode_error.textContent = "You need to enter a Zip Code";
      zipcode.classList.add("error");
    }
    if (password.validity.valueMissing) {
      password_error.textContent = "You need to enter a password";
      password.classList.add("error");
    }
    if (password_confirm.validity.valueMissing) {
      password_confirm_error.textContent =
        "You need to match the password above";
      password_confirm.classList.add("error");
    }

    console.log("submit with invalid");
    event.preventDefault(); // prevents form submitting if any inputs are invalid
  }
  // fix
  window.open("https://moosecapital.github.io/browser-form-practice/");
});

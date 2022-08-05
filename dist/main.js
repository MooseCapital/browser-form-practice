/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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
  } else {
    window.open("https://moosecapital.github.io/browser-form-practice/");
    //sends to form
  }
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QjtBQUM1QixJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Jyb3dzZXItZm9ybS1wcmFjdGljZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XG5jb25zdCBlbWFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZW1haWxcIik7XG5jb25zdCBlbWFpbF9lcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZW1haWwtZXJyb3JcIik7XG5sZXQgZW1haWxUaW1lb3V0O1xuY29uc3QgZW1haWxFcnJvciA9ICgpID0+IHtcbiAgaWYgKGVtYWlsLnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xuICAgIGVtYWlsX2Vycm9yLnRleHRDb250ZW50ID0gXCIqIFlvdSBuZWVkIHRvIGVudGVyIGFuIEUtbWFpbCBBZGRyZXNzXCI7XG4gIH0gZWxzZSBpZiAoZW1haWwudmFsaWRpdHkudHlwZU1pc21hdGNoKSB7XG4gICAgZW1haWxfZXJyb3IudGV4dENvbnRlbnQgPSBcIiogRm9sbG93IHRoZSBFLW1haWwgZm9ybWF0OiBlbWFpbEB3ZWJzaXRlLmNvbVwiO1xuICB9XG4gIGVtYWlsLmNsYXNzTGlzdC5hZGQoXCJlcnJvclwiKTtcbn07XG5cbmVtYWlsLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG4gIGlmIChlbWFpbC52YWxpZGl0eS52YWxpZCkge1xuICAgIGVtYWlsX2Vycm9yLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBlbWFpbC5jbGFzc0xpc3QucmVtb3ZlKFwiZXJyb3JcIik7XG4gICAgLy8gZW1haWwuY2xhc3NMaXN0LmFkZChcImNvcnJlY3RcIik7XG4gIH0gZWxzZSB7XG4gICAgY2xlYXJUaW1lb3V0KGVtYWlsVGltZW91dCk7XG4gICAgZW1haWxUaW1lb3V0ID0gc2V0VGltZW91dChlbWFpbEVycm9yLCAyMDAwKTtcblxuICAgIC8vIGVtYWlsLmNsYXNzTGlzdC5yZW1vdmUoXCJjb3JyZWN0XCIpO1xuICB9XG59KTtcblxuY29uc3QgY291bnRyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY291bnRyeVwiKTtcbmNvbnN0IGNvdW50cnlfZXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvdW50cnktZXJyb3JcIik7XG5sZXQgY291bnRyeVRpbWVvdXQ7XG5jb25zdCBjb3VudHJ5RXJyb3IgPSAoKSA9PiB7XG4gIGlmIChjb3VudHJ5LnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xuICAgIGNvdW50cnlfZXJyb3IudGV4dENvbnRlbnQgPSBcIllvdSBuZWVkIHRvIGVudGVyIGEgQ291bnRyeVwiO1xuICB9IGVsc2UgaWYgKGNvdW50cnkudmFsaWRpdHkudG9vU2hvcnQpIHtcbiAgICBjb3VudHJ5X2Vycm9yLnRleHRDb250ZW50ID0gXCJDb3VudHJ5IG5hbWUgaXMgdG9vIHNob3J0XCI7XG4gIH1cbiAgY291bnRyeS5jbGFzc0xpc3QuYWRkKFwiZXJyb3JcIik7XG59O1xuXG5jb3VudHJ5LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG4gIGlmIChjb3VudHJ5LnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgY291bnRyeV9lcnJvci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgY291bnRyeS5jbGFzc0xpc3QucmVtb3ZlKFwiZXJyb3JcIik7XG4gIH0gZWxzZSB7XG4gICAgY2xlYXJUaW1lb3V0KGNvdW50cnlUaW1lb3V0KTtcbiAgICBjb3VudHJ5VGltZW91dCA9IHNldFRpbWVvdXQoY291bnRyeUVycm9yLCAyMDAwKTtcbiAgfVxufSk7XG5cbmNvbnN0IHppcGNvZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ppcGNvZGVcIik7XG5jb25zdCB6aXBjb2RlX2Vycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN6aXBjb2RlLWVycm9yXCIpO1xubGV0IHppcFRpbWVvdXQ7XG5jb25zdCB6aXBDb2RlRXJyb3IgPSAoKSA9PiB7XG4gIGlmICh6aXBjb2RlLnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xuICAgIHppcGNvZGVfZXJyb3IudGV4dENvbnRlbnQgPSBcIllvdSBuZWVkIHRvIGVudGVyIGEgWmlwIENvZGVcIjtcbiAgfSBlbHNlIGlmICh6aXBjb2RlLnZhbGlkaXR5LnBhdHRlcm5NaXNtYXRjaCkge1xuICAgIHppcGNvZGVfZXJyb3IudGV4dENvbnRlbnQgPSBcIlBsZWFzZSBmb2xsb3cgdGhlIHppcCBjb2RlIGZvcm1hdDogNTMwMjFcIjtcbiAgfVxuICB6aXBjb2RlLmNsYXNzTGlzdC5hZGQoXCJlcnJvclwiKTtcbn07XG5cbnppcGNvZGUuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcbiAgaWYgKHppcGNvZGUudmFsaWRpdHkudmFsaWQpIHtcbiAgICB6aXBjb2RlX2Vycm9yLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICB6aXBjb2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJlcnJvclwiKTtcbiAgfSBlbHNlIHtcbiAgICBjbGVhclRpbWVvdXQoemlwVGltZW91dCk7XG4gICAgemlwVGltZW91dCA9IHNldFRpbWVvdXQoemlwQ29kZUVycm9yLCAyMDAwKTtcbiAgfVxufSk7XG5cbmNvbnN0IHBhc3N3b3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwYXNzd29yZFwiKTtcbmNvbnN0IHBhc3N3b3JkX2Vycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwYXNzd29yZC1lcnJvclwiKTtcbmxldCBwYXNzVGltZW91dDtcbmNvbnN0IHBhc3NXb3JkRXJyb3IgPSAoKSA9PiB7XG4gIGlmIChwYXNzd29yZC52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcbiAgICBwYXNzd29yZF9lcnJvci50ZXh0Q29udGVudCA9IFwiWW91IG5lZWQgdG8gZW50ZXIgYSBwYXNzd29yZFwiO1xuICB9IGVsc2UgaWYgKHBhc3N3b3JkLnZhbGlkaXR5LnRvb1Nob3J0KSB7XG4gICAgcGFzc3dvcmRfZXJyb3IudGV4dENvbnRlbnQgPSBcIlBhc3N3b3JkIGlzIHRvbyBzaG9ydC4gNi0yMCBDaGFyYWN0ZXJzXCI7XG4gIH0gZWxzZSBpZiAocGFzc3dvcmQudmFsaWRpdHkudG9vTG9uZykge1xuICAgIHBhc3N3b3JkX2Vycm9yLnRleHRDb250ZW50ID0gXCJQYXNzd29yZCBpcyB0b28gbG9uZy4gNi0yMCBDaGFyYWN0ZXJzXCI7XG4gIH1cbiAgcGFzc3dvcmQuY2xhc3NMaXN0LmFkZChcImVycm9yXCIpO1xufTtcblxucGFzc3dvcmQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcbiAgaWYgKHBhc3N3b3JkLnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgcGFzc3dvcmRfZXJyb3IudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIHBhc3N3b3JkLmNsYXNzTGlzdC5yZW1vdmUoXCJlcnJvclwiKTtcbiAgICBwYXNzd29yZC5jbGFzc0xpc3QuYWRkKFwiY29ycmVjdFwiKTtcbiAgfSBlbHNlIHtcbiAgICBjbGVhclRpbWVvdXQocGFzc1RpbWVvdXQpO1xuICAgIHBhc3NUaW1lb3V0ID0gc2V0VGltZW91dChwYXNzV29yZEVycm9yLCAxMDAwKTtcbiAgfVxufSk7XG5cbmNvbnN0IHBhc3N3b3JkX2NvbmZpcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Bhc3N3b3JkLWNvbmZpcm1cIik7XG5jb25zdCBwYXNzd29yZF9jb25maXJtX2Vycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgXCIjcGFzc3dvcmQtY29uZmlybS1lcnJvclwiXG4pO1xuXG5jb25zdCBwYXNzV29yZENvbmZpcm1FcnJvciA9ICgpID0+IHtcbiAgaWYgKHBhc3N3b3JkX2NvbmZpcm0udmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XG4gICAgcGFzc3dvcmRfY29uZmlybV9lcnJvci50ZXh0Q29udGVudCA9IFwiWW91IG5lZWQgdG8gbWF0Y2ggdGhlIHBhc3N3b3JkIGFib3ZlXCI7XG4gIH0gZWxzZSBpZiAocGFzc3dvcmRfY29uZmlybS52YWxpZGl0eS50b29TaG9ydCkge1xuICAgIHBhc3N3b3JkX2NvbmZpcm1fZXJyb3IudGV4dENvbnRlbnQgPSBcIllvdSBuZWVkIHRvIG1hdGNoIHRoZSBwYXNzd29yZCBhYm92ZVwiO1xuICB9XG4gIHBhc3N3b3JkX2NvbmZpcm0uY2xhc3NMaXN0LmFkZChcImVycm9yXCIpO1xuICBwYXNzd29yZF9jb25maXJtLmNsYXNzTGlzdC5yZW1vdmUoXCJjb3JyZWN0XCIpO1xuICBwYXNzd29yZF9jb25maXJtLmNsYXNzTGlzdC5yZW1vdmUoXCJ2YWxpZGVycm9yXCIpO1xufTtcblxucGFzc3dvcmRfY29uZmlybS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuICBpZiAocGFzc3dvcmRfY29uZmlybS52YWxpZGl0eS52YWxpZCkge1xuICAgIGlmIChwYXNzd29yZF9jb25maXJtLnZhbHVlID09PSBwYXNzd29yZC52YWx1ZSkge1xuICAgICAgcGFzc3dvcmRfY29uZmlybV9lcnJvci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICBwYXNzd29yZF9jb25maXJtLmNsYXNzTGlzdC5yZW1vdmUoXCJlcnJvclwiKTtcbiAgICAgIHBhc3N3b3JkX2NvbmZpcm0uY2xhc3NMaXN0LnJlbW92ZShcInZhbGlkZXJyb3JcIik7XG4gICAgICBwYXNzd29yZF9jb25maXJtLmNsYXNzTGlzdC5hZGQoXCJjb3JyZWN0XCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXNzd29yZF9jb25maXJtX2Vycm9yLnRleHRDb250ZW50ID0gXCJQYXNzd29yZHMgZG8gbm90IG1hdGNoXCI7XG4gICAgICBwYXNzd29yZF9jb25maXJtLmNsYXNzTGlzdC5hZGQoXCJ2YWxpZGVycm9yXCIpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBwYXNzV29yZENvbmZpcm1FcnJvcigpO1xuICB9XG59KTtcblxuLy8gYmVjYXVzZSB3ZSBwdXQgbm92YWxpZGF0ZSBvbiBodG1sIGZvcm0sIHRoZSBmb3JtIHN1Ym1pdHMgd2l0aCBlbXB0eSBmaWVsZHMgZGVzcGl0ZSBiZWluZyBlbXB0eSwgc28gd2UgbmVlZCB0byBjb2RlIGEtc3VibWl0IGxpc3RlbmVyIG9uIHRoZSBmb3JtXG4vLyB0aGF0IHdpbGwgc3RvcCBzdWJtaXQgaWYgd3JvbmdcblxuZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCkgPT4ge1xuICBpZiAoXG4gICAgIWVtYWlsLnZhbGlkaXR5LnZhbGlkIHx8XG4gICAgIWNvdW50cnkudmFsaWRpdHkudmFsaWQgfHxcbiAgICAhemlwY29kZS52YWxpZGl0eS52YWxpZCB8fFxuICAgICFwYXNzd29yZC52YWxpZGl0eS52YWxpZCB8fFxuICAgICFwYXNzd29yZF9jb25maXJtLnZhbGlkaXR5LnZhbGlkXG4gICkge1xuICAgIGlmIChlbWFpbC52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcbiAgICAgIGVtYWlsX2Vycm9yLnRleHRDb250ZW50ID0gXCIqIFlvdSBuZWVkIHRvIGVudGVyIGFuIEUtbWFpbCBBZGRyZXNzXCI7XG4gICAgICBlbWFpbC5jbGFzc0xpc3QuYWRkKFwiZXJyb3JcIik7XG4gICAgfVxuICAgIGlmIChjb3VudHJ5LnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xuICAgICAgY291bnRyeV9lcnJvci50ZXh0Q29udGVudCA9IFwiWW91IG5lZWQgdG8gZW50ZXIgYSBDb3VudHJ5XCI7XG4gICAgICBjb3VudHJ5LmNsYXNzTGlzdC5hZGQoXCJlcnJvclwiKTtcbiAgICB9XG4gICAgaWYgKHppcGNvZGUudmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XG4gICAgICB6aXBjb2RlX2Vycm9yLnRleHRDb250ZW50ID0gXCJZb3UgbmVlZCB0byBlbnRlciBhIFppcCBDb2RlXCI7XG4gICAgICB6aXBjb2RlLmNsYXNzTGlzdC5hZGQoXCJlcnJvclwiKTtcbiAgICB9XG4gICAgaWYgKHBhc3N3b3JkLnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xuICAgICAgcGFzc3dvcmRfZXJyb3IudGV4dENvbnRlbnQgPSBcIllvdSBuZWVkIHRvIGVudGVyIGEgcGFzc3dvcmRcIjtcbiAgICAgIHBhc3N3b3JkLmNsYXNzTGlzdC5hZGQoXCJlcnJvclwiKTtcbiAgICB9XG4gICAgaWYgKHBhc3N3b3JkX2NvbmZpcm0udmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XG4gICAgICBwYXNzd29yZF9jb25maXJtX2Vycm9yLnRleHRDb250ZW50ID1cbiAgICAgICAgXCJZb3UgbmVlZCB0byBtYXRjaCB0aGUgcGFzc3dvcmQgYWJvdmVcIjtcbiAgICAgIHBhc3N3b3JkX2NvbmZpcm0uY2xhc3NMaXN0LmFkZChcImVycm9yXCIpO1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKFwic3VibWl0IHdpdGggaW52YWxpZFwiKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyBwcmV2ZW50cyBmb3JtIHN1Ym1pdHRpbmcgaWYgYW55IGlucHV0cyBhcmUgaW52YWxpZFxuICB9IGVsc2Uge1xuICAgIHdpbmRvdy5vcGVuKFwiaHR0cHM6Ly9tb29zZWNhcGl0YWwuZ2l0aHViLmlvL2Jyb3dzZXItZm9ybS1wcmFjdGljZS9cIik7XG4gICAgLy9zZW5kcyB0byBmb3JtXG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
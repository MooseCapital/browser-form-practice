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
  }
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QjtBQUM1QixJQUFJO0FBQ0o7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9icm93c2VyLWZvcm0tcHJhY3RpY2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xuY29uc3QgZW1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VtYWlsXCIpO1xuY29uc3QgZW1haWxfZXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VtYWlsLWVycm9yXCIpO1xubGV0IGVtYWlsVGltZW91dDtcbmNvbnN0IGVtYWlsRXJyb3IgPSAoKSA9PiB7XG4gIGlmIChlbWFpbC52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcbiAgICBlbWFpbF9lcnJvci50ZXh0Q29udGVudCA9IFwiKiBZb3UgbmVlZCB0byBlbnRlciBhbiBFLW1haWwgQWRkcmVzc1wiO1xuICB9IGVsc2UgaWYgKGVtYWlsLnZhbGlkaXR5LnR5cGVNaXNtYXRjaCkge1xuICAgIGVtYWlsX2Vycm9yLnRleHRDb250ZW50ID0gXCIqIEZvbGxvdyB0aGUgRS1tYWlsIGZvcm1hdDogZW1haWxAd2Vic2l0ZS5jb21cIjtcbiAgfVxuICBlbWFpbC5jbGFzc0xpc3QuYWRkKFwiZXJyb3JcIik7XG59O1xuXG5lbWFpbC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuICBpZiAoZW1haWwudmFsaWRpdHkudmFsaWQpIHtcbiAgICBlbWFpbF9lcnJvci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgZW1haWwuY2xhc3NMaXN0LnJlbW92ZShcImVycm9yXCIpO1xuICAgIC8vIGVtYWlsLmNsYXNzTGlzdC5hZGQoXCJjb3JyZWN0XCIpO1xuICB9IGVsc2Uge1xuICAgIGNsZWFyVGltZW91dChlbWFpbFRpbWVvdXQpO1xuICAgIGVtYWlsVGltZW91dCA9IHNldFRpbWVvdXQoZW1haWxFcnJvciwgMjAwMCk7XG5cbiAgICAvLyBlbWFpbC5jbGFzc0xpc3QucmVtb3ZlKFwiY29ycmVjdFwiKTtcbiAgfVxufSk7XG5cbmNvbnN0IGNvdW50cnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvdW50cnlcIik7XG5jb25zdCBjb3VudHJ5X2Vycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb3VudHJ5LWVycm9yXCIpO1xubGV0IGNvdW50cnlUaW1lb3V0O1xuY29uc3QgY291bnRyeUVycm9yID0gKCkgPT4ge1xuICBpZiAoY291bnRyeS52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcbiAgICBjb3VudHJ5X2Vycm9yLnRleHRDb250ZW50ID0gXCJZb3UgbmVlZCB0byBlbnRlciBhIENvdW50cnlcIjtcbiAgfSBlbHNlIGlmIChjb3VudHJ5LnZhbGlkaXR5LnRvb1Nob3J0KSB7XG4gICAgY291bnRyeV9lcnJvci50ZXh0Q29udGVudCA9IFwiQ291bnRyeSBuYW1lIGlzIHRvbyBzaG9ydFwiO1xuICB9XG4gIGNvdW50cnkuY2xhc3NMaXN0LmFkZChcImVycm9yXCIpO1xufTtcblxuY291bnRyeS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuICBpZiAoY291bnRyeS52YWxpZGl0eS52YWxpZCkge1xuICAgIGNvdW50cnlfZXJyb3IudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIGNvdW50cnkuY2xhc3NMaXN0LnJlbW92ZShcImVycm9yXCIpO1xuICB9IGVsc2Uge1xuICAgIGNsZWFyVGltZW91dChjb3VudHJ5VGltZW91dCk7XG4gICAgY291bnRyeVRpbWVvdXQgPSBzZXRUaW1lb3V0KGNvdW50cnlFcnJvciwgMjAwMCk7XG4gIH1cbn0pO1xuXG5jb25zdCB6aXBjb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN6aXBjb2RlXCIpO1xuY29uc3QgemlwY29kZV9lcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjemlwY29kZS1lcnJvclwiKTtcbmxldCB6aXBUaW1lb3V0O1xuY29uc3QgemlwQ29kZUVycm9yID0gKCkgPT4ge1xuICBpZiAoemlwY29kZS52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcbiAgICB6aXBjb2RlX2Vycm9yLnRleHRDb250ZW50ID0gXCJZb3UgbmVlZCB0byBlbnRlciBhIFppcCBDb2RlXCI7XG4gIH0gZWxzZSBpZiAoemlwY29kZS52YWxpZGl0eS5wYXR0ZXJuTWlzbWF0Y2gpIHtcbiAgICB6aXBjb2RlX2Vycm9yLnRleHRDb250ZW50ID0gXCJQbGVhc2UgZm9sbG93IHRoZSB6aXAgY29kZSBmb3JtYXQ6IDUzMDIxXCI7XG4gIH1cbiAgemlwY29kZS5jbGFzc0xpc3QuYWRkKFwiZXJyb3JcIik7XG59O1xuXG56aXBjb2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG4gIGlmICh6aXBjb2RlLnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgemlwY29kZV9lcnJvci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgemlwY29kZS5jbGFzc0xpc3QucmVtb3ZlKFwiZXJyb3JcIik7XG4gIH0gZWxzZSB7XG4gICAgY2xlYXJUaW1lb3V0KHppcFRpbWVvdXQpO1xuICAgIHppcFRpbWVvdXQgPSBzZXRUaW1lb3V0KHppcENvZGVFcnJvciwgMjAwMCk7XG4gIH1cbn0pO1xuXG5jb25zdCBwYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGFzc3dvcmRcIik7XG5jb25zdCBwYXNzd29yZF9lcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGFzc3dvcmQtZXJyb3JcIik7XG5sZXQgcGFzc1RpbWVvdXQ7XG5jb25zdCBwYXNzV29yZEVycm9yID0gKCkgPT4ge1xuICBpZiAocGFzc3dvcmQudmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XG4gICAgcGFzc3dvcmRfZXJyb3IudGV4dENvbnRlbnQgPSBcIllvdSBuZWVkIHRvIGVudGVyIGEgcGFzc3dvcmRcIjtcbiAgfSBlbHNlIGlmIChwYXNzd29yZC52YWxpZGl0eS50b29TaG9ydCkge1xuICAgIHBhc3N3b3JkX2Vycm9yLnRleHRDb250ZW50ID0gXCJQYXNzd29yZCBpcyB0b28gc2hvcnQuIDYtMjAgQ2hhcmFjdGVyc1wiO1xuICB9IGVsc2UgaWYgKHBhc3N3b3JkLnZhbGlkaXR5LnRvb0xvbmcpIHtcbiAgICBwYXNzd29yZF9lcnJvci50ZXh0Q29udGVudCA9IFwiUGFzc3dvcmQgaXMgdG9vIGxvbmcuIDYtMjAgQ2hhcmFjdGVyc1wiO1xuICB9XG4gIHBhc3N3b3JkLmNsYXNzTGlzdC5hZGQoXCJlcnJvclwiKTtcbn07XG5cbnBhc3N3b3JkLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG4gIGlmIChwYXNzd29yZC52YWxpZGl0eS52YWxpZCkge1xuICAgIHBhc3N3b3JkX2Vycm9yLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBwYXNzd29yZC5jbGFzc0xpc3QucmVtb3ZlKFwiZXJyb3JcIik7XG4gICAgcGFzc3dvcmQuY2xhc3NMaXN0LmFkZChcImNvcnJlY3RcIik7XG4gIH0gZWxzZSB7XG4gICAgY2xlYXJUaW1lb3V0KHBhc3NUaW1lb3V0KTtcbiAgICBwYXNzVGltZW91dCA9IHNldFRpbWVvdXQocGFzc1dvcmRFcnJvciwgMTAwMCk7XG4gIH1cbn0pO1xuXG5jb25zdCBwYXNzd29yZF9jb25maXJtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwYXNzd29yZC1jb25maXJtXCIpO1xuY29uc3QgcGFzc3dvcmRfY29uZmlybV9lcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gIFwiI3Bhc3N3b3JkLWNvbmZpcm0tZXJyb3JcIlxuKTtcblxuY29uc3QgcGFzc1dvcmRDb25maXJtRXJyb3IgPSAoKSA9PiB7XG4gIGlmIChwYXNzd29yZF9jb25maXJtLnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xuICAgIHBhc3N3b3JkX2NvbmZpcm1fZXJyb3IudGV4dENvbnRlbnQgPSBcIllvdSBuZWVkIHRvIG1hdGNoIHRoZSBwYXNzd29yZCBhYm92ZVwiO1xuICB9IGVsc2UgaWYgKHBhc3N3b3JkX2NvbmZpcm0udmFsaWRpdHkudG9vU2hvcnQpIHtcbiAgICBwYXNzd29yZF9jb25maXJtX2Vycm9yLnRleHRDb250ZW50ID0gXCJZb3UgbmVlZCB0byBtYXRjaCB0aGUgcGFzc3dvcmQgYWJvdmVcIjtcbiAgfVxuICBwYXNzd29yZF9jb25maXJtLmNsYXNzTGlzdC5hZGQoXCJlcnJvclwiKTtcbiAgcGFzc3dvcmRfY29uZmlybS5jbGFzc0xpc3QucmVtb3ZlKFwiY29ycmVjdFwiKTtcbiAgcGFzc3dvcmRfY29uZmlybS5jbGFzc0xpc3QucmVtb3ZlKFwidmFsaWRlcnJvclwiKTtcbn07XG5cbnBhc3N3b3JkX2NvbmZpcm0uYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcbiAgaWYgKHBhc3N3b3JkX2NvbmZpcm0udmFsaWRpdHkudmFsaWQpIHtcbiAgICBpZiAocGFzc3dvcmRfY29uZmlybS52YWx1ZSA9PT0gcGFzc3dvcmQudmFsdWUpIHtcbiAgICAgIHBhc3N3b3JkX2NvbmZpcm1fZXJyb3IudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgcGFzc3dvcmRfY29uZmlybS5jbGFzc0xpc3QucmVtb3ZlKFwiZXJyb3JcIik7XG4gICAgICBwYXNzd29yZF9jb25maXJtLmNsYXNzTGlzdC5yZW1vdmUoXCJ2YWxpZGVycm9yXCIpO1xuICAgICAgcGFzc3dvcmRfY29uZmlybS5jbGFzc0xpc3QuYWRkKFwiY29ycmVjdFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFzc3dvcmRfY29uZmlybV9lcnJvci50ZXh0Q29udGVudCA9IFwiUGFzc3dvcmRzIGRvIG5vdCBtYXRjaFwiO1xuICAgICAgcGFzc3dvcmRfY29uZmlybS5jbGFzc0xpc3QuYWRkKFwidmFsaWRlcnJvclwiKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcGFzc1dvcmRDb25maXJtRXJyb3IoKTtcbiAgfVxufSk7XG5cbi8vIGJlY2F1c2Ugd2UgcHV0IG5vdmFsaWRhdGUgb24gaHRtbCBmb3JtLCB0aGUgZm9ybSBzdWJtaXRzIHdpdGggZW1wdHkgZmllbGRzIGRlc3BpdGUgYmVpbmcgZW1wdHksIHNvIHdlIG5lZWQgdG8gY29kZSBhLXN1Ym1pdCBsaXN0ZW5lciBvbiB0aGUgZm9ybVxuLy8gdGhhdCB3aWxsIHN0b3Agc3VibWl0IGlmIHdyb25nXG5cbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZlbnQpID0+IHtcbiAgaWYgKFxuICAgICFlbWFpbC52YWxpZGl0eS52YWxpZCB8fFxuICAgICFjb3VudHJ5LnZhbGlkaXR5LnZhbGlkIHx8XG4gICAgIXppcGNvZGUudmFsaWRpdHkudmFsaWQgfHxcbiAgICAhcGFzc3dvcmQudmFsaWRpdHkudmFsaWQgfHxcbiAgICAhcGFzc3dvcmRfY29uZmlybS52YWxpZGl0eS52YWxpZFxuICApIHtcbiAgICBpZiAoZW1haWwudmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XG4gICAgICBlbWFpbF9lcnJvci50ZXh0Q29udGVudCA9IFwiKiBZb3UgbmVlZCB0byBlbnRlciBhbiBFLW1haWwgQWRkcmVzc1wiO1xuICAgICAgZW1haWwuY2xhc3NMaXN0LmFkZChcImVycm9yXCIpO1xuICAgIH1cbiAgICBpZiAoY291bnRyeS52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcbiAgICAgIGNvdW50cnlfZXJyb3IudGV4dENvbnRlbnQgPSBcIllvdSBuZWVkIHRvIGVudGVyIGEgQ291bnRyeVwiO1xuICAgICAgY291bnRyeS5jbGFzc0xpc3QuYWRkKFwiZXJyb3JcIik7XG4gICAgfVxuICAgIGlmICh6aXBjb2RlLnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xuICAgICAgemlwY29kZV9lcnJvci50ZXh0Q29udGVudCA9IFwiWW91IG5lZWQgdG8gZW50ZXIgYSBaaXAgQ29kZVwiO1xuICAgICAgemlwY29kZS5jbGFzc0xpc3QuYWRkKFwiZXJyb3JcIik7XG4gICAgfVxuICAgIGlmIChwYXNzd29yZC52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcbiAgICAgIHBhc3N3b3JkX2Vycm9yLnRleHRDb250ZW50ID0gXCJZb3UgbmVlZCB0byBlbnRlciBhIHBhc3N3b3JkXCI7XG4gICAgICBwYXNzd29yZC5jbGFzc0xpc3QuYWRkKFwiZXJyb3JcIik7XG4gICAgfVxuICAgIGlmIChwYXNzd29yZF9jb25maXJtLnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xuICAgICAgcGFzc3dvcmRfY29uZmlybV9lcnJvci50ZXh0Q29udGVudCA9XG4gICAgICAgIFwiWW91IG5lZWQgdG8gbWF0Y2ggdGhlIHBhc3N3b3JkIGFib3ZlXCI7XG4gICAgICBwYXNzd29yZF9jb25maXJtLmNsYXNzTGlzdC5hZGQoXCJlcnJvclwiKTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhcInN1Ym1pdCB3aXRoIGludmFsaWRcIik7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgLy8gcHJldmVudHMgZm9ybSBzdWJtaXR0aW5nIGlmIGFueSBpbnB1dHMgYXJlIGludmFsaWRcbiAgfSBlbHNlIHtcbiAgICB3aW5kb3cub3BlbihcImh0dHBzOi8vbW9vc2VjYXBpdGFsLmdpdGh1Yi5pby9icm93c2VyLWZvcm0tcHJhY3RpY2UvXCIpO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
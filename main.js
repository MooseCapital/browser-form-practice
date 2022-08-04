/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const form = document.querySelector("form");
const email = document.querySelector("#email");
const email_error = document.querySelector("#email-error");
let emailTimeout;
let emailError = (e) => {
  if (email.validity.valueMissing) {
    email_error.textContent = "* You need to enter an E-mail Address"
  } else if (email.validity.typeMismatch) {
    email_error.textContent = "* Follow the E-mail format: email@website.com"

  }
  email.classList.add("error");
}

email.addEventListener("input", (e) => {

  if (email.validity.valid) {
    email_error.textContent = "";
    email.classList.remove("error");
    //email.classList.add("correct");

  } else {
    clearTimeout(emailTimeout);
    emailTimeout = setTimeout(emailError, 2000);

    //email.classList.remove("correct");
  }
})

const country = document.querySelector("#country");
const country_error = document.querySelector("#country-error");
let countryTimeout;
let countryError = () => {

  if (country.validity.valueMissing) {
    country_error.textContent = "You need to enter a Country";
  } else if (country.validity.tooShort) {
    country_error.textContent = "Country name is too short";
  }
  country.classList.add("error")
}

country.addEventListener("input", (e) => {

  if (country.validity.valid) {
    country_error.textContent = "";
    country.classList.remove("error");
  } else {
    clearTimeout(countryTimeout);
    countryTimeout = setTimeout(countryError, 2000);
  }
})

const zipcode = document.querySelector("#zipcode");
const zipcode_error = document.querySelector("#zipcode-error");
let zipTimeout;
let zipCodeError = () => {

  if (zipcode.validity.valueMissing) {
    zipcode_error.textContent = "You need to enter a Zip Code";
  } else if (zipcode.validity.patternMismatch) {
    zipcode_error.textContent = "Please follow the zip code format: 53021"

  }
  zipcode.classList.add("error");
}

zipcode.addEventListener("input", () => {

  if (zipcode.validity.valid) {
    zipcode_error.textContent = "";
    zipcode.classList.remove("error");
  } else {
    clearTimeout(zipTimeout)
    zipTimeout = setTimeout(zipCodeError, 2000);
  }
})


const password = document.querySelector("#password");
const password_error = document.querySelector("#password-error");
let passTimeout;
let passWordError = () => {

  if (password.validity.valueMissing) {
    password_error.textContent = "You need to enter a password";
  } else if (password.validity.tooShort) {
    password_error.textContent = "Password is too short. 6-20 Characters";
  } else if (password.validity.tooLong) {
    password_error.textContent = "Password is too long. 6-20 Characters"
  }
password.classList.add("error");

}

password.addEventListener("input", (e) => {

  if (password.validity.valid) {
    password_error.textContent = "";
    password.classList.remove("error");
    password.classList.add("correct");

  } else {
    clearTimeout(passTimeout);
    passTimeout = setTimeout(passWordError, 1000);
  }
})

const password_confirm = document.querySelector("#password-confirm");
const password_confirm_error = document.querySelector("#password-confirm-error");
let passConfirmTimeout;

let passWordConfirmError = (e) => {

  if (password_confirm.validity.valueMissing) {
    password_confirm_error.textContent = "You need to match the password above";
  } else if (password_confirm.validity.tooShort) {
    password_confirm_error.textContent = "You need to match the password above";
  }
  password_confirm.classList.add("error");
  password_confirm.classList.remove("correct");
  password_confirm.classList.remove("validerror");
}

password_confirm.addEventListener("input", (e) => {

  if (password_confirm.validity.valid) {
    if (password_confirm.value === password.value) {
      password_confirm_error.textContent = "";
      password_confirm.classList.remove("error");
      password_confirm.classList.remove("validerror");
      password_confirm.classList.add("correct");

    } else {
      password_confirm_error.textContent = "Passwords do not match";
      password_confirm.classList.add("validerror")
    }
  } else {

    passWordConfirmError()
  }



})









/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7Ozs7QUFJQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnJvd3Nlci1mb3JtLXByYWN0aWNlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcbmNvbnN0IGVtYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlbWFpbFwiKTtcbmNvbnN0IGVtYWlsX2Vycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlbWFpbC1lcnJvclwiKTtcbmxldCBlbWFpbFRpbWVvdXQ7XG5sZXQgZW1haWxFcnJvciA9IChlKSA9PiB7XG4gIGlmIChlbWFpbC52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcbiAgICBlbWFpbF9lcnJvci50ZXh0Q29udGVudCA9IFwiKiBZb3UgbmVlZCB0byBlbnRlciBhbiBFLW1haWwgQWRkcmVzc1wiXG4gIH0gZWxzZSBpZiAoZW1haWwudmFsaWRpdHkudHlwZU1pc21hdGNoKSB7XG4gICAgZW1haWxfZXJyb3IudGV4dENvbnRlbnQgPSBcIiogRm9sbG93IHRoZSBFLW1haWwgZm9ybWF0OiBlbWFpbEB3ZWJzaXRlLmNvbVwiXG5cbiAgfVxuICBlbWFpbC5jbGFzc0xpc3QuYWRkKFwiZXJyb3JcIik7XG59XG5cbmVtYWlsLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xuXG4gIGlmIChlbWFpbC52YWxpZGl0eS52YWxpZCkge1xuICAgIGVtYWlsX2Vycm9yLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBlbWFpbC5jbGFzc0xpc3QucmVtb3ZlKFwiZXJyb3JcIik7XG4gICAgLy9lbWFpbC5jbGFzc0xpc3QuYWRkKFwiY29ycmVjdFwiKTtcblxuICB9IGVsc2Uge1xuICAgIGNsZWFyVGltZW91dChlbWFpbFRpbWVvdXQpO1xuICAgIGVtYWlsVGltZW91dCA9IHNldFRpbWVvdXQoZW1haWxFcnJvciwgMjAwMCk7XG5cbiAgICAvL2VtYWlsLmNsYXNzTGlzdC5yZW1vdmUoXCJjb3JyZWN0XCIpO1xuICB9XG59KVxuXG5jb25zdCBjb3VudHJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb3VudHJ5XCIpO1xuY29uc3QgY291bnRyeV9lcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY291bnRyeS1lcnJvclwiKTtcbmxldCBjb3VudHJ5VGltZW91dDtcbmxldCBjb3VudHJ5RXJyb3IgPSAoKSA9PiB7XG5cbiAgaWYgKGNvdW50cnkudmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XG4gICAgY291bnRyeV9lcnJvci50ZXh0Q29udGVudCA9IFwiWW91IG5lZWQgdG8gZW50ZXIgYSBDb3VudHJ5XCI7XG4gIH0gZWxzZSBpZiAoY291bnRyeS52YWxpZGl0eS50b29TaG9ydCkge1xuICAgIGNvdW50cnlfZXJyb3IudGV4dENvbnRlbnQgPSBcIkNvdW50cnkgbmFtZSBpcyB0b28gc2hvcnRcIjtcbiAgfVxuICBjb3VudHJ5LmNsYXNzTGlzdC5hZGQoXCJlcnJvclwiKVxufVxuXG5jb3VudHJ5LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xuXG4gIGlmIChjb3VudHJ5LnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgY291bnRyeV9lcnJvci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgY291bnRyeS5jbGFzc0xpc3QucmVtb3ZlKFwiZXJyb3JcIik7XG4gIH0gZWxzZSB7XG4gICAgY2xlYXJUaW1lb3V0KGNvdW50cnlUaW1lb3V0KTtcbiAgICBjb3VudHJ5VGltZW91dCA9IHNldFRpbWVvdXQoY291bnRyeUVycm9yLCAyMDAwKTtcbiAgfVxufSlcblxuY29uc3QgemlwY29kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjemlwY29kZVwiKTtcbmNvbnN0IHppcGNvZGVfZXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ppcGNvZGUtZXJyb3JcIik7XG5sZXQgemlwVGltZW91dDtcbmxldCB6aXBDb2RlRXJyb3IgPSAoKSA9PiB7XG5cbiAgaWYgKHppcGNvZGUudmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XG4gICAgemlwY29kZV9lcnJvci50ZXh0Q29udGVudCA9IFwiWW91IG5lZWQgdG8gZW50ZXIgYSBaaXAgQ29kZVwiO1xuICB9IGVsc2UgaWYgKHppcGNvZGUudmFsaWRpdHkucGF0dGVybk1pc21hdGNoKSB7XG4gICAgemlwY29kZV9lcnJvci50ZXh0Q29udGVudCA9IFwiUGxlYXNlIGZvbGxvdyB0aGUgemlwIGNvZGUgZm9ybWF0OiA1MzAyMVwiXG5cbiAgfVxuICB6aXBjb2RlLmNsYXNzTGlzdC5hZGQoXCJlcnJvclwiKTtcbn1cblxuemlwY29kZS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuXG4gIGlmICh6aXBjb2RlLnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgemlwY29kZV9lcnJvci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgemlwY29kZS5jbGFzc0xpc3QucmVtb3ZlKFwiZXJyb3JcIik7XG4gIH0gZWxzZSB7XG4gICAgY2xlYXJUaW1lb3V0KHppcFRpbWVvdXQpXG4gICAgemlwVGltZW91dCA9IHNldFRpbWVvdXQoemlwQ29kZUVycm9yLCAyMDAwKTtcbiAgfVxufSlcblxuXG5jb25zdCBwYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGFzc3dvcmRcIik7XG5jb25zdCBwYXNzd29yZF9lcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGFzc3dvcmQtZXJyb3JcIik7XG5sZXQgcGFzc1RpbWVvdXQ7XG5sZXQgcGFzc1dvcmRFcnJvciA9ICgpID0+IHtcblxuICBpZiAocGFzc3dvcmQudmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XG4gICAgcGFzc3dvcmRfZXJyb3IudGV4dENvbnRlbnQgPSBcIllvdSBuZWVkIHRvIGVudGVyIGEgcGFzc3dvcmRcIjtcbiAgfSBlbHNlIGlmIChwYXNzd29yZC52YWxpZGl0eS50b29TaG9ydCkge1xuICAgIHBhc3N3b3JkX2Vycm9yLnRleHRDb250ZW50ID0gXCJQYXNzd29yZCBpcyB0b28gc2hvcnQuIDYtMjAgQ2hhcmFjdGVyc1wiO1xuICB9IGVsc2UgaWYgKHBhc3N3b3JkLnZhbGlkaXR5LnRvb0xvbmcpIHtcbiAgICBwYXNzd29yZF9lcnJvci50ZXh0Q29udGVudCA9IFwiUGFzc3dvcmQgaXMgdG9vIGxvbmcuIDYtMjAgQ2hhcmFjdGVyc1wiXG4gIH1cbnBhc3N3b3JkLmNsYXNzTGlzdC5hZGQoXCJlcnJvclwiKTtcblxufVxuXG5wYXNzd29yZC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcblxuICBpZiAocGFzc3dvcmQudmFsaWRpdHkudmFsaWQpIHtcbiAgICBwYXNzd29yZF9lcnJvci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgcGFzc3dvcmQuY2xhc3NMaXN0LnJlbW92ZShcImVycm9yXCIpO1xuICAgIHBhc3N3b3JkLmNsYXNzTGlzdC5hZGQoXCJjb3JyZWN0XCIpO1xuXG4gIH0gZWxzZSB7XG4gICAgY2xlYXJUaW1lb3V0KHBhc3NUaW1lb3V0KTtcbiAgICBwYXNzVGltZW91dCA9IHNldFRpbWVvdXQocGFzc1dvcmRFcnJvciwgMTAwMCk7XG4gIH1cbn0pXG5cbmNvbnN0IHBhc3N3b3JkX2NvbmZpcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Bhc3N3b3JkLWNvbmZpcm1cIik7XG5jb25zdCBwYXNzd29yZF9jb25maXJtX2Vycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwYXNzd29yZC1jb25maXJtLWVycm9yXCIpO1xubGV0IHBhc3NDb25maXJtVGltZW91dDtcblxubGV0IHBhc3NXb3JkQ29uZmlybUVycm9yID0gKGUpID0+IHtcblxuICBpZiAocGFzc3dvcmRfY29uZmlybS52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcbiAgICBwYXNzd29yZF9jb25maXJtX2Vycm9yLnRleHRDb250ZW50ID0gXCJZb3UgbmVlZCB0byBtYXRjaCB0aGUgcGFzc3dvcmQgYWJvdmVcIjtcbiAgfSBlbHNlIGlmIChwYXNzd29yZF9jb25maXJtLnZhbGlkaXR5LnRvb1Nob3J0KSB7XG4gICAgcGFzc3dvcmRfY29uZmlybV9lcnJvci50ZXh0Q29udGVudCA9IFwiWW91IG5lZWQgdG8gbWF0Y2ggdGhlIHBhc3N3b3JkIGFib3ZlXCI7XG4gIH1cbiAgcGFzc3dvcmRfY29uZmlybS5jbGFzc0xpc3QuYWRkKFwiZXJyb3JcIik7XG4gIHBhc3N3b3JkX2NvbmZpcm0uY2xhc3NMaXN0LnJlbW92ZShcImNvcnJlY3RcIik7XG4gIHBhc3N3b3JkX2NvbmZpcm0uY2xhc3NMaXN0LnJlbW92ZShcInZhbGlkZXJyb3JcIik7XG59XG5cbnBhc3N3b3JkX2NvbmZpcm0uYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XG5cbiAgaWYgKHBhc3N3b3JkX2NvbmZpcm0udmFsaWRpdHkudmFsaWQpIHtcbiAgICBpZiAocGFzc3dvcmRfY29uZmlybS52YWx1ZSA9PT0gcGFzc3dvcmQudmFsdWUpIHtcbiAgICAgIHBhc3N3b3JkX2NvbmZpcm1fZXJyb3IudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgcGFzc3dvcmRfY29uZmlybS5jbGFzc0xpc3QucmVtb3ZlKFwiZXJyb3JcIik7XG4gICAgICBwYXNzd29yZF9jb25maXJtLmNsYXNzTGlzdC5yZW1vdmUoXCJ2YWxpZGVycm9yXCIpO1xuICAgICAgcGFzc3dvcmRfY29uZmlybS5jbGFzc0xpc3QuYWRkKFwiY29ycmVjdFwiKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICBwYXNzd29yZF9jb25maXJtX2Vycm9yLnRleHRDb250ZW50ID0gXCJQYXNzd29yZHMgZG8gbm90IG1hdGNoXCI7XG4gICAgICBwYXNzd29yZF9jb25maXJtLmNsYXNzTGlzdC5hZGQoXCJ2YWxpZGVycm9yXCIpXG4gICAgfVxuICB9IGVsc2Uge1xuXG4gICAgcGFzc1dvcmRDb25maXJtRXJyb3IoKVxuICB9XG5cblxuXG59KVxuXG5cblxuXG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
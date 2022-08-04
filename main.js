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

//because we put novalidate on html form, the form submits with empty fields despite being empty, so we need to code a submit listener on the button
//that will stop propogation if wrong

form.addEventListener("submit", (event) => {

  if (!email.validity.valid || !country.validity.valid || !zipcode.validity.valid || !password.validity.valid || !password_confirm.validity.valid) {
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
      password_confirm_error.textContent = "You need to match the password above";
      password_confirm.classList.add("error");
    }

    console.log("submit with invalid")
    event.preventDefault(); //prevents form submitting if any inputs are invalid
  }

window.open("https://github.com/MooseCapital")

})





/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTs7OztBQUlBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEI7QUFDNUI7O0FBRUE7O0FBRUEsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Jyb3dzZXItZm9ybS1wcmFjdGljZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XG5jb25zdCBlbWFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZW1haWxcIik7XG5jb25zdCBlbWFpbF9lcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZW1haWwtZXJyb3JcIik7XG5sZXQgZW1haWxUaW1lb3V0O1xubGV0IGVtYWlsRXJyb3IgPSAoZSkgPT4ge1xuICBpZiAoZW1haWwudmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XG4gICAgZW1haWxfZXJyb3IudGV4dENvbnRlbnQgPSBcIiogWW91IG5lZWQgdG8gZW50ZXIgYW4gRS1tYWlsIEFkZHJlc3NcIlxuICB9IGVsc2UgaWYgKGVtYWlsLnZhbGlkaXR5LnR5cGVNaXNtYXRjaCkge1xuICAgIGVtYWlsX2Vycm9yLnRleHRDb250ZW50ID0gXCIqIEZvbGxvdyB0aGUgRS1tYWlsIGZvcm1hdDogZW1haWxAd2Vic2l0ZS5jb21cIlxuXG4gIH1cbiAgZW1haWwuY2xhc3NMaXN0LmFkZChcImVycm9yXCIpO1xufVxuXG5lbWFpbC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcblxuICBpZiAoZW1haWwudmFsaWRpdHkudmFsaWQpIHtcbiAgICBlbWFpbF9lcnJvci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgZW1haWwuY2xhc3NMaXN0LnJlbW92ZShcImVycm9yXCIpO1xuICAgIC8vZW1haWwuY2xhc3NMaXN0LmFkZChcImNvcnJlY3RcIik7XG5cbiAgfSBlbHNlIHtcbiAgICBjbGVhclRpbWVvdXQoZW1haWxUaW1lb3V0KTtcbiAgICBlbWFpbFRpbWVvdXQgPSBzZXRUaW1lb3V0KGVtYWlsRXJyb3IsIDIwMDApO1xuXG4gICAgLy9lbWFpbC5jbGFzc0xpc3QucmVtb3ZlKFwiY29ycmVjdFwiKTtcbiAgfVxufSlcblxuY29uc3QgY291bnRyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY291bnRyeVwiKTtcbmNvbnN0IGNvdW50cnlfZXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvdW50cnktZXJyb3JcIik7XG5sZXQgY291bnRyeVRpbWVvdXQ7XG5sZXQgY291bnRyeUVycm9yID0gKCkgPT4ge1xuXG4gIGlmIChjb3VudHJ5LnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xuICAgIGNvdW50cnlfZXJyb3IudGV4dENvbnRlbnQgPSBcIllvdSBuZWVkIHRvIGVudGVyIGEgQ291bnRyeVwiO1xuICB9IGVsc2UgaWYgKGNvdW50cnkudmFsaWRpdHkudG9vU2hvcnQpIHtcbiAgICBjb3VudHJ5X2Vycm9yLnRleHRDb250ZW50ID0gXCJDb3VudHJ5IG5hbWUgaXMgdG9vIHNob3J0XCI7XG4gIH1cbiAgY291bnRyeS5jbGFzc0xpc3QuYWRkKFwiZXJyb3JcIilcbn1cblxuY291bnRyeS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcblxuICBpZiAoY291bnRyeS52YWxpZGl0eS52YWxpZCkge1xuICAgIGNvdW50cnlfZXJyb3IudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIGNvdW50cnkuY2xhc3NMaXN0LnJlbW92ZShcImVycm9yXCIpO1xuICB9IGVsc2Uge1xuICAgIGNsZWFyVGltZW91dChjb3VudHJ5VGltZW91dCk7XG4gICAgY291bnRyeVRpbWVvdXQgPSBzZXRUaW1lb3V0KGNvdW50cnlFcnJvciwgMjAwMCk7XG4gIH1cbn0pXG5cbmNvbnN0IHppcGNvZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ppcGNvZGVcIik7XG5jb25zdCB6aXBjb2RlX2Vycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN6aXBjb2RlLWVycm9yXCIpO1xubGV0IHppcFRpbWVvdXQ7XG5sZXQgemlwQ29kZUVycm9yID0gKCkgPT4ge1xuXG4gIGlmICh6aXBjb2RlLnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xuICAgIHppcGNvZGVfZXJyb3IudGV4dENvbnRlbnQgPSBcIllvdSBuZWVkIHRvIGVudGVyIGEgWmlwIENvZGVcIjtcbiAgfSBlbHNlIGlmICh6aXBjb2RlLnZhbGlkaXR5LnBhdHRlcm5NaXNtYXRjaCkge1xuICAgIHppcGNvZGVfZXJyb3IudGV4dENvbnRlbnQgPSBcIlBsZWFzZSBmb2xsb3cgdGhlIHppcCBjb2RlIGZvcm1hdDogNTMwMjFcIlxuXG4gIH1cbiAgemlwY29kZS5jbGFzc0xpc3QuYWRkKFwiZXJyb3JcIik7XG59XG5cbnppcGNvZGUuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcblxuICBpZiAoemlwY29kZS52YWxpZGl0eS52YWxpZCkge1xuICAgIHppcGNvZGVfZXJyb3IudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIHppcGNvZGUuY2xhc3NMaXN0LnJlbW92ZShcImVycm9yXCIpO1xuICB9IGVsc2Uge1xuICAgIGNsZWFyVGltZW91dCh6aXBUaW1lb3V0KVxuICAgIHppcFRpbWVvdXQgPSBzZXRUaW1lb3V0KHppcENvZGVFcnJvciwgMjAwMCk7XG4gIH1cbn0pXG5cblxuY29uc3QgcGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Bhc3N3b3JkXCIpO1xuY29uc3QgcGFzc3dvcmRfZXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Bhc3N3b3JkLWVycm9yXCIpO1xubGV0IHBhc3NUaW1lb3V0O1xubGV0IHBhc3NXb3JkRXJyb3IgPSAoKSA9PiB7XG5cbiAgaWYgKHBhc3N3b3JkLnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xuICAgIHBhc3N3b3JkX2Vycm9yLnRleHRDb250ZW50ID0gXCJZb3UgbmVlZCB0byBlbnRlciBhIHBhc3N3b3JkXCI7XG4gIH0gZWxzZSBpZiAocGFzc3dvcmQudmFsaWRpdHkudG9vU2hvcnQpIHtcbiAgICBwYXNzd29yZF9lcnJvci50ZXh0Q29udGVudCA9IFwiUGFzc3dvcmQgaXMgdG9vIHNob3J0LiA2LTIwIENoYXJhY3RlcnNcIjtcbiAgfSBlbHNlIGlmIChwYXNzd29yZC52YWxpZGl0eS50b29Mb25nKSB7XG4gICAgcGFzc3dvcmRfZXJyb3IudGV4dENvbnRlbnQgPSBcIlBhc3N3b3JkIGlzIHRvbyBsb25nLiA2LTIwIENoYXJhY3RlcnNcIlxuICB9XG5wYXNzd29yZC5jbGFzc0xpc3QuYWRkKFwiZXJyb3JcIik7XG5cbn1cblxucGFzc3dvcmQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XG5cbiAgaWYgKHBhc3N3b3JkLnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgcGFzc3dvcmRfZXJyb3IudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIHBhc3N3b3JkLmNsYXNzTGlzdC5yZW1vdmUoXCJlcnJvclwiKTtcbiAgICBwYXNzd29yZC5jbGFzc0xpc3QuYWRkKFwiY29ycmVjdFwiKTtcblxuICB9IGVsc2Uge1xuICAgIGNsZWFyVGltZW91dChwYXNzVGltZW91dCk7XG4gICAgcGFzc1RpbWVvdXQgPSBzZXRUaW1lb3V0KHBhc3NXb3JkRXJyb3IsIDEwMDApO1xuICB9XG59KVxuXG5jb25zdCBwYXNzd29yZF9jb25maXJtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwYXNzd29yZC1jb25maXJtXCIpO1xuY29uc3QgcGFzc3dvcmRfY29uZmlybV9lcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGFzc3dvcmQtY29uZmlybS1lcnJvclwiKTtcblxuXG5sZXQgcGFzc1dvcmRDb25maXJtRXJyb3IgPSAoZSkgPT4ge1xuXG4gIGlmIChwYXNzd29yZF9jb25maXJtLnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xuICAgIHBhc3N3b3JkX2NvbmZpcm1fZXJyb3IudGV4dENvbnRlbnQgPSBcIllvdSBuZWVkIHRvIG1hdGNoIHRoZSBwYXNzd29yZCBhYm92ZVwiO1xuICB9IGVsc2UgaWYgKHBhc3N3b3JkX2NvbmZpcm0udmFsaWRpdHkudG9vU2hvcnQpIHtcbiAgICBwYXNzd29yZF9jb25maXJtX2Vycm9yLnRleHRDb250ZW50ID0gXCJZb3UgbmVlZCB0byBtYXRjaCB0aGUgcGFzc3dvcmQgYWJvdmVcIjtcbiAgfVxuICBwYXNzd29yZF9jb25maXJtLmNsYXNzTGlzdC5hZGQoXCJlcnJvclwiKTtcbiAgcGFzc3dvcmRfY29uZmlybS5jbGFzc0xpc3QucmVtb3ZlKFwiY29ycmVjdFwiKTtcbiAgcGFzc3dvcmRfY29uZmlybS5jbGFzc0xpc3QucmVtb3ZlKFwidmFsaWRlcnJvclwiKTtcbn1cblxucGFzc3dvcmRfY29uZmlybS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcblxuICBpZiAocGFzc3dvcmRfY29uZmlybS52YWxpZGl0eS52YWxpZCkge1xuICAgIGlmIChwYXNzd29yZF9jb25maXJtLnZhbHVlID09PSBwYXNzd29yZC52YWx1ZSkge1xuICAgICAgcGFzc3dvcmRfY29uZmlybV9lcnJvci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICBwYXNzd29yZF9jb25maXJtLmNsYXNzTGlzdC5yZW1vdmUoXCJlcnJvclwiKTtcbiAgICAgIHBhc3N3b3JkX2NvbmZpcm0uY2xhc3NMaXN0LnJlbW92ZShcInZhbGlkZXJyb3JcIik7XG4gICAgICBwYXNzd29yZF9jb25maXJtLmNsYXNzTGlzdC5hZGQoXCJjb3JyZWN0XCIpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIHBhc3N3b3JkX2NvbmZpcm1fZXJyb3IudGV4dENvbnRlbnQgPSBcIlBhc3N3b3JkcyBkbyBub3QgbWF0Y2hcIjtcbiAgICAgIHBhc3N3b3JkX2NvbmZpcm0uY2xhc3NMaXN0LmFkZChcInZhbGlkZXJyb3JcIilcbiAgICB9XG4gIH0gZWxzZSB7XG5cbiAgICBwYXNzV29yZENvbmZpcm1FcnJvcigpXG4gIH1cblxuXG5cbn0pXG5cbi8vYmVjYXVzZSB3ZSBwdXQgbm92YWxpZGF0ZSBvbiBodG1sIGZvcm0sIHRoZSBmb3JtIHN1Ym1pdHMgd2l0aCBlbXB0eSBmaWVsZHMgZGVzcGl0ZSBiZWluZyBlbXB0eSwgc28gd2UgbmVlZCB0byBjb2RlIGEgc3VibWl0IGxpc3RlbmVyIG9uIHRoZSBidXR0b25cbi8vdGhhdCB3aWxsIHN0b3AgcHJvcG9nYXRpb24gaWYgd3JvbmdcblxuZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCkgPT4ge1xuXG4gIGlmICghZW1haWwudmFsaWRpdHkudmFsaWQgfHwgIWNvdW50cnkudmFsaWRpdHkudmFsaWQgfHwgIXppcGNvZGUudmFsaWRpdHkudmFsaWQgfHwgIXBhc3N3b3JkLnZhbGlkaXR5LnZhbGlkIHx8ICFwYXNzd29yZF9jb25maXJtLnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgaWYgKGVtYWlsLnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xuICAgICAgZW1haWxfZXJyb3IudGV4dENvbnRlbnQgPSBcIiogWW91IG5lZWQgdG8gZW50ZXIgYW4gRS1tYWlsIEFkZHJlc3NcIjtcbiAgICAgIGVtYWlsLmNsYXNzTGlzdC5hZGQoXCJlcnJvclwiKTtcbiAgICB9XG4gICAgIGlmIChjb3VudHJ5LnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xuICAgICAgY291bnRyeV9lcnJvci50ZXh0Q29udGVudCA9IFwiWW91IG5lZWQgdG8gZW50ZXIgYSBDb3VudHJ5XCI7XG4gICAgICBjb3VudHJ5LmNsYXNzTGlzdC5hZGQoXCJlcnJvclwiKTtcbiAgICB9XG4gICAgaWYgKHppcGNvZGUudmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XG4gICAgICB6aXBjb2RlX2Vycm9yLnRleHRDb250ZW50ID0gXCJZb3UgbmVlZCB0byBlbnRlciBhIFppcCBDb2RlXCI7XG4gICAgICB6aXBjb2RlLmNsYXNzTGlzdC5hZGQoXCJlcnJvclwiKTtcbiAgICB9XG4gICAgIGlmIChwYXNzd29yZC52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcbiAgICAgIHBhc3N3b3JkX2Vycm9yLnRleHRDb250ZW50ID0gXCJZb3UgbmVlZCB0byBlbnRlciBhIHBhc3N3b3JkXCI7XG4gICAgICBwYXNzd29yZC5jbGFzc0xpc3QuYWRkKFwiZXJyb3JcIik7XG4gICAgfVxuICAgIGlmIChwYXNzd29yZF9jb25maXJtLnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xuICAgICAgcGFzc3dvcmRfY29uZmlybV9lcnJvci50ZXh0Q29udGVudCA9IFwiWW91IG5lZWQgdG8gbWF0Y2ggdGhlIHBhc3N3b3JkIGFib3ZlXCI7XG4gICAgICBwYXNzd29yZF9jb25maXJtLmNsYXNzTGlzdC5hZGQoXCJlcnJvclwiKTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhcInN1Ym1pdCB3aXRoIGludmFsaWRcIilcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvL3ByZXZlbnRzIGZvcm0gc3VibWl0dGluZyBpZiBhbnkgaW5wdXRzIGFyZSBpbnZhbGlkXG4gIH1cblxud2luZG93Lm9wZW4oXCJodHRwczovL2dpdGh1Yi5jb20vTW9vc2VDYXBpdGFsXCIpXG5cbn0pXG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
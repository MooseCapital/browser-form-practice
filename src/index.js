const form = document.querySelector("form");
const email = document.querySelector("#email");
const email_error = document.querySelector("#email-error");

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
    setTimeout(emailError, 2000);

    //email.classList.remove("correct");
  }
})

const country = document.querySelector("#country");
const country_error = document.querySelector("#country-error");

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
    setTimeout(countryError, 1000);
  }
})

const zipcode = document.querySelector("#zipcode");
const zipcode_error = document.querySelector("#zipcode-error");

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
    setTimeout(zipCodeError, 1000);
  }
})
















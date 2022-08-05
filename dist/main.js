/** *** */ (() => { // webpackBootstrap
  const __webpack_exports__ = {};
  /*! **********************!*\
  !*** ./src/index.js ***!
  \********************* */
  const form = document.querySelector('form');
  const email = document.querySelector('#email');
  const email_error = document.querySelector('#email-error');
  let emailTimeout;
  const emailError = (e) => {
    if (email.validity.valueMissing) {
      email_error.textContent = '* You need to enter an E-mail Address';
    } else if (email.validity.typeMismatch) {
      email_error.textContent = '* Follow the E-mail format: email@website.com';
    }
    email.classList.add('error');
  };

  email.addEventListener('input', (e) => {
    if (email.validity.valid) {
      email_error.textContent = '';
      email.classList.remove('error');
    // email.classList.add("correct");
    } else {
      clearTimeout(emailTimeout);
      emailTimeout = setTimeout(emailError, 2000);

    // email.classList.remove("correct");
    }
  });

  const country = document.querySelector('#country');
  const country_error = document.querySelector('#country-error');
  let countryTimeout;
  const countryError = () => {
    if (country.validity.valueMissing) {
      country_error.textContent = 'You need to enter a Country';
    } else if (country.validity.tooShort) {
      country_error.textContent = 'Country name is too short';
    }
    country.classList.add('error');
  };

  country.addEventListener('input', (e) => {
    if (country.validity.valid) {
      country_error.textContent = '';
      country.classList.remove('error');
    } else {
      clearTimeout(countryTimeout);
      countryTimeout = setTimeout(countryError, 2000);
    }
  });

  const zipcode = document.querySelector('#zipcode');
  const zipcode_error = document.querySelector('#zipcode-error');
  let zipTimeout;
  const zipCodeError = () => {
    if (zipcode.validity.valueMissing) {
      zipcode_error.textContent = 'You need to enter a Zip Code';
    } else if (zipcode.validity.patternMismatch) {
      zipcode_error.textContent = 'Please follow the zip code format: 53021';
    }
    zipcode.classList.add('error');
  };

  zipcode.addEventListener('input', () => {
    if (zipcode.validity.valid) {
      zipcode_error.textContent = '';
      zipcode.classList.remove('error');
    } else {
      clearTimeout(zipTimeout);
      zipTimeout = setTimeout(zipCodeError, 2000);
    }
  });

  const password = document.querySelector('#password');
  const password_error = document.querySelector('#password-error');
  let passTimeout;
  const passWordError = () => {
    if (password.validity.valueMissing) {
      password_error.textContent = 'You need to enter a password';
    } else if (password.validity.tooShort) {
      password_error.textContent = 'Password is too short. 6-20 Characters';
    } else if (password.validity.tooLong) {
      password_error.textContent = 'Password is too long. 6-20 Characters';
    }
    password.classList.add('error');
  };

  password.addEventListener('input', (e) => {
    if (password.validity.valid) {
      password_error.textContent = '';
      password.classList.remove('error');
      password.classList.add('correct');
    } else {
      clearTimeout(passTimeout);
      passTimeout = setTimeout(passWordError, 1000);
    }
  });

  const password_confirm = document.querySelector('#password-confirm');
  const password_confirm_error = document.querySelector('#password-confirm-error');

  const passWordConfirmError = (e) => {
    if (password_confirm.validity.valueMissing) {
      password_confirm_error.textContent = 'You need to match the password above';
    } else if (password_confirm.validity.tooShort) {
      password_confirm_error.textContent = 'You need to match the password above';
    }
    password_confirm.classList.add('error');
    password_confirm.classList.remove('correct');
    password_confirm.classList.remove('validerror');
  };

  password_confirm.addEventListener('input', (e) => {
    if (password_confirm.validity.valid) {
      if (password_confirm.value === password.value) {
        password_confirm_error.textContent = '';
        password_confirm.classList.remove('error');
        password_confirm.classList.remove('validerror');
        password_confirm.classList.add('correct');
      } else {
        password_confirm_error.textContent = 'Passwords do not match';
        password_confirm.classList.add('validerror');
      }
    } else {
      passWordConfirmError();
    }
  });

  // because we put novalidate on html form, the form submits with empty fields despite being empty, so we need to code a submit listener on the button
  // that will stop propogation if wrong

  form.addEventListener('submit', (event) => {
    if (!email.validity.valid || !country.validity.valid || !zipcode.validity.valid || !password.validity.valid || !password_confirm.validity.valid) {
      if (email.validity.valueMissing) {
        email_error.textContent = '* You need to enter an E-mail Address';
        email.classList.add('error');
      }
      if (country.validity.valueMissing) {
        country_error.textContent = 'You need to enter a Country';
        country.classList.add('error');
      }
      if (zipcode.validity.valueMissing) {
        zipcode_error.textContent = 'You need to enter a Zip Code';
        zipcode.classList.add('error');
      }
      if (password.validity.valueMissing) {
        password_error.textContent = 'You need to enter a password';
        password.classList.add('error');
      }
      if (password_confirm.validity.valueMissing) {
        password_confirm_error.textContent = 'You need to match the password above';
        password_confirm.classList.add('error');
      }

      console.log('submit with invalid');
      event.preventDefault(); // prevents form submitting if any inputs are invalid
    }
    // fix
    window.open('https://github.com/MooseCapital');
  });
/** *** */ })();

// # sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnJvd3Nlci1mb3JtLXByYWN0aWNlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG5jb25zdCBlbWFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbWFpbCcpO1xuY29uc3QgZW1haWxfZXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW1haWwtZXJyb3InKTtcbmxldCBlbWFpbFRpbWVvdXQ7XG5jb25zdCBlbWFpbEVycm9yID0gKGUpID0+IHtcbiAgaWYgKGVtYWlsLnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xuICAgIGVtYWlsX2Vycm9yLnRleHRDb250ZW50ID0gJyogWW91IG5lZWQgdG8gZW50ZXIgYW4gRS1tYWlsIEFkZHJlc3MnO1xuICB9IGVsc2UgaWYgKGVtYWlsLnZhbGlkaXR5LnR5cGVNaXNtYXRjaCkge1xuICAgIGVtYWlsX2Vycm9yLnRleHRDb250ZW50ID0gJyogRm9sbG93IHRoZSBFLW1haWwgZm9ybWF0OiBlbWFpbEB3ZWJzaXRlLmNvbSc7XG4gIH1cbiAgZW1haWwuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcbn07XG5cbmVtYWlsLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcbiAgaWYgKGVtYWlsLnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgZW1haWxfZXJyb3IudGV4dENvbnRlbnQgPSAnJztcbiAgICBlbWFpbC5jbGFzc0xpc3QucmVtb3ZlKCdlcnJvcicpO1xuICAgIC8vIGVtYWlsLmNsYXNzTGlzdC5hZGQoXCJjb3JyZWN0XCIpO1xuICB9IGVsc2Uge1xuICAgIGNsZWFyVGltZW91dChlbWFpbFRpbWVvdXQpO1xuICAgIGVtYWlsVGltZW91dCA9IHNldFRpbWVvdXQoZW1haWxFcnJvciwgMjAwMCk7XG5cbiAgICAvLyBlbWFpbC5jbGFzc0xpc3QucmVtb3ZlKFwiY29ycmVjdFwiKTtcbiAgfVxufSk7XG5cbmNvbnN0IGNvdW50cnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY291bnRyeScpO1xuY29uc3QgY291bnRyeV9lcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb3VudHJ5LWVycm9yJyk7XG5sZXQgY291bnRyeVRpbWVvdXQ7XG5jb25zdCBjb3VudHJ5RXJyb3IgPSAoKSA9PiB7XG4gIGlmIChjb3VudHJ5LnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xuICAgIGNvdW50cnlfZXJyb3IudGV4dENvbnRlbnQgPSAnWW91IG5lZWQgdG8gZW50ZXIgYSBDb3VudHJ5JztcbiAgfSBlbHNlIGlmIChjb3VudHJ5LnZhbGlkaXR5LnRvb1Nob3J0KSB7XG4gICAgY291bnRyeV9lcnJvci50ZXh0Q29udGVudCA9ICdDb3VudHJ5IG5hbWUgaXMgdG9vIHNob3J0JztcbiAgfVxuICBjb3VudHJ5LmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XG59O1xuXG5jb3VudHJ5LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcbiAgaWYgKGNvdW50cnkudmFsaWRpdHkudmFsaWQpIHtcbiAgICBjb3VudHJ5X2Vycm9yLnRleHRDb250ZW50ID0gJyc7XG4gICAgY291bnRyeS5jbGFzc0xpc3QucmVtb3ZlKCdlcnJvcicpO1xuICB9IGVsc2Uge1xuICAgIGNsZWFyVGltZW91dChjb3VudHJ5VGltZW91dCk7XG4gICAgY291bnRyeVRpbWVvdXQgPSBzZXRUaW1lb3V0KGNvdW50cnlFcnJvciwgMjAwMCk7XG4gIH1cbn0pO1xuXG5jb25zdCB6aXBjb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ppcGNvZGUnKTtcbmNvbnN0IHppcGNvZGVfZXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjemlwY29kZS1lcnJvcicpO1xubGV0IHppcFRpbWVvdXQ7XG5jb25zdCB6aXBDb2RlRXJyb3IgPSAoKSA9PiB7XG4gIGlmICh6aXBjb2RlLnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xuICAgIHppcGNvZGVfZXJyb3IudGV4dENvbnRlbnQgPSAnWW91IG5lZWQgdG8gZW50ZXIgYSBaaXAgQ29kZSc7XG4gIH0gZWxzZSBpZiAoemlwY29kZS52YWxpZGl0eS5wYXR0ZXJuTWlzbWF0Y2gpIHtcbiAgICB6aXBjb2RlX2Vycm9yLnRleHRDb250ZW50ID0gJ1BsZWFzZSBmb2xsb3cgdGhlIHppcCBjb2RlIGZvcm1hdDogNTMwMjEnO1xuICB9XG4gIHppcGNvZGUuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcbn07XG5cbnppcGNvZGUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gIGlmICh6aXBjb2RlLnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgemlwY29kZV9lcnJvci50ZXh0Q29udGVudCA9ICcnO1xuICAgIHppcGNvZGUuY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3InKTtcbiAgfSBlbHNlIHtcbiAgICBjbGVhclRpbWVvdXQoemlwVGltZW91dCk7XG4gICAgemlwVGltZW91dCA9IHNldFRpbWVvdXQoemlwQ29kZUVycm9yLCAyMDAwKTtcbiAgfVxufSk7XG5cbmNvbnN0IHBhc3N3b3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Bhc3N3b3JkJyk7XG5jb25zdCBwYXNzd29yZF9lcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwYXNzd29yZC1lcnJvcicpO1xubGV0IHBhc3NUaW1lb3V0O1xuY29uc3QgcGFzc1dvcmRFcnJvciA9ICgpID0+IHtcbiAgaWYgKHBhc3N3b3JkLnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xuICAgIHBhc3N3b3JkX2Vycm9yLnRleHRDb250ZW50ID0gJ1lvdSBuZWVkIHRvIGVudGVyIGEgcGFzc3dvcmQnO1xuICB9IGVsc2UgaWYgKHBhc3N3b3JkLnZhbGlkaXR5LnRvb1Nob3J0KSB7XG4gICAgcGFzc3dvcmRfZXJyb3IudGV4dENvbnRlbnQgPSAnUGFzc3dvcmQgaXMgdG9vIHNob3J0LiA2LTIwIENoYXJhY3RlcnMnO1xuICB9IGVsc2UgaWYgKHBhc3N3b3JkLnZhbGlkaXR5LnRvb0xvbmcpIHtcbiAgICBwYXNzd29yZF9lcnJvci50ZXh0Q29udGVudCA9ICdQYXNzd29yZCBpcyB0b28gbG9uZy4gNi0yMCBDaGFyYWN0ZXJzJztcbiAgfVxuICBwYXNzd29yZC5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xufTtcblxucGFzc3dvcmQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xuICBpZiAocGFzc3dvcmQudmFsaWRpdHkudmFsaWQpIHtcbiAgICBwYXNzd29yZF9lcnJvci50ZXh0Q29udGVudCA9ICcnO1xuICAgIHBhc3N3b3JkLmNsYXNzTGlzdC5yZW1vdmUoJ2Vycm9yJyk7XG4gICAgcGFzc3dvcmQuY2xhc3NMaXN0LmFkZCgnY29ycmVjdCcpO1xuICB9IGVsc2Uge1xuICAgIGNsZWFyVGltZW91dChwYXNzVGltZW91dCk7XG4gICAgcGFzc1RpbWVvdXQgPSBzZXRUaW1lb3V0KHBhc3NXb3JkRXJyb3IsIDEwMDApO1xuICB9XG59KTtcblxuY29uc3QgcGFzc3dvcmRfY29uZmlybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwYXNzd29yZC1jb25maXJtJyk7XG5jb25zdCBwYXNzd29yZF9jb25maXJtX2Vycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Bhc3N3b3JkLWNvbmZpcm0tZXJyb3InKTtcblxuY29uc3QgcGFzc1dvcmRDb25maXJtRXJyb3IgPSAoZSkgPT4ge1xuICBpZiAocGFzc3dvcmRfY29uZmlybS52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcbiAgICBwYXNzd29yZF9jb25maXJtX2Vycm9yLnRleHRDb250ZW50ID0gJ1lvdSBuZWVkIHRvIG1hdGNoIHRoZSBwYXNzd29yZCBhYm92ZSc7XG4gIH0gZWxzZSBpZiAocGFzc3dvcmRfY29uZmlybS52YWxpZGl0eS50b29TaG9ydCkge1xuICAgIHBhc3N3b3JkX2NvbmZpcm1fZXJyb3IudGV4dENvbnRlbnQgPSAnWW91IG5lZWQgdG8gbWF0Y2ggdGhlIHBhc3N3b3JkIGFib3ZlJztcbiAgfVxuICBwYXNzd29yZF9jb25maXJtLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XG4gIHBhc3N3b3JkX2NvbmZpcm0uY2xhc3NMaXN0LnJlbW92ZSgnY29ycmVjdCcpO1xuICBwYXNzd29yZF9jb25maXJtLmNsYXNzTGlzdC5yZW1vdmUoJ3ZhbGlkZXJyb3InKTtcbn07XG5cbnBhc3N3b3JkX2NvbmZpcm0uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xuICBpZiAocGFzc3dvcmRfY29uZmlybS52YWxpZGl0eS52YWxpZCkge1xuICAgIGlmIChwYXNzd29yZF9jb25maXJtLnZhbHVlID09PSBwYXNzd29yZC52YWx1ZSkge1xuICAgICAgcGFzc3dvcmRfY29uZmlybV9lcnJvci50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgcGFzc3dvcmRfY29uZmlybS5jbGFzc0xpc3QucmVtb3ZlKCdlcnJvcicpO1xuICAgICAgcGFzc3dvcmRfY29uZmlybS5jbGFzc0xpc3QucmVtb3ZlKCd2YWxpZGVycm9yJyk7XG4gICAgICBwYXNzd29yZF9jb25maXJtLmNsYXNzTGlzdC5hZGQoJ2NvcnJlY3QnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFzc3dvcmRfY29uZmlybV9lcnJvci50ZXh0Q29udGVudCA9ICdQYXNzd29yZHMgZG8gbm90IG1hdGNoJztcbiAgICAgIHBhc3N3b3JkX2NvbmZpcm0uY2xhc3NMaXN0LmFkZCgndmFsaWRlcnJvcicpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBwYXNzV29yZENvbmZpcm1FcnJvcigpO1xuICB9XG59KTtcblxuLy8gYmVjYXVzZSB3ZSBwdXQgbm92YWxpZGF0ZSBvbiBodG1sIGZvcm0sIHRoZSBmb3JtIHN1Ym1pdHMgd2l0aCBlbXB0eSBmaWVsZHMgZGVzcGl0ZSBiZWluZyBlbXB0eSwgc28gd2UgbmVlZCB0byBjb2RlIGEgc3VibWl0IGxpc3RlbmVyIG9uIHRoZSBidXR0b25cbi8vIHRoYXQgd2lsbCBzdG9wIHByb3BvZ2F0aW9uIGlmIHdyb25nXG5cbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gIGlmICghZW1haWwudmFsaWRpdHkudmFsaWQgfHwgIWNvdW50cnkudmFsaWRpdHkudmFsaWQgfHwgIXppcGNvZGUudmFsaWRpdHkudmFsaWQgfHwgIXBhc3N3b3JkLnZhbGlkaXR5LnZhbGlkIHx8ICFwYXNzd29yZF9jb25maXJtLnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgaWYgKGVtYWlsLnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xuICAgICAgZW1haWxfZXJyb3IudGV4dENvbnRlbnQgPSAnKiBZb3UgbmVlZCB0byBlbnRlciBhbiBFLW1haWwgQWRkcmVzcyc7XG4gICAgICBlbWFpbC5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xuICAgIH1cbiAgICBpZiAoY291bnRyeS52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcbiAgICAgIGNvdW50cnlfZXJyb3IudGV4dENvbnRlbnQgPSAnWW91IG5lZWQgdG8gZW50ZXIgYSBDb3VudHJ5JztcbiAgICAgIGNvdW50cnkuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcbiAgICB9XG4gICAgaWYgKHppcGNvZGUudmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XG4gICAgICB6aXBjb2RlX2Vycm9yLnRleHRDb250ZW50ID0gJ1lvdSBuZWVkIHRvIGVudGVyIGEgWmlwIENvZGUnO1xuICAgICAgemlwY29kZS5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xuICAgIH1cbiAgICBpZiAocGFzc3dvcmQudmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XG4gICAgICBwYXNzd29yZF9lcnJvci50ZXh0Q29udGVudCA9ICdZb3UgbmVlZCB0byBlbnRlciBhIHBhc3N3b3JkJztcbiAgICAgIHBhc3N3b3JkLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XG4gICAgfVxuICAgIGlmIChwYXNzd29yZF9jb25maXJtLnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xuICAgICAgcGFzc3dvcmRfY29uZmlybV9lcnJvci50ZXh0Q29udGVudCA9ICdZb3UgbmVlZCB0byBtYXRjaCB0aGUgcGFzc3dvcmQgYWJvdmUnO1xuICAgICAgcGFzc3dvcmRfY29uZmlybS5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKCdzdWJtaXQgd2l0aCBpbnZhbGlkJyk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgLy8gcHJldmVudHMgZm9ybSBzdWJtaXR0aW5nIGlmIGFueSBpbnB1dHMgYXJlIGludmFsaWRcbiAgfVxuICAvLyBmaXhcbiAgd2luZG93Lm9wZW4oJ2h0dHBzOi8vZ2l0aHViLmNvbS9Nb29zZUNhcGl0YWwnKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9

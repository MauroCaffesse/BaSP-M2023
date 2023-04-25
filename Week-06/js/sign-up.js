var nameInput = document.querySelector('#name');
var lastnameInput = document.querySelector('#lastname');
var idInput = document.querySelector('#id');
var birthDateInput = document.querySelector('#birthdate');
var phoneInput = document.querySelector('#phone');
var addressInput = document.querySelector('#address');
var cityInput = document.querySelector('#city');
var zipCodeInput = document.querySelector('#zipcode');
var emailInput = document.querySelector('#email');
var passwordInput = document.querySelector('#password');
var repeatPasswordInput = document.querySelector('#r-password');
var errorParagraph = document.querySelectorAll('.input-p');
var signupBtn = document.querySelector('.signup-btn');
var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

nameInput.addEventListener('blur', nameValidation)
nameInput.addEventListener('focus', nameFocus)
lastnameInput.addEventListener('blur', lastnameValidation)
lastnameInput.addEventListener('focus', lastnameFocus)
idInput.addEventListener('blur', idValidation)
idInput.addEventListener('focus', idFocus)
birthDateInput.addEventListener('blur', birthDateValidation)
birthDateInput.addEventListener('focus', birthDateFocus)
phoneInput.addEventListener('blur', phoneValidation)
phoneInput.addEventListener('focus', phoneFocus)
addressInput.addEventListener('blur', addressValidation)
addressInput.addEventListener('focus', addressFocus)
cityInput.addEventListener('blur', cityValidation)
cityInput.addEventListener('focus', cityFocus)

function errorStylesOn(index) {
  errorParagraph[index].classList.add('red-text');
  errorParagraph[index].classList.remove('error')
}

function errorStylesOff(index) {
  errorParagraph[index].classList.remove('red-text');
  errorParagraph[index].classList.add('error');
}

function hasLetters(value) {
  if (value.length < 3) {
    return false;
  }
  for (var i = 0; i < value.length; i++) {
    var asciiCode = value.charCodeAt(i);
    if (!(asciiCode > 64 && asciiCode < 91) && !(asciiCode > 96 && asciiCode < 123)) {
      return false;
    }
  }
  return true;
}

function nameValidation() {
  if (!hasLetters(nameInput.value)) {
    nameInput.classList.add('red-border');
    errorStylesOn(0);
    errorParagraph[0].textContent = 'Please enter a valid Name';
  }
  return true;
}

function nameFocus() {
  nameInput.classList.remove('red-border');
  errorStylesOff(0);
}

function lastnameValidation() {
  if (!hasLetters(lastnameInput.value)) {
    lastnameInput.classList.add('red-border');
    errorStylesOn(1);
    errorParagraph[1].textContent = 'Please enter a valid Last name';
  }
  return true;
}

function lastnameFocus() {
  lastnameInput.classList.remove('red-border');
  errorStylesOff(1);
}

function hasNumbers(value) {
  if (value.length < 7) {
    return false;
  }
  for(i = 0; i < value.length; i++) {
    if(isNaN(parseInt(value[i]))) {
      return false;
    }
  }
  return true;
}

function idValidation() {
  if(!hasNumbers(idInput.value)) {
    idInput.classList.add('red-border');
    errorStylesOn(2);
    errorParagraph[2].textContent = 'Please enter a valid ID';
  }
}

function idFocus() {
  idInput.classList.remove('red-border');
  errorStylesOff(2);
}

function validateBirthDate(date) {
  if(!date) {
    return false;
  }
  var birthDate = new Date(date);
  var currentDate = new Date();
  if (birthDate.getTime() >= currentDate.getTime()) {
    return false;
  }
  return true;
};

function formatDate(date) {
  var dateArray = date.split("-");
  var reverseArray = dateArray.reverse();
  var finalDate = reverseArray.join('/');
  return finalDate;
}

function birthDateValidation() {
  if (!validateBirthDate(birthDateInput.value)) {
    birthDateInput.classList.add('red-border');
    errorStylesOn(3);
    errorParagraph[3].textContent = 'Please enter a valid Birth date';
  }
}

function birthDateFocus() {
  birthDateInput.classList.remove('red-border');
  errorStylesOff(3);
}

function hasTenNumbers(value) {
  if (value.length != 10) {
    return false;
  }
  for(i = 0; i < value.length; i++) {
    if(isNaN(parseInt(value[i]))) {
      return false;
    }
  }
  return true;
}

function phoneValidation() {
  if(!hasTenNumbers(phoneInput.value)) {
    phoneInput.classList.add('red-border');
    errorStylesOn(4);
    errorParagraph[4].textContent = 'Please enter a valid Phone number';
  }
}

function phoneFocus() {
  errorStylesOff(4);
  phoneInput.classList.remove('red-border');
}

function validateAddress(value) {
  var addressVal = value.trim();
  if (addressInput.value.length < 5) {
    return false;
  }
  if (addressVal.indexOf(' ') === -1 ||
  addressVal.indexOf(' ') === 0 ||
  addressVal.indexOf(' ') === addressVal.length - 1) {
    return false;
  }
  return true;
}

function addressHasNum(value) {
  for (var i = 0; i < value.length; i++) {
    var asciiNumCode = value.charCodeAt(i);
    if ((asciiNumCode >= 48 && asciiNumCode <= 57)) {
      return true;
    }
  }
  return false;
}

function addressHasLetter(value) {
  for (var i = 0; i < value.length; i++) {
    var asciiLetCode = value.charCodeAt(i);
    if ((asciiLetCode > 64 && asciiLetCode < 91) || (asciiLetCode > 96 && asciiLetCode < 123)) {
      return true;
    }
  }
  return false;
}

function addressValidation() {
  if (!validateAddress(addressInput.value) || !addressHasNum(addressInput.value) ||
  !addressHasLetter(addressInput.value)) {
    errorStylesOn(5);
    addressInput.classList.add('red-border');
    errorParagraph[5].textContent = 'Please enter a valid Address';
  }
  return true;
}

function addressFocus() {
  errorStylesOff(5);
  addressInput.classList.remove('red-border');
}

function cityHasSimbols(value) {
  var letterCount = 0;
  for (var i = 0; i < value.length; i++) {
    var asciiCode = value.charCodeAt(i);
    if ((asciiCode >= 48 && asciiCode <= 57) || (asciiCode > 64 && asciiCode < 91) ||
    (asciiCode > 96 && asciiCode < 123)) {
      if ((asciiCode > 64 && asciiCode < 91) || (asciiCode > 96 && asciiCode < 123)) {
        letterCount++;
      }
    } else {
      return false;
    }
  }
  return letterCount > 3;
}

function cityValidation() {
  if (!cityHasSimbols(cityInput.value)) {
    errorStylesOn(6);
    cityInput.classList.add('red-border');
    errorParagraph[6].textContent = 'Please enter a valid City';
  }
  return true;
}

function cityFocus() {
  errorStylesOff(6);
  cityInput.classList.remove('red-border');
}

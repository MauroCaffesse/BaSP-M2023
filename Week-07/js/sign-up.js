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
var modalSuccessful = document.querySelector('.modal-signup-container');
var modalSuccessTitle = document.querySelector('.modal-header-p');
var modalSuccessMainOne = document.querySelector('.modal-main-p-one');
var modalSuccessMainTwo = document.querySelector('.modal-main-p-two');
var modalSuccessBtn = document.querySelector('.modal-footer-btn');
var modalError = document.querySelector('.modal-signup-container-error');
var modalErrorTitle = document.querySelector('.modal-header-p-error');
var modalErrorMain = document.querySelector('.modal-main-p-error');
var modalErrorBtn = document.querySelector('.modal-footer-btn-error');
var exitBtn = document.querySelector('.cross-img');

nameInput.addEventListener('blur', nameValidation);
nameInput.addEventListener('focus', nameFocus);
lastnameInput.addEventListener('blur', lastnameValidation);
lastnameInput.addEventListener('focus', lastnameFocus);
idInput.addEventListener('blur', idValidation);
idInput.addEventListener('focus', idFocus);
birthDateInput.addEventListener('blur', birthDateValidation);
birthDateInput.addEventListener('focus', birthDateFocus);
phoneInput.addEventListener('blur', phoneValidation);
phoneInput.addEventListener('focus', phoneFocus);
addressInput.addEventListener('blur', addressValidation);
addressInput.addEventListener('focus', addressFocus);
cityInput.addEventListener('blur', cityValidation);
cityInput.addEventListener('focus', cityFocus);
zipCodeInput.addEventListener('blur', zipCodeValidation);
zipCodeInput.addEventListener('focus', zipCodeFocus);
emailInput.addEventListener('blur', emailValidation);
emailInput.addEventListener('focus', emailFocus);
passwordInput.addEventListener('blur', passwordValidation);
passwordInput.addEventListener('focus', passwordFocus);
repeatPasswordInput.addEventListener('blur', repeatPassValidation);
repeatPasswordInput.addEventListener('focus', repeatPassFocus);
signupBtn.addEventListener('click', signupButton);
document.addEventListener('DOMContentLoaded', loadedForm);
document.addEventListener('click', changeModal);

function errorStylesOn(index) {
  errorParagraph[index].classList.add('red-text');
  errorParagraph[index].classList.remove('error')
};

function errorStylesOff(index) {
  errorParagraph[index].classList.remove('red-text');
  errorParagraph[index].classList.add('error');
};

function modalErrorFn(title, msg) {
  modalError.classList.add('modal-d-block');
  modalErrorTitle.textContent = title;
  modalErrorMain.textContent = msg;
  modalErrorBtn.onclick = function() {
    modalError.classList.remove('modal-d-block');
  };
};

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
};

function nameValidation() {
  if (!hasLetters(nameInput.value)) {
    nameInput.classList.add('red-border');
    errorStylesOn(0);
    errorParagraph[0].textContent = 'Please enter a valid Name';
  }
  return true;
};

function nameFocus() {
  nameInput.classList.remove('red-border');
  errorStylesOff(0);
};

function lastnameValidation() {
  if (!hasLetters(lastnameInput.value)) {
    lastnameInput.classList.add('red-border');
    errorStylesOn(1);
    errorParagraph[1].textContent = 'Please enter a valid Last name';
  }
  return true;
};

function lastnameFocus() {
  lastnameInput.classList.remove('red-border');
  errorStylesOff(1);
};

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
};

function idValidation() {
  if(!hasNumbers(idInput.value)) {
    idInput.classList.add('red-border');
    errorStylesOn(2);
    errorParagraph[2].textContent = 'Please enter a valid ID';
  }
};

function idFocus() {
  idInput.classList.remove('red-border');
  errorStylesOff(2);
};

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
  var finalDate = dateArray[2] + '/' + dateArray[1] + '/' + dateArray[0];
  return finalDate;
};

function birthDateValidation() {
  if (!validateBirthDate(birthDateInput.value)) {
    birthDateInput.classList.add('red-border');
    errorStylesOn(3);
    errorParagraph[3].textContent = 'Please enter a valid Birth date';
  }
};

function birthDateFocus() {
  birthDateInput.classList.remove('red-border');
  errorStylesOff(3);
};

function hasTenNumbers(value) {
  if (value.length != 10) {
    return false;
  }
  for(i = 0; i < value.length; i++) {
    if(isNaN(parseInt(value[i]))) {
      return false;
    }
  };
  return true;
};

function phoneValidation() {
  if(!hasTenNumbers(phoneInput.value)) {
    phoneInput.classList.add('red-border');
    errorStylesOn(4);
    errorParagraph[4].textContent = 'Please enter a valid Phone number';
  }
};

function phoneFocus() {
  errorStylesOff(4);
  phoneInput.classList.remove('red-border');
};

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
};

function addressHasNum(value) {
  for (var i = 0; i < value.length; i++) {
    var asciiNumCode = value.charCodeAt(i);
    if ((asciiNumCode >= 48 && asciiNumCode <= 57)) {
      return true;
    }
  };
  return false;
};

function addressHasLetter(value) {
  for (var i = 0; i < value.length; i++) {
    var asciiLetCode = value.charCodeAt(i);
    if ((asciiLetCode > 64 && asciiLetCode < 91) || (asciiLetCode > 96 && asciiLetCode < 123)) {
      return true;
    }
  };
  return false;
};

function addressValidation() {
  if (!validateAddress(addressInput.value) || !addressHasNum(addressInput.value) ||
  !addressHasLetter(addressInput.value)) {
    errorStylesOn(5);
    addressInput.classList.add('red-border');
    errorParagraph[5].textContent = 'Please enter a valid Address';
  }
  return true;
};

function addressFocus() {
  errorStylesOff(5);
  addressInput.classList.remove('red-border');
};

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
    };
  };
  return letterCount > 3;
};

function cityValidation() {
  if (!cityHasSimbols(cityInput.value)) {
    errorStylesOn(6);
    cityInput.classList.add('red-border');
    errorParagraph[6].textContent = 'Please enter a valid City';
  }
  return true;
};

function cityFocus() {
  errorStylesOff(6);
  cityInput.classList.remove('red-border');
};

function validateZipCode(value) {
  if (value.length < 4 || value.length > 5) {
    return false;
  }
  for(i = 0; i < value.length; i++) {
    if(isNaN(parseInt(value[i]))) {
      return false;
    }
  }
  return true;
};

function zipCodeValidation() {
  if (!validateZipCode(zipCodeInput.value)) {
    errorStylesOn(7);
    zipCodeInput.classList.add('red-border');
    errorParagraph[7].textContent = 'Please enter a valid Zip code';
  }
  return true;
};

function zipCodeFocus() {
  errorStylesOff(7);
  zipCodeInput.classList.remove('red-border');
};

function validateEmail(value) {
  if (!emailExpression.test(value) || value.length < 5) {
    return false;
  }
  return true;
};

function emailValidation() {
  if(!validateEmail(emailInput.value)) {
    errorStylesOn(8);
    emailInput.classList.add('red-border');
    errorParagraph[8].textContent = 'Please enter a valid Email';
  }
  return true;
};

function emailFocus() {
  errorStylesOff(8);
  emailInput.classList.remove('red-border');
};

function validatePassword(value) {
  var num = 0;
  var char = 0;
  for (var i = 0; i < value.length; i++) {
    if (value.charCodeAt(i) >= 48 && value.charCodeAt(i) <= 57) {
      num++;
    } else if (value.charCodeAt(i) >= 65 && value.charCodeAt(i) <= 90 || value.charCodeAt(i) >= 97 &&
    value.charCodeAt(i) <= 122) {
      char++;
    } else {
      return false;
    };
  };
  if (num > 0 && char > 0 && value.length >= 8) {
    return true;
  } else {
    return false;
  }
};

function passwordValidation() {
  if(!validatePassword(passwordInput.value)) {
    errorStylesOn(9);
    passwordInput.classList.add('red-border');
    errorParagraph[9].textContent = 'Please enter a valid Password';
  }
  return true;
};

function passwordFocus() {
  errorStylesOff(9);
  passwordInput.classList.remove('red-border');
};

function validateRepeatPass(value) {
  if(!value) {
    return false;
  }
  var password = passwordValidation(passwordInput.value);
  if(password === true && value === passwordInput.value) {
    return true;
  }
};

function repeatPassValidation() {
  if(!validateRepeatPass(repeatPasswordInput.value)) {
    errorStylesOn(10);
    repeatPasswordInput.classList.add('red-border');
    errorParagraph[10].textContent = 'Please enter the same Password';
  }
  return true;
};

function repeatPassFocus() {
  errorStylesOff(10);
  repeatPasswordInput.classList.remove('red-border');
};

var modalOpen = false;

function signupButton(e) {
  e.preventDefault();
  var finalDate = formatDate(birthDateInput.value);
  var fields = [
    { valid: hasLetters(nameInput.value), errorIndex: 0, input: nameInput },
    { valid: hasLetters(lastnameInput.value), errorIndex: 1, input: lastnameInput },
    { valid: hasNumbers(idInput.value), errorIndex: 2, input: idInput },
    { valid: validateBirthDate(birthDateInput.value), errorIndex: 3, input: birthDateInput },
    { valid: hasTenNumbers(phoneInput.value), errorIndex: 4, input: phoneInput },
    { valid: validateAddress(addressInput.value) && addressHasNum(addressInput.value) &&
    addressHasLetter(addressInput.value), errorIndex: 5, input: addressInput },
    { valid: cityHasSimbols(cityInput.value), errorIndex: 6, input: cityInput },
    { valid: validateZipCode(zipCodeInput.value), errorIndex: 7, input: zipCodeInput },
    { valid: validateEmail(emailInput.value), errorIndex: 8, input: emailInput },
    { valid: validatePassword(passwordInput.value), errorIndex: 9, input: passwordInput },
    { valid: validateRepeatPass(repeatPasswordInput.value), errorIndex: 10, input: repeatPasswordInput }
  ];
  var errors = [
    'Name.',
    '\nLast name.',
    '\nID.',
    '\nBirth date.',
    '\nPhone number.',
    '\nAddress.',
    '\nCity.',
    '\nZip code.',
    '\nEmail.',
    '\nPassword.',
    '\nRepeat password.'
  ];
  var invalidInputs = [];
  var invalidInputsMessage = '';
  for (var i = 0; i < fields.length; i++) {
    var field = fields[i];
    if (!field.valid) {
      errorStylesOn(field.errorIndex);
      errorParagraph[field.errorIndex].textContent = 'Please enter a valid ' + errors[i];
      field.input.classList.add('red-border');
      invalidInputs.push(field);
      invalidInputsMessage += errors[i];
    };
  };
  if (invalidInputs.length > 0) {
    modalErrorFn('Unsuccessful Requirement', 'Following fields must be correct: ' + invalidInputsMessage);
  } else {
    modalOpen = true;
    var nameValue = nameInput.value;
    var lastnameValue = lastnameInput.value;
    var idValue = idInput.value;

    var arrayDate = birthDateInput.value.split('-');
    var formattedDate = arrayDate[1] + '/' + arrayDate[2] + '/' + arrayDate[0];
    
    var phoneValue = phoneInput.value;
    var addressValue = addressInput.value;
    var cityValue = cityInput.value;
    var zipCodeValue = zipCodeInput.value;
    var emailValue = emailInput.value;
    var passwordValue = passwordInput.value;

    var keyValueData = [
      { key: "name", value: nameValue },
      { key: "lastName", value: lastnameValue },
      { key: "dni", value: idValue },
      { key: "dob", value: formattedDate },
      { key: "phone", value: phoneValue },
      { key: "address", value: addressValue },
      { key: "city", value: cityValue },
      { key: "zip", value: zipCodeValue },
      { key: "email", value: emailValue },
      { key: "password", value: passwordValue },
    ];
    
    var url = 'https://api-rest-server.vercel.app/signup?name=' + 
      nameValue + '&lastName=' + lastnameValue + '&dni=' + 
      idValue + '&dob=' + formattedDate + '&phone=' + phoneValue + '&address=' + 
      addressValue + '&city=' + cityValue + '&zip=' + zipCodeValue + '&email=' + 
      emailValue + '&password=' + passwordValue;
      
    fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if(!data.success) {
        throw new Error('Unsuccessful Registration. \n' + data.errors[0].msg);
      }
      modalSuccessful.classList.add('modal-d-block');
      modalSuccessTitle.textContent = 'Registration completed successfully.';
      modalSuccessMainOne.textContent =
      '\nName: ' + nameInput.value +
      '\nLastname: ' + lastnameInput.value +
      '\nID: ' + idInput.value +
      '\nBirth date: ' + finalDate +
      '\nPhone number: ' + phoneInput.value +
      '\nAddress: ' + addressInput.value +
      '\nCity: ' + cityInput.value +
      '\nZip code: ' + zipCodeInput.value +
      '\nEmail: ' + emailInput.value +
      '\nPassword: ' + passwordInput.value;
      modalSuccessMainTwo.textContent = data.msg;
      modalSuccessBtn.onclick = function() {
        modalSuccessful.classList.remove('modal-d-block');
      };
      exitBtn.onclick = function() {
        modalSuccessful.classList.remove('modal-d-block');
      };
      for (var i = 0; i < keyValueData.length; i++) {
        var data = keyValueData[i];
        localStorage.setItem(data.key, data.value);  
      };
    })
    .catch(function (error) {
      modalErrorFn('Unsuccessful Requirement', error);
    });
  };
};

function loadedForm() {
  var keyInputsData = [
    { key: "name", input: nameInput },
    { key: "lastName", input: lastnameInput },
    { key: "dni", input: idInput },
    { key: "dob", input: birthDateInput },
    { key: "phone", input: phoneInput },
    { key: "address", input: addressInput },
    { key: "city", input: cityInput },
    { key: "zip", input: zipCodeInput },
    { key: "email", input: emailInput },
    { key: "password", input: passwordInput },
    { key: "password", input: repeatPasswordInput },
  ];
  for (var i = 0; i < keyInputsData.length; i++) {
    var data = keyInputsData[i];
    if(localStorage.getItem(data.key)) {
      if(data.key === "dob") {
        var storedDate = localStorage.getItem(data.key);
        var showedDate = new Date(storedDate);
        data.input.value = showedDate.toLocaleDateString("en-CA");
      } else {
        data.input.value = localStorage.getItem(data.key);
      };
    };
  };
};

function changeModal(e) {
  if (modalOpen && e.target !== modalSuccessful && e.target !== modalError) {
    modalSuccessful.classList.remove('modal-d-block');
    modalError.classList.remove('modal-d-block');
    modalOpen = false;
  }
};
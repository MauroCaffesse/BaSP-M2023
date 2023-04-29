var mailInput = document.querySelector('#user');
var passwordInput = document.querySelector('#password');
var errorParagraph = document.querySelectorAll('.input-p-login');
var loginBtn = document.querySelector('.login-btn');
var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
var modalSuccessful = document.querySelector('.modal-login-container');
var modalSuccessTitle = document.querySelector('.modal-header-p');
var modalSuccessMainOne = document.querySelector('.modal-main-p-one');
var modalSuccessMainTwo = document.querySelector('.modal-main-p-two');
var modalSuccessBtn = document.querySelector('.modal-footer-btn');
var modalError = document.querySelector('.modal-login-container-error');
var modalErrorTitle = document.querySelector('.modal-header-p-error');
var modalErrorMain = document.querySelector('.modal-main-p-error');
var modalErrorBtn = document.querySelector('.modal-footer-btn-error');

mailInput.addEventListener('blur', emailBlurValidation);
mailInput.addEventListener('focus', emailFocusValidation);
passwordInput.addEventListener('blur', passwordBlurValidation);
passwordInput.addEventListener('focus', passwordFocusValidation);
loginBtn.addEventListener('click', loginButton);
document.addEventListener('click', outsideModal);

function errorStylesOn(index) {
  errorParagraph[index].classList.add('red-text');
    errorParagraph[index].classList.remove('error')
};

function errorStylesOff(index) {
  errorParagraph[index].classList.remove('red-text');
  errorParagraph[index].classList.add('error');
};

function validateEmail(email) {
  if (!emailExpression.test(email) || email.length < 5) {
    return false;
  }
  return true;
};

function emailBlurValidation() {
  if(!validateEmail(mailInput.value)) {
    mailInput.classList.add('red-border');
    errorStylesOn(0);
    errorParagraph[0].textContent = 'Please enter a valid Email';
  }
  return true;
};

function emailFocusValidation() {
  mailInput.classList.remove('red-border');
  errorStylesOff(0);
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
  };
};

function passwordBlurValidation() {
  if (!validatePassword(passwordInput.value)) {
    passwordInput.classList.add('red-border');
    errorStylesOn(1);
    errorParagraph[1].textContent = 'Please enter a valid Password';
  }
  return true;
};

function passwordFocusValidation() {
  passwordInput.classList.remove('red-border');
  errorStylesOff(1)
};

var modalOpen = false;

function loginButton(e) {
  e.preventDefault();
  var fields = [
    { valid: validateEmail(mailInput.value), errorIndex: 0, input: mailInput },
    { valid: validatePassword(passwordInput.value), errorIndex: 1, input: passwordInput },
  ];
  var errors = ['Email.\n','Password.\n'];
  var invalidInputsMessage = '';
  var invalidInputs = [];
  for (var i = 0; i < fields.length; i++) {
    var field = fields[i];
    if (!field.valid) {
      errorStylesOn(field.errorIndex);
      errorParagraph[field.errorIndex].textContent = 'Please enter a valid ' + errors[i];
      field.input.classList.add('red-border');
      invalidInputs.push(field);
      invalidInputsMessage += errors[i];
    }
  };
  if (invalidInputs.length > 0) {
    modalError.classList.add('modal-d-block');
    modalErrorTitle.textContent = 'Unsuccessful Requirement';
    modalErrorMain.textContent = 'Following fields must be correct: ' + invalidInputsMessage;
    modalErrorBtn.onclick = function() {
      modalError.classList.remove('modal-d-block');
    };
  } else {
    modalOpen = true;
    var emailValue = mailInput.value;
    var passwordValue = passwordInput.value;

    var url = ` https://api-rest-server.vercel.app/login?email=${emailValue}&password=${passwordValue}`;

    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        if (!data.success) {
          throw new Error("Unsuccessful Log In. " + '\n' + JSON.stringify(data));
        }
        modalSuccessful.classList.add('modal-d-block');
        modalSuccessTitle.textContent = 'Log In Successful!';
        modalSuccessMainOne.textContent = 'User: ' + mailInput.value + '\n' +  'Password: ' + passwordInput.value;
        modalSuccessMainTwo.textContent = JSON.stringify(data);
        modalSuccessBtn.onclick = function() {
          modalSuccessful.classList.remove('modal-d-block');
        };
      })
      .catch(function (error) {
        modalError.classList.add('modal-d-block');
        modalErrorTitle.textContent = 'Unsuccessful Requirement';
        modalErrorMain.textContent = error;
        modalErrorBtn.onclick = function() {
          modalError.classList.remove('modal-d-block');
        };
      });
  };
};

function outsideModal(e) {
  if (modalOpen && e.target !== modalSuccessful && e.target !== modalError) {
    modalSuccessful.classList.remove('modal-d-block');
    modalError.classList.remove('modal-d-block');
    modalOpen = false;
  }
}
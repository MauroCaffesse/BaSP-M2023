var mailInput = document.querySelector('#user');
var passwordInput = document.querySelector('#password');
var errorParagraph = document.querySelectorAll('.input-p-login');
var loginBtn = document.querySelector('.login-btn');
var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

mailInput.addEventListener('blur', emailBlurValidation);
mailInput.addEventListener('focus', emailFocusValidation);
passwordInput.addEventListener('blur', passwordBlurValidation);
passwordInput.addEventListener('focus', passwordFocusValidation);
loginBtn.addEventListener('click', loginButton);

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

function loginButton(e) {
  e.preventDefault();
  var fields = [
    { valid: validateEmail(mailInput.value), errorIndex: 0, input: mailInput },
    { valid: validatePassword(passwordInput.value), errorIndex: 1, input: passwordInput },
  ];
  var errors = ['Email','\n' + 'Password'];
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
    alert('Following fields must be correct:' + '\n' + invalidInputsMessage);
  } else {
    alert('User: ' + mailInput.value + '\nPassword: ' + passwordInput.value);
  };
};
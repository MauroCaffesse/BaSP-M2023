var mailInput = document.querySelector('#user');
var passwordInput = document.querySelector('#password');
var errorParagraph = document.querySelectorAll('.input-p-login');
var loginBtn = document.querySelector('.login-btn');
var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

mailInput.addEventListener('blur', emailBlurValidation);
mailInput.addEventListener('focus', emailFocusValidation);
passwordInput.addEventListener('blur', passwordBlurValidation);
passwordInput.addEventListener('focus', passwordFocusValidation);
loginBtn.addEventListener('click', loginButton)

function validateEmail(email) {
  if (!emailExpression.test(email) || email.length < 5) {
    return false;
  }
  return true;
}

function emailBlurValidation() {
  if(!validateEmail(mailInput.value)) {
    mailInput.classList.add('red-border');
    errorParagraph[0].classList.add('red-text');
    errorParagraph[0].classList.remove('error');
  }
  return true;
}

function emailFocusValidation() {
  mailInput.classList.remove('red-border');
  errorParagraph[0].classList.remove('red-text');
  errorParagraph[0].classList.add('error');
}

function validatePassword(password) {
  var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  for (var i = 0; i < password.length; i++) {
    if (numbers.includes(password[i])) {
      return true;
    }
  }
  return false;
}

function hasNumbersAndChar(password) {
  var num = 0;
  var char = 0;

  for (var i = 0; i < password.length; i++) {
    if (password.length < 8) {
      return false;
    }
    if (validatePassword(password[i])) {
      num++;
    } else {
      char++;
    }
    if (num > 0 && char > 0) {
      return true;
    }
  }
  return false;
}

function passwordBlurValidation() {
  if (!hasNumbersAndChar(passwordInput.value)) {
    errorParagraph[1].classList.remove('error');
    errorParagraph[1].classList.add('red-text');
    passwordInput.classList.add('red-border');
  }
  return true;
};

function passwordFocusValidation() {
  errorParagraph[1].classList.add('error');
  errorParagraph[1].classList.remove('red-text');
  passwordInput.classList.remove('red-border');
};

function loginButton(e) {
  e.preventDefault();
  var isEmailValid = validateEmail(mailInput.value);
  var isPasswordValid = validatePassword(passwordInput.value);
  if(!isEmailValid) {
    errorParagraph[0].classList.remove('error');
    errorParagraph[0].classList.add('red-text');
    mailInput.classList.add('red-border');
  }
  if(!isPasswordValid) {
    errorParagraph[1].classList.remove('error');
    errorParagraph[1].classList.add('red-text');
    passwordInput.classList.add('red-border');
  }
  if (!isEmailValid || !isPasswordValid) {
    alert ('Complete with valid information');
  } else {
    alert('User: ' + mailInput.value + '\n' + 'Password: ' + passwordInput.value)
  }
}
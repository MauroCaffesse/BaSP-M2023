var nameContact = document.querySelector('#name');
var lastnameContact = document.querySelector('#lastname');
var emailContact = document.querySelector('#email');
var selectContact = document.querySelector('#reason-for-contact');
var messageContact = document.querySelector('#message');
var btnContact = document.querySelector('.form-btn-send');
var btnResetContact = document.querySelector('.form-btn-reset');
var errorParagraph = document.querySelectorAll('.contact-input-p');
var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

nameContact.addEventListener('blur', nameContValidation);
nameContact.addEventListener('focus', nameContFocus);
lastnameContact.addEventListener('blur', lastnameContValidation);
lastnameContact.addEventListener('focus', lastnameContFocus);
emailContact.addEventListener('blur', emailContValidation);
emailContact.addEventListener('focus', emailContFocus);
selectContact.addEventListener('blur', optionContValidation);
selectContact.addEventListener('focus', optionContFocus);
messageContact.addEventListener('blur', messageContValidation);
messageContact.addEventListener('focus', messageContFocus);
btnContact.addEventListener('click', submitButton);
btnResetContact.addEventListener('click', resetButton);

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

function nameContValidation() {
  if (!hasLetters(nameContact.value)) {
    errorStylesOn(0);
    nameContact.classList.add('red-border');
    errorParagraph[0].textContent = 'Please enter a valid Name';
  }
  return true;
}

function nameContFocus() {
  errorStylesOff(0);
  nameContact.classList.remove('red-border');
}

function lastnameContValidation() {
  if (!hasLetters(lastnameContact.value)) {
    errorStylesOn(1);
    lastnameContact.classList.add('red-border');
    errorParagraph[1].textContent = 'Please enter a valid Last name';
  }
  return true;
}

function lastnameContFocus() {
  errorStylesOff(1);
  lastnameContact.classList.remove('red-border');
}

function validateEmail(value) {
  if (!emailExpression.test(value) || value.length < 5) {
    return false;
  }
  return true;
}

function emailContValidation() {
  if(!validateEmail(emailContact.value)) {
    errorStylesOn(2);
    emailContact.classList.add('red-border');
    errorParagraph[2].textContent = 'Please enter a valid Email';
  }
  return true;
}

function emailContFocus() {
  errorStylesOff(2);
  emailContact.classList.remove('red-border');
}

function validateOption(value) {
  if (value === '') {
    return false;
  }
  return true;
}

function optionContValidation() {
  if(!validateOption(selectContact.value)) {
    errorStylesOn(3);
    selectContact.classList.add('red-border');
    errorParagraph[3].textContent = 'Please enter a valid Reason for contact';
  }
  return true;
}

function optionContFocus() {
  errorStylesOff(3);
  selectContact.classList.remove('red-border');
}

function validateMessage(value) {
  if(value.length >= 3) {
    return true;
  }
}

function messageContValidation() {
  if(!validateMessage(messageContact.value)) {
    errorStylesOn(4);
    messageContact.classList.add('red-border');
    errorParagraph[4].textContent = 'Please enter a valid Message';
  }
  return true;
}

function messageContFocus() {
  errorStylesOff(4);
  messageContact.classList.remove('red-border');
}

function submitButton(e) {
  e.preventDefault();
  var fields = [
    { valid: hasLetters(nameContact.value), errorIndex: 0, input: nameContact},
    { valid: hasLetters(lastnameContact.value), errorIndex: 1, input: lastnameContact },
    { valid: validateEmail(emailContact.value), errorIndex: 2, input: emailContact },
    { valid: validateOption(selectContact.value), errorIndex: 3, input: selectContact },
    { valid: validateMessage(messageContact.value), errorIndex: 4, input: messageContact },
  ];
  var errors = ['Name','\nLastname','\nEmail','\nReason for contact','\nMessage'];
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
    }
  }
  if (invalidInputs.length > 0) {
    alert('Following fields must be correct:' + '\n' + invalidInputsMessage);
  } else {
    alert('Name: ' + nameContact.value + '\nLast name: ' + lastnameContact.value +
    '\nEmail: ' + emailContact.value +
    '\nReason: ' + selectContact.value +
    '\nMessage: ' + messageContact.value
    );
  }
}

function resetButton(e) {
  e.preventDefault();
  var fields = [
    { valid: hasLetters(nameContact.value), errorIndex: 0, input: nameContact},
    { valid: hasLetters(lastnameContact.value), errorIndex: 1, input: lastnameContact },
    { valid: validateEmail(emailContact.value), errorIndex: 2, input: emailContact },
    { valid: validateOption(selectContact.value), errorIndex: 3, input: selectContact },
    { valid: validateMessage(messageContact.value), errorIndex: 4, input: messageContact },
  ];
  for (var i = 0; i < fields.length; i++) {
    var field = fields[i];
  errorParagraph[field.errorIndex].classList.remove('red-text');
  errorParagraph[field.errorIndex].classList.add('error');
  field.input.classList.remove('red-border');
  }
}
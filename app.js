// 1. get DOM element
const regForm = document.getElementById('registration-form')

const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

regForm.addEventListener('submit', function (e) {
  e.preventDefault()

  validateEmpty(username)
  validateIsEmail(email)
  validatePassMatch(password)
  validatePass2(password2)
 

  //@TODO: add the validation for email (Code Challenge 5a)
  //@TODO: Code Challenge 5b: Refactor your CC 5a to use function with the "blueprints" below

  //@TODO: add the validation for password (Code Challenge 5a)
  //@TODO: Code Challenge 5b: Refactor your CC 5a to use function with the "blueprints" below
})

function validateEmpty(input) {
  console.log(input)
  if (username.value === '') {
      showError(input)
  } else {
      showSuccess(input)
  }
}


function validateIsEmail(input){
  //@TODO: check if input is an email
  console.log(input)
  if (email.value === '') {
      showError(input)
  } else {
    showSuccess(input)
  }
}

function validatePass2(input){
  console.log(input)
  if (password2.value !== password.value) {
    showError(input)
  } else {
    showSuccess(input)
  }
}

function validatePassMatch(input){
  //@TODO: check if the passwords match
  console.log(input)
  if (password.value === password2.value) {
      showSuccess(input)
  } else {
    showError(input)
  }
}

function validateMinLength(input){
  //@TODO: check length
  if (password2.value === '') {
      showError(input)
  } else {

  }
}


function showError(input){
  // steps to do this...
  console.log('input is empty')
input.nextElementSibling.innerHTML = '<small class="error"> ❌ Please enter your username </small>'
  }

function showSuccess (input) {
  console.log('you are ready to submit')
input.nextElementSibling.innerHTML = '<small class="success"> ✔️ Success </small>'
}








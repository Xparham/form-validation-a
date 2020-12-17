// 1. get DOM element
const regForm = document.getElementById('registration-form')

const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

regForm.addEventListener('submit', function (e) {
  e.preventDefault()

  validateEmpty(username)
  validateMinLength(username)


 //@TODO: add the validation for email (Code Challenge 5a)
  //@TODO: Code Challenge 5b: Refactor your CC 5a to use function with the "blueprints" below
  validateIsEmail(email)
 
 
  //@TODO: add the validation for password (Code Challenge 5a)
  //@TODO: Code Challenge 5b: Refactor your CC 5a to use function with the "blueprints" below
  validatePassMatch(password, password2)
  validateMinLength(password, password2)
})

function validateEmpty(username) {
  console.log(username)
  if (username.value === '') {
      showError(username)
  } else {
      showSuccess(username)
  }
}


function validateIsEmail(email){
  //@TODO: check if input is an email
  console.log(email)
  if (emailValidates(email)) {
      showSuccess(email)
  } else {
    showError(email)
  }
}

function emailValidates (email) {
  return /\S+@\S+\.\S+/.test(email)
}
emailIsValid('tyler@tyler@ui.dev') // false
emailIsValid('tyler@ui.dev') // true
}


function validatePassMatch(password, password2){
  //@TODO: check if the passwords match
  console.log(password)
  if (password.value === password2.value) {
      showSuccess(password)
  } 
  else {
    showError(password)
  }

  if (password2.value !== password.value) {
    showError(password2)
  }
  else {
    showSuccess(password2)
  }
}

function validateMinLength(input){
  //@TODO: check length
  if (input.value.length < 4) {
      showError(input)
  } else {
    showSuccess(input)

  }
}



function showError(input){
  // steps to do this...
  console.log(input)
  console.log(input.nextElementSibling)
input.nextElementSibling.innerHTML = '<small class="error"> ❌ Please enter your username </small>'
  }

function showSuccess (input) {
  console.log('you are ready to submit')
input.nextElementSibling.innerHTML = '<small class="success"> ✔️ Success </small>'
}








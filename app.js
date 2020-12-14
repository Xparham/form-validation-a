// 1. get DOM element
const regForm = document.getElementById('registration-form')

const username = document.getElementById('username')
const email = document.getElementById('email')

regForm.addEventListener('submit', function (e) {
  e.preventDefault()

  validateEmpty(username)

  //@TODO: add the validation for email (Code Challenge 5a)
  //@TODO: Code Challenge 5b: Refactor your CC 5a to use function with the "blueprints" below

  //@TODO: add the validation for password (Code Challenge 5a)
  //@TODO: Code Challenge 5b: Refactor your CC 5a to use function with the "blueprints" below
})

function validateEmpty(input) {
  console.log(input)
  if (input.value === '') {
      showError(input)
  } else {
      showSuccess(input)
  }
}

function showError(input){
  // steps to do this...
  console.log('input is empty')
}

function showSuccess () {
    console.log('you are ready to submit')
}

function validatePassMatch(password1, password2){
  //@TODO: check if the passwords match
}

function validateIsEmail(email){
  //@TODO: check if input is an email
}


function validateMinLength(input){
  //@TODO: check length
}

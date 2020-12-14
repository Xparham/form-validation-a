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
  validateEmpty(password2)

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


function validateIsEmail(input){
  //@TODO: check if input is an email
  console.log(input)
  


}

function showError(input){
  // steps to do this...
input.nextElementSibling.innerHTML = '<small class="error"> ❌ Please enter your username </small>'
  
}

function showSuccess (input) {
input.nextElementSibling.innerHTML = '<small class="success"> ✔️ Success </small>'
}

function validatePassMatch(password1, password2){
  //@TODO: check if the passwords match
}



function validateMinLength(input){
  //@TODO: check length
}

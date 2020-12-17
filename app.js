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
  validatePassMatch(password)
  validatePass2Match(password2)
  validateMinLength(password, password2)
})








function validatePassMatch(password, password2){
  //@TODO: check if the passwords match
  // console.log(password)
  if (password.value === password2.value) {
      showSuccess(password, '✔️ Passwords match' )
  } 
  else {
    showError(password, '❌ Passwords do not match' )
  }

  if (password2.value !== password.value) {
    showError(password2, '❌ Passwords do not match')
  }
  else {
    showSuccess(password2, '✔️ Passwords match')
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



function showError(input, msg){
  // steps to do this...
  console.log(input)
  console.log(input.nextElementSibling)
input.nextElementSibling.innerHTML = `<small class="error">${msg}</small>`
  }

function showSuccess (input, msg){
  console.log('you are ready to submit')
input.nextElementSibling.innerHTML = `<small class="success">${msg}</small>`
}








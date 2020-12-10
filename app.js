// 1. get DOM element
const regForm = document.getElementById('registration-form')
const username = document.getElementById('username')
const usernameErr = username.nextElementSibling


const email = document.getElementById('email')
const emailErr = email.nextElementSibling

const password = document.getElementById('password')
const passwordErr = password.nextElementSibling
// const usernameErr = document.getElementById("usernameErr")

// 2. Add event / modification

regForm.addEventListener('click', function (e) {
  e.preventDefault()

  // 2. Check if the value is empty
  if (username.value === '') {
    // 3. If empty, give user some feedback
    usernameErr.className = 'block bg-red-500 text-white'
  } else {
    console.log('sending to server')
  }

  if (email.value === '') {
    emailErr.className = 'block bg-red-500 text-white'
  } else {
    console.log('sending to server')
  }
  
  if (password.value === '') {
    passwordErr.className = 'block bg-red-500 text-white'
  } else {
    console.log('sending to server')
  }

})


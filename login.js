import { navbar } from './navbar.js'

const navbarDiv = document.getElementById('navBar')
navbarDiv.innerHTML = navbar()

document.querySelector('form').addEventListener('submit', login)
var arr = JSON.parse(localStorage.getItem('signup')) || []

function login(event) {
  event.preventDefault()
  var email = document.getElementById('email').value
  var password = document.getElementById('password').value

  var flag = false
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].email === email && arr[i].password === password) {
      flag = true
      break
    }
  }
  if (flag) {
    alert('Login Successfull')
    window.location.href = './index.html'
  } else {
    alert('Please Enter Correct Email and Password')
  }
}

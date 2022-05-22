const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")
const greeting = document.querySelector("#greeting")

//String만 포함된 변수
const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

function onLoginSubmit(event) {
    event.preventDefault()
  //자동으로 새로고침이 되는 것을 막아줌
  loginForm.classList.add(HIDDEN_CLASSNAME)
  const username = loginInput.value
  localStorage.setItem(USERNAME_KEY,username)
  paintGreetings(username)
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}, Keep going!`
    greeting.classList.remove(HIDDEN_CLASSNAME)
}
const savedUsername = localStorage.getItem(USERNAME_KEY)

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit",onLoginSubmit)
} else {
    paintGreetings(savedUsername)
}
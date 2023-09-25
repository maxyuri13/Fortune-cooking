const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const fortuneCookie = document.querySelector("#fortuneCookie")
const btnReset = document.querySelector("#btnReset")

// Eventos

fortuneCookie.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', clickKeyEnter)

// Funções

function handleTryClick(event){
  event.preventDefault()
  toggleScreen()
}

function handleResetClick() {
  toggleScreen()
}

function toggleScreen () {   // Função que muda a tela colocando hide!!
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function clickKeyEnter(keyboard) {
  if (keyboard.key == "Enter") {
    if (screen1.classList.contains("hide") && !screen1.classList.contains("hide")) {
      handleTryClick()
    } else {
      handleResetClick()  
    }
  }
}
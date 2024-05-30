import { toListLanguage } from "./src/lang/list";
import { updatePhrase } from "./src/phrase/updatePhrase";

const $dialog = document.getElementById('dialog');
const $btn_repeat = document.getElementById("repeat");
const $input = document.getElementById("search");

(() => {
  updatePhrase()
  toListLanguage()
})()

document.addEventListener("click", e => {
  if (e.target === lang) {
    $dialog.style.display = "flex"
    $dialog.showModal()
  }
  if (e.target === $dialog || e.target.matches('li')) {
    $dialog.style.display = "none"
    $dialog.close()
  }
  if (e.target.matches('li')) {
    const element = e.target
    lang.textContent = element.textContent
    localStorage.setItem('language', element.textContent)
    localStorage.setItem('lang', element.dataset.lang)
    updatePhrase(element.dataset.lang)
  }
})

$btn_repeat.addEventListener('click', () => {
  updatePhrase()
})

$input.addEventListener("keyup", e =>{
  const input = e.target.value
  toListLanguage({input})


})

// input.addEventListener("keydown", e => {
//   const text = input.value
//   if (e.code === 'Escape') {
//     $dialog.style.display = "none"
//     $dialog.close()
//   }

// })
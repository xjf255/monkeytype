import { toListLanguage } from "./src/lang/toList";
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
    const element = e.target.textContent
    lang.textContent = element
    localStorage.setItem('language', element)
    updatePhrase(element)
  }
})

$btn_repeat.addEventListener('click', () => {
  updatePhrase()
})

$input.addEventListener("keyup", e => {
  const input = e.target.value
  const regex = /^[a-zA-Z0-9]*$/;
  if (e.code === 'Escape') {
    $dialog.style.display = "none"
    return $dialog.close()
  }
  if (regex.test(input)) {
    toListLanguage({ input })
  }
})

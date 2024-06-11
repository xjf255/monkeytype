import { getPhrase } from "../updatePhrase";

const $dialog = document.getElementById('dialog');

export function changePhrase(e) {
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
    getPhrase(element)
  }
}
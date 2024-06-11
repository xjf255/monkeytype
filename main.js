import { toListLanguage } from "./src/lang/toList";
import { getPhrase } from "./src/phrase/updatePhrase"

const $dialog = document.getElementById('dialog');
const $btn_repeat = document.getElementById("repeat");
const $input = document.getElementById("search");
const $time = document.querySelector('time')
const firstPosition = 0
let positionLetter = firstPosition;
let positionWord = firstPosition;

(() => {
  getPhrase()
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
    getPhrase(element)
  }
})

$btn_repeat.addEventListener('click', () => {
  getPhrase()
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

document.addEventListener('keydown', e => {
  if (e.code === 'CapsLock') return
  const $phraseSelected = document.querySelector('.selected')
  const $lettersSelected = $phraseSelected.querySelectorAll('letter')
  const currentLetter = $lettersSelected[positionLetter]

  if (e.code === "Space" && positionLetter > 0) {
    $lettersSelected[positionLetter - 1].classList.remove('select', 'is-last')
    positionWord++
    const $area = document.getElementById('phrase')
    const nextPhrase = $area.children[positionWord],
      oldSelected = $area.children[positionWord - 1];

    const hasError = oldSelected.querySelector('.incorrect')
    if (hasError) oldSelected.classList.add('marked')

    oldSelected.classList.remove('selected')
    nextPhrase.classList.add('selected')
    document.querySelector('.selected > letter').classList.add('select')
    positionLetter = 0

    return
  }

  if (e.code === 'Backspace' && positionLetter !== 0) {
    //se resta uno para lograr ingresar al anterior
    positionLetter--
    const previusletter = $lettersSelected[positionLetter]
    if (positionLetter < $lettersSelected.length - 1) {
      currentLetter.classList.remove('select')
    } else {
      previusletter.classList.remove('select', 'is-last')
    }
    const previusClass = previusletter.classList.value
    previusletter.classList.remove(previusClass)
    previusletter.classList.add('select')
    return
  } else if (e.code === 'Backspace') return

  if (positionLetter >= $phraseSelected.textContent.length) return

  $time.classList.remove('disable')

  if (e.key === currentLetter.textContent && e.code !== "Space") {
    currentLetter.classList.add('correct')
  } else if (e.key !== currentLetter.textContent && e.code !== 'Space') {
    currentLetter.classList.add('incorrect')
  }

  currentLetter.classList.remove('select', 'is-last')
  positionLetter++
  //comprobar si todavia hay letras y si todavia hay palabras
  if ($lettersSelected.length === positionLetter) {
    $lettersSelected[positionLetter - 1].classList.add('select')
    $lettersSelected[positionLetter - 1].classList.add('is-last')

  } else {
    $lettersSelected[positionLetter].classList.add('select')
  }
})
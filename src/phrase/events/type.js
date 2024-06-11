import { firstPosition } from "../../const";

let positionLetter = firstPosition;
let positionWord = firstPosition;

export function onType(e, $time) {
  if (e.code === 'CapsLock') return
  const $phraseSelected = document.querySelector('.selected')
  const $lettersSelected = $phraseSelected.querySelectorAll('letter')
  const currentLetter = $lettersSelected[positionLetter]

  if (e.code === "Space" && positionLetter > 0) {
    $lettersSelected[positionLetter - 1].classList.remove('select', 'is-last')
    positionWord++
    const $area = document.querySelector('#phrase > div')
    const nextPhrase = $area.children[positionWord],
      oldSelected = $area.children[positionWord - 1],
      lastLetterOldPhrase = oldSelected.querySelector('letter:last-child')

    const hasError = oldSelected.querySelector('.incorrect')
    hasError? oldSelected.classList.add('marked') : oldSelected.classList.add('correct')

    oldSelected.classList.remove('selected')
    lastLetterOldPhrase.classList.remove('select')
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
}
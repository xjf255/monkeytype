import { initTime } from "../../const"

const $cardModal = document.getElementById('card')
const $wpm  = document.getElementById('wpm')

export function gameOver() {
 $cardModal.style.display = "flex"
 const $correctPhrase = document.querySelectorAll('word.correct').length
 $wpm.textContent = $correctPhrase * 60 / initTime
}
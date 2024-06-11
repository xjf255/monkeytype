import { toListLanguage } from "./src/lang/toList";
import { changePhrase } from "./src/phrase/events/change";
import { onKeyDown } from "./src/phrase/events/keyDown";
import { onKeyUp } from "./src/phrase/events/keyUp";
import { getPhrase } from "./src/phrase/updatePhrase"

const $btn_repeat = document.getElementById("repeat");
const $input = document.getElementById("search");
const $btnReset = document.getElementById("reset");
const $cardModal = document.getElementById('card');

(() => {
  getPhrase()
  toListLanguage()
})()

document.addEventListener("click", changePhrase)
document.addEventListener('keydown', onKeyDown)
$btn_repeat.addEventListener('click', () => getPhrase())
$input.addEventListener("keyup", onKeyUp)
$btnReset.addEventListener("click", e => {
  $cardModal.style.display = "none"
  getPhrase()
})
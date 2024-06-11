import { initTime } from "../../const";
import { gameOver } from "../logic/gameOver";
import { onType } from "./type";

const $time = document.querySelector('time');
let initGame = false;
let currentTime = initTime

export function onKeyDown(e) {
  if (!initGame) {
    initGame = true
    const intervalId = setInterval(() => {
      currentTime--
      $time.textContent = currentTime
      if (currentTime === 0) {
        clearInterval(intervalId)
        gameOver()
        initGame = false
        currentTime = initTime
      }

    }, 1000)
  }
  if (initGame && currentTime !== 0) { 
    onType(e, $time) 
  }
}
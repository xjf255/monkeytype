import { POSITIONS, URL_API } from "../const"
import { getAPI } from "../services/getAPI"

const SelectedPhrase = async ({langSelected}) => {
  const json_phrase = await getAPI(URL_API)
  const phraseFilter = json_phrase.filter(el => {
    if (el[POSITIONS.lang] === langSelected) return el
  })
  const randomIndexPharase = Math.floor(Math.random() * phraseFilter[POSITIONS.lang][POSITIONS.arr].length)
  const textPhrase = phraseFilter[POSITIONS.lang][POSITIONS.arr][randomIndexPharase]
  return textPhrase
}

export async function updatePhrase(lang){
  const $section = document.getElementById('phrase')
  const langSelected = lang ?? localStorage.getItem('language')
  $section.textContent = await SelectedPhrase({langSelected})
}
import { POSITIONS, URL_API } from "../const"
import { getAPI } from "../services/getAPI"
import { getFormat } from "./logic/getFormat"

const SelectedPhrase = async ({langSelected}) => {
  const json_phrase = await getAPI(URL_API)
  const phraseFilter = json_phrase.filter(el => {
    if (el[POSITIONS.lang] === langSelected) return el
  })
  const randomIndexPharase = Math.floor(Math.random() * phraseFilter[POSITIONS.lang][POSITIONS.arr].length)
  const textPhrase = phraseFilter[POSITIONS.lang][POSITIONS.arr][randomIndexPharase]
  return textPhrase
}

export async function getPhrase(lang){
  const $section = document.getElementById('phrase')
  const $fragment = document.createElement('div')
  const langSelected = lang ?? localStorage.getItem('language')
  const text = await SelectedPhrase({langSelected})
  const newText = getFormat({text})
  const hasChild = $section.querySelector('div')
  if(hasChild) hasChild.remove()
  newText.forEach(element => {
    $fragment.appendChild(element)
  });
  console.log($fragment)
  $section.appendChild($fragment)
}
import { LIST_OF_LANGUAGE, POSITIONS } from "../const";


function iterarLanguages({ listLang }) {
  const ul = document.createElement('ul');

  listLang.forEach((key) => {
    key[POSITIONS.arr].map(el => {
      const li = document.createElement('li')
      li.dataset.lang = key[POSITIONS.lang]
      li.textContent = el
      ul.appendChild(li)
    })
  })
  return ul
}

export function toListLanguage() {
  const $element = document.getElementById('section--language')
  const $language = document.getElementById('lang')
  const langSelected = localStorage.getItem('language')
  if(!$language !== langSelected) $language.textContent = langSelected
  const LIST_OF_LANGUAGES = Object.entries(LIST_OF_LANGUAGE)
  $element.appendChild(iterarLanguages({ listLang: LIST_OF_LANGUAGES }))  
}
import { LIST_OF_LANGUAGE, POSITIONS } from "../const";


function iterarLanguages({ listLang = Object.entries(LIST_OF_LANGUAGE) } = {}) {
  const ul = document.createElement('ul');
  console.log(listLang)
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

function filterLanguages({ input, listLang = Object.entries(LIST_OF_LANGUAGE) } = {}) {
  const listFiltered = listLang.find((key) => {
    return key[POSITIONS.arr].filter(el => el.includes(input))
  });
  console.log(listFiltered)
  return iterarLanguages({listLang : listFiltered});
}


export function toListLanguage({ input = null } = {}) {
  const $element = document.getElementById('section--language')
  const $language = document.getElementById('lang')
  const langSelected = localStorage.getItem('language')
  if (!$language !== langSelected) $language.textContent = langSelected
  if (!input) {
    return $element.appendChild(iterarLanguages())
  }
  $element.appendChild(filterLanguages({ input }))
}
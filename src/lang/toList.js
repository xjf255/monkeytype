import { filterLanguages, iterarLanguages } from "./list";

export function toListLanguage({ input = ''} = {}) {
  const $element = document.getElementById('section--language')
  const $language = document.getElementById('lang')
  const langSelected = localStorage.getItem('language')

  if (!$language.textContent !== langSelected) $language.textContent = langSelected
  
  if (input.length !== 0) {
    const oldChildren = $element.querySelector('ul');
    const newChildren = filterLanguages({ input });
    if (oldChildren) {
      $element.replaceChild(newChildren, oldChildren);
    } else {
      $element.appendChild(newChildren);
    }
  } else {
    const oldChildren = $element.querySelector('ul');
    if (!oldChildren) {
      $element.appendChild(iterarLanguages());
    }else{
    const newChildren = iterarLanguages();
      $element.replaceChild(newChildren, oldChildren);
    }
  }
}
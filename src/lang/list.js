import { LIST_OF_LANGUAGE } from "../const";


export function iterarLanguages({ listLang = LIST_OF_LANGUAGE} = {}) {
  const ul = document.createElement('ul');
    listLang.forEach(el => {
      const li = document.createElement('li')
      li.textContent = el
      ul.appendChild(li)
    })
  return ul
}

export function filterLanguages({ input, listLang = LIST_OF_LANGUAGE } = {}) {
  const listFiltered = listLang.filter((el) => el.toLocaleLowerCase().includes(input.toLowerCase()))
  return iterarLanguages({listLang : listFiltered});  
}
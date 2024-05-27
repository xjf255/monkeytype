import { LIST_OF_LANGUAGE } from "./src/const/language"

const SectionLanguages = document.querySelector('#section--language');
const lang = document.getElementById('lang');
const ul = document.createElement('ul');
const phrase = document.getElementById('phrase')
const dialog = document.getElementById('dialog');
const ARRAY_POSITION = 1;
const LANG_POSITION = 0;
//obtener parrafo

const getAPI = async (url) => {
  try {
    const response = await fetch(url);
    const { text } = await response.json();
    return Object.entries(text)
  } catch (error) {
    console.log(error)
  }
}

(async () => {
  const langMain = async () =>{
    const data = await getAPI('./src/mocks/phrase.json')
    
  }
})()



const changePhrase = async (lang) => {
  const indexPharase = Math.floor(Math.random()*5)
  const langSelected = lang
  const json_phrase = await getAPI('./src/mocks/phrase.json')
  const phraseFilter = json_phrase.filter(arr => {
    if(arr[LANG_POSITION] === langSelected){
      return arr
    }
  })
  const textPhrase = phraseFilter[0][ARRAY_POSITION][indexPharase]
  phrase.textContent = textPhrase
}

const LIST_OF_LANGUAGES = Object.entries(LIST_OF_LANGUAGE)

LIST_OF_LANGUAGES.forEach((key) => {
  key[ARRAY_POSITION].map(el => {
    const li = document.createElement('li')
    li.dataset.lang = key[LANG_POSITION]
    li.textContent = el
    if (el === lang.textContent) li.classList.add('selected')
    ul.appendChild(li)
  })
})

document.addEventListener("click", e => {
  if (e.target === lang) {
    dialog.style.display = "flex"
    dialog.showModal()
  }
  if (e.target === dialog || e.target.matches('li')) {
    dialog.style.display = "none"
    dialog.close()
  }
  if (e.target.matches('li')) {
    const element = e.target
    lang.textContent = element.textContent
    changePhrase(element.dataset.lang)
  }
})


SectionLanguages.appendChild(ul)

document.querySelector('#card').innerHTML = ''

export function getFormat ({text}) {
  const newText = text.split(' ')
  const formattedWord = newText.map((word,index) => {
    const div = document.createElement('word')
    word.split("").forEach((letter,i) => {
      const letters = document.createElement('letter')
      letters.textContent = letter
      if(i === 0 && 0 == index) letters.classList.add('select')
      if(index === 0 ) div.classList.add("selected")
      div.appendChild(letters)
    });
    return div
  })
  return formattedWord
}
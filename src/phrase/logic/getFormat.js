export function getFormat ({text}) {
  const newText = text.split(' ')
  const formattedWord = newText.map(word => {
    const div = document.createElement('div')
    word.split("").forEach(letter => {
      const letters = document.createElement('span')
      letters.textContent = letter
      div.appendChild(letters)
    });
    return div
  })
  return formattedWord
}
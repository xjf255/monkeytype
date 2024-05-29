input.addEventListener("keydown", e => {
  const text = input.value
  if (e.code === 'Escape') {
    dialog.style.display = "none"
    dialog.close()
  }

})
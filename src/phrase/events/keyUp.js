const $dialog = document.getElementById('dialog');

export function onKeyUp() {
  const input = e.target.value
  const regex = /^[a-zA-Z0-9]*$/;
  if (e.code === 'Escape') {
    $dialog.style.display = "none"
    return $dialog.close()
  }
  if (regex.test(input)) {
    toListLanguage({ input })
  }
}
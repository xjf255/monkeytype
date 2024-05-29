//get JSON with phrase, return object with entries
export const getAPI = async (url) => {
  try {
    const response = await fetch(url);
    const { text } = await response.json();
    return Object.entries(text)
  } catch (error) {
    console.log(error)
  }
}
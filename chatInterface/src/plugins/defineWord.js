export async function defineWord(word) {
  try {
    const res = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    const json = await res.json();
    console.log('word JSON', json)
    return json[0]?.meanings[0]?.definitions[0]?.definition || "No definition found";
  } catch {
    return "Definition not found";
  }
}

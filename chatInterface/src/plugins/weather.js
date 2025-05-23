export async function getWeather(city) {
  try {
    const apiKey = "647d7b24cabe4ce79c48fad7e430b505";
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&q=${city}`)
    const json = await res.json();
    // console.log('weather JSON current', json.current)
    console.log('weather only JSON', json)
    console.log('weather JSON', json.weather[0].main)
    return json.weather;
  } catch {
    return { error: "Failed to fetch weather" };
  }
}

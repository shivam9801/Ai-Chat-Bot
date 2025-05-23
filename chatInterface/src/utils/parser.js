import { getWeather } from "../plugins/weather";
import { calculate } from "../plugins/calc";
import { defineWord } from "../plugins/defineWord";

export async function handlePluginCommand(input) {
  const lower = input.toLowerCase();
  if (lower.startsWith("/weather")) {
    const city = input.split(" ")[1];
    const data = await getWeather(city);
    console.log("data parser weather", data);
    const mes = {
      id: crypto.randomUUID(),
      sender: "assistant",
      content: `Weather in ${city} is ${data[0].description}`,
      type: "plugin",
      pluginName: "weather",
      pluginData: data,
      timestamp: new Date().toISOString(),
    };
    console.log("mes id", mes.id);
    console.log("mes content", mes.content);
    if (!data || data.error) {
      return {
        id: crypto.randomUUID(),
        sender: "assistant",
        content: `Could not get weather for ${city}`,
        type: "plugin",
        pluginName: "weather",
        pluginData: data,
        timestamp: new Date().toISOString(),
      };
    }
    return {
      id: crypto.randomUUID(),
      sender: "assistant",
      content: `Weather in ${city} is ${data[0].description}`,
      type: "plugin",
      pluginName: "weather",
      pluginData: data,
      timestamp: new Date().toISOString(),
    };
  }
  if (lower.startsWith("/calc")) {
    const expression = input.slice("6");
    const res = calculate(expression);
    return {
      id: crypto.randomUUID(),
      sender: "assistant",
      content: `${expression} = ${res}`,
      type: "plugin",
      pluginName: "calculate",
      pluginData: res,
      timestamp: new Date().toISOString(),
    };
  }
  if (lower.startsWith("/define")) {
    const word = input.split(" ")[1];
    const define = await defineWord(word);
    console.log("data parser", define);
    const mesWord = {
      id: crypto.randomUUID(),
      sender: "assistant",
      content: `Definition of ${word} is ${define}`,
      type: "plugin",
      pluginName: "define",
      pluginData: define,
      timestamp: new Date().toISOString(),
    };
    console.log("mesWord", mesWord.content);
    return {
      id: crypto.randomUUID(),
      sender: "assistant",
      content: `Definition of ${word} is: ${define}`,
      type: "plugin",
      pluginName: "defineWord",
      pluginData: define,
      timestamp: new Date().toISOString(),
    };
  }
  return null;
}

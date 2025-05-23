import { useState } from "react";
import ChatWin from "./components/ChatWin";
// import './App.css'

function App() {
  const [messages, setMessages] = useState([]);
  return(
    <div className="min-h-screen p-4 bg-gray-100">
      <ChatWin messages = {messages} setMessages={setMessages}/>
    </div>
  ) 
}


export default App;

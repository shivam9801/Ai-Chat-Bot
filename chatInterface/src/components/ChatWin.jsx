import { useState } from "react";
import Message from "./Message";
import { handlePluginCommand } from "../utils/parser";

export default function ChatWindow({ messages, setMessages }) {
    const [input, setInput] = useState('');
    const sendMessage = async () => {
        if (!input.trim()) return;
        const userMsg = {
            id: crypto.randomUUID(),
            sender: 'user',
            content: input,
            type: 'text',
            timestamp: new Date().toISOString(),
        }
        setMessages(prev => [...prev, userMsg]);
        const pluginResponse = await handlePluginCommand(input);
        if (pluginResponse){
            setMessages(prev => [...prev, pluginResponse]);
        }
        setInput('');
    };
    return(
        <div className="max-w-x1 mx-auto bg-white p-4 rounded shadow">
            <div className= "h-96 overflow-y-scroll space-y-2">
                {messages.map(msg => <Message key={msg.id} {...msg} />)}
            </div>
            <div className="mt-4 flex gap-2">
                <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e=> e.key === 'Enter' && sendMessage()} className="border w-full p-2 rounded" />
                <button onClick={sendMessage} className="bg-blue-500 text-white px-4 py-2 rounded">Send</button>
            </div>
        </div>
    );
}

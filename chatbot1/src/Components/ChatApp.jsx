import { useState } from 'react';
import Message from './Message';
import InputField from './InputField';
import Header from './Headier';
import MessageOptions from './MessageOption';

const ChatApp = () => {
    const [messages, setMessages] = useState([
        { sender: 'Sara', text: 'Hello! and welcome! What can I do for you?' },
        { sender: 'Sara', text: 'Please write your question or choose one of the options below:' }
    ]);
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (input.trim() !== '') {
            setMessages([...messages, { sender: 'Visitor', text: input }]);
            setInput('');
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 border rounded-lg shadow-lg">
            <Header />
            <div className="p-4 bg-gray-100">
                {messages.map((message, index) => (
                    <Message key={index} sender={message.sender} text={message.text} />
                ))}
                {messages.length === 2 && <MessageOptions />}
            </div>
            <InputField input={input} setInput={setInput} handleSend={handleSend} />
        </div>
    );
};

export default ChatApp;

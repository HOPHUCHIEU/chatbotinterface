// import React from 'react';

const Message = ({ sender, text }) => {
    return (
        <div className={`flex mb-2 ${sender === 'Visitor' ? 'justify-end' : ''}`}>
            {sender === 'Sara' && (
                <img src="https://placehold.co/30x30" alt="Profile of Sara" className="rounded-full w-8 h-8 mr-2" />
            )}
            <div>
                <div className={`font-bold ${sender === 'Visitor' ? 'text-right' : ''}`}>{sender}:</div>
                <div className={`p-2 rounded-lg shadow-md ${sender === 'Visitor' ? 'bg-blue-500 text-white' : 'bg-white'}`}>
                    {text}
                </div>
            </div>
            {sender === 'Visitor' && (
                <img src="https://placehold.co/30x30" alt="Profile of visitor" className="rounded-full w-8 h-8 ml-2" />
            )}
        </div>
    );
};

export default Message;

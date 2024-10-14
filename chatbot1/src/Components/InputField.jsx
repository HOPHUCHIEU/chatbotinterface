// import React from 'react';

const InputField = ({ input, setInput, handleSend }) => {
    return (
        <div className="p-2 border-t flex items-center">
            <input
                type="text"
                placeholder="Message..."
                className="flex-grow p-2 border rounded-lg mr-2"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            />
            <button className="text-blue-500" onClick={handleSend}><i className="fas fa-paper-plane"></i></button>
        </div>
    );
};

export default InputField;

// import React from 'react';

const MessageOptions = () => {
    return (
        <div className="flex mb-2">
            <img src="https://placehold.co/30x30" alt="Profile picture of Sara" className="rounded-full w-8 h-8 mr-2" />
            <div>
                <div className="font-bold">Sara:</div>
                <div className="bg-white p-2 rounded-lg shadow-md">
                    Please write your question or choose one of the options below:
                    <div className="mt-2 space-x-2">
                        <button className="bg-blue-500 text-white px-3 py-1 rounded-full">Book appointment</button>
                        <button className="bg-blue-500 text-white px-3 py-1 rounded-full">Opening hours</button>
                        <button className="bg-blue-500 text-white px-3 py-1 rounded-full">Our Doctors</button>
                        <button className="bg-blue-500 text-white px-3 py-1 rounded-full">Location</button>
                        <button className="bg-blue-500 text-white px-3 py-1 rounded-full">Contact us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessageOptions;

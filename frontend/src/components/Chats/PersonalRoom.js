import React from "react";
import { useState } from "react";
import "./PersonalRoom.css";
import { Avatar } from "@mui/material";

function PersonalRoom() {
    const [input, setInput] = useState("");

    const [messages, setMessages] = useState([
        {
            name: "Ayush",
            image: "https://cdn131.picsart.com/342580601043201.jpg",
            message: "Bro kya haal chaal"
        },
        {
            name: "Ayush",
            image: "https://cdn131.picsart.com/342580601043201.jpg",
            message: "Kaam kaisa chal rha?"
        },
        {
            message: "Work in progress h.. Mann sa nahi kr rha though"
        }
    ]);

    const handleSend = (e) => {
        e.preventDefault();
        setMessages([...messages, { message: input }]);
        setInput("");
    };

    return (
        <div className="personalRoom">
            <p>YOU MATCHED WITH AYUSH ON 20/10/2021 at 10:24PM</p>

            {messages.map((msg) =>
                msg.name ? (
                    <div className="editRoomMessage">
                        <Avatar className="roomDp" src={msg.image} />
                        <p className="senderMessage">{msg.message}</p>
                    </div>
                ) : (
                    <div className="editRoomMessage">
                        <p className="userMessage">{msg.message}</p>
                    </div>
                )
            )}

            <div>
                <form className="editSendForm">
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="editSend"
                        placeholder="Type a message..."
                        type="text"
                    />
                    <button
                        onClick={handleSend}
                        type="submit"
                        className="editSendButton"
                    >
                        SEND
                    </button>
                </form>
            </div>
        </div>
    );
}

export default PersonalRoom;

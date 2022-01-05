import React from "react";
import "./Messages.css";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

function Messages({ name, message, timestamp, profilePic }) {
    return (
        <Link to={`/chat/${name}`}>
            <div className="editMessageSyntax">
                <Avatar className="profileImage" alt={name} src={profilePic} />

                <div className="editDetails">
                    <h2>{name}</h2>
                    <p>{message}</p>
                </div>
                <p className="editTime">{timestamp}</p>
            </div>
        </Link>
    );
}

export default Messages;

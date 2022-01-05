import React from "react";
import Header from "../components/Headers/Header";
import PersonalRoom from "../components/Chats/PersonalRoom";

function PrivateChat() {
    return (
        <>
            <Header backButton="/chat" callButton="/wall" />
            <PersonalRoom />
        </>
    );
}

export default PrivateChat;

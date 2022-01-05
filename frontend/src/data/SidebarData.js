import React from "react";
import * as AiIcons from "react-icons/ai";
import * as GiIcons from "react-icons/gi";

export const SidebarData = [
    {
        title: "Home",
        path: "/wall",
        icon: <AiIcons.AiFillHome />,
        cName: "toggle-text"
    },
    {
        title: "View Profile",
        path: "/Views",
        icon: <AiIcons.AiFillProfile />,
        cName: "toggle-text"
    },
    {
        title: "Edit Profile",
        path: "/editInfo",
        icon: <AiIcons.AiFillEdit />,
        cName: "toggle-text"
    },
    {
        title: "Contact Us",
        path: "/contact",
        icon: <AiIcons.AiFillContacts />,
        cName: "toggle-text"
    },
    {
        title: "Buy Premium",
        path: "/subscriptions",
        icon: <GiIcons.GiUpgrade />,
        cName: "toggle-text"
    }
];

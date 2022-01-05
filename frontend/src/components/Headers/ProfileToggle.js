import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "../../data/SidebarData";
import { IconContext } from "react-icons/lib";
import "./ProfileToggle.scss";

function ProfileToggle() {
    const [sidebar, setSidebar] = useState(false);

    function showSidebar() {
        setSidebar(!sidebar);
    }

    return (
        <div className="editToggleBar">
            <Link to="#" className="toggleBars">
                <FaIcons.FaBars onClick={showSidebar} />
            </Link>
            <nav className={sidebar ? "toggle-menu active" : "toggle-menu"}>
                <ul className="toggle-menu-choices" onClick={showSidebar}>
                    <IconContext.Provider value={{ color: "white" }}>
                        <li className="navbar-toggle">
                            <Link to="/user" className="toggleBars">
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        {SidebarData.map((items, index) => {
                            return (
                                <li key={index} className={items.cName}>
                                    <Link to={items.path}>
                                        {items.icon}
                                        <span>{items.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </IconContext.Provider>
                </ul>
            </nav>
        </div>
    );
}

export default ProfileToggle;

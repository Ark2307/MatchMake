import React from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";
import ProfileToggle from "../components/Headers/ProfileToggle";

export default function Navigation() {
    return (
        <div className="navigation-bar-outmost-div">
            <div className="maximum-allowable-width">
                <ProfileToggle />
                <div
                    style={{
                        display: "flex",
                        marginLeft: "auto"
                    }}
                >
                    <NavTab text="Post" to="/post" />
                    <NavTab text="Find" to="/search" />
                    <NavTab text="User" to="/user/user" />
                </div>
            </div>
        </div>
    );
}

function NavTab({ text, to }) {
    if (to === undefined) to = `/`; // if to is undefined, send the user to home
    return (
        <NavLink
            className="navigation-tab-navlink"
            to={to}
            activeClassName="active-tab"
        >
            <div className="navigation-tab-text-outer-div">
                <p className="navigation-tab-text">{text}</p>
            </div>
        </NavLink>
    );
}

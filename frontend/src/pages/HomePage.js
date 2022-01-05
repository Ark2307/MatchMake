import React from "react";
import Navbar from "../components/homepage/Navbar";
import Main from "../components/homepage/Main";
import Dropdown from "../components/homepage/Dropdown";
import ShowFooter from "../components/footer/ShowFooter";
import { useState } from "react";

function HomePage() {
    const [isOpen, setIsOpen] = useState(false);

    function toggle() {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <Navbar toggle={toggle} />
            <Main />
            <Dropdown isOpen={isOpen} toggle={toggle} />
            <ShowFooter />
        </>
    );
}

export default HomePage;

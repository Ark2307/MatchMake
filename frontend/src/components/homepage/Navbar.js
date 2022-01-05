import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { menuData } from "../../data/MenuData";
import { Button } from "./Button";
import { FaBars } from "react-icons/fa";

const Header = styled.nav`
    height: 60px;
    display: flex;
    justify-content: space-between;
    z-index: 100;
    padding: 1rem 2rem;
    position: fixed;
    width: 100%;
`;

const editNavbar = css`
    color: white;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
`;

const Name = styled(Link)`
    ${editNavbar};
    font-style: italic;
`;

const MenuBars = styled(FaBars)`
    display: none;

    @media screen and (max-width: 600px) {
        display: block;
        height: 40px;
        cursor: pointer;
        position: absolute;
        top: 0;
        right: 10px;
        transform: translate(-50%, 20%);
    }
`;

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    font-size: larger;

    @media screen and (max-width: 600px) {
        display: none;
    }
`;

const NavMenuLinks = styled(Link)`
    ${editNavbar};
`;

const Buttons = styled.div`
    display: flex;
    align-items: center;
    margin-right: 10px;

    @media screen and (max-width: 600px) {
        display: none;
    }
`;

function Navbar({ toggle }) {
    return (
        <Header>
            <Name to="/">
                <h3>MatchMaker</h3>
            </Name>

            <MenuBars onClick={toggle} />

            <NavMenu>
                {menuData.map((item, index) => (
                    <NavMenuLinks to={item.link} key={index}>
                        {item.name}
                    </NavMenuLinks>
                ))}
            </NavMenu>

            <Buttons>
                <Button to="/contact" primary="true">
                    <h3>Contact Us</h3>
                </Button>
            </Buttons>
        </Header>
    );
}

export default Navbar;

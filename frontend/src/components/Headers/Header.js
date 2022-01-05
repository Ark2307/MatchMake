import React from "react";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import MarkChatUnreadOutlinedIcon from "@mui/icons-material/MarkChatUnreadOutlined";
import HomeIcon from "@mui/icons-material/Home";
import { IconButton } from "@mui/material";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import ArrowBackIosSharpIcon from "@mui/icons-material/ArrowBackIosSharp";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";

function Header({ backButton, callButton }) {
    const navigate = useNavigate();
    return (
        <div className="header">
            {backButton ? (
                <IconButton onClick={() => navigate(backButton)}>
                    <ArrowBackIosSharpIcon
                        className="editBackButton"
                        fontSize="large"
                    />
                </IconButton>
            ) : (
                <IconButton>
                    <AccountBoxIcon fontSize="large" />
                </IconButton>
            )}

            <Link to="/wall">
                <IconButton>
                    <HomeIcon fontSize="large" />
                </IconButton>
            </Link>

            {callButton ? (
                <IconButton onClick={() => navigate(callButton)}>
                    <AddIcCallIcon
                        className="editBackButton"
                        fontSize="large"
                    />
                </IconButton>
            ) : (
                <Link to="/chat">
                    <IconButton className="message">
                        <MarkChatUnreadOutlinedIcon fontSize="large" />
                    </IconButton>
                </Link>
            )}
        </div>
    );
}

export default Header;

import React from "react";
import "./Buttons.css";

import ReplayIcon from "@mui/icons-material/Replay";
import CancelIcon from "@mui/icons-material/Cancel";
import FavoriteBorderSharpIcon from "@mui/icons-material/FavoriteBorderSharp";
import GradeSharpIcon from "@mui/icons-material/GradeSharp";
import FlashOnSharpIcon from "@mui/icons-material/FlashOnSharp";

import { IconButton } from "@mui/material";

function Buttons() {
    return (
        <div className="editButton">
            <IconButton className="editReplay">
                <ReplayIcon fontSize="large" />
            </IconButton>

            <IconButton className="editCancel">
                <CancelIcon fontSize="large" />
            </IconButton>

            <IconButton className="editLike">
                <FavoriteBorderSharpIcon fontSize="large" />
            </IconButton>

            <IconButton className="editStar">
                <GradeSharpIcon fontSize="large" />
            </IconButton>

            <IconButton className="editFlash">
                <FlashOnSharpIcon fontSize="large" />
            </IconButton>
        </div>
    );
}

export default Buttons;

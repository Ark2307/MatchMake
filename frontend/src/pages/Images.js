import React from "react";
import Post from "../Post/Post";
import Navigation from "../Navigation/Navigation";

function Images() {
    return (
        <>
            <Navigation />
            <Post
                Username="Dark"
                imageUrl="http://localhost:3456/get/images/Road.jpg"
            />
        </>
    );
}

export default Images;

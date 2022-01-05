import React from "react";
import Navigation from "../Navigation/Navigation";
import User from "../User/User";

function UserProfile() {
    return (
        <>
            <Navigation />
            <User
                username={"user"}
                realname="realname"
                gender="cis"
                bio={`biography of\nthe man`}
                livesIn="liveIn"
                profileImageLink="http://localhost:3456/get/images/Road.jpg"
                postIDs={[
                    `http://localhost:3456/get/images/Road.jpg`,
                    `http://localhost:3456/get/images/Road.jpg`,
                    `http://localhost:3456/get/images/Road.jpg`,
                    `http://localhost:3456/get/images/Road.jpg`,
                    `http://localhost:3456/get/images/Road.jpg`
                ]}
            ></User>
        </>
    );
}

export default UserProfile;

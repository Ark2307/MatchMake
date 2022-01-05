import React from "react";
import "./PostsInUserProfile.css";

export default function PostsInUserProfile({ imageUrl }) {
    return (
        <div className="col-4 m-0 p-0">
            <div className="user-section-individual-post">
                <img
                    className="user-section-individual-post-thumbnail"
                    src={imageUrl}
                    alt="loading"
                />
            </div>
        </div>
    );
}

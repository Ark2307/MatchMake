import React from "react";
import "./Post.css";

function Post({ imageUrl, Username, colors }): JSX.Element {
    return (
        <div className="post-outmost-div">
            <div className="post-username-div">
                <div>
                    <img
                        className="post-profile-image"
                        src={imageUrl}
                        alt={`profile of ${Username}`}
                    />
                    <p className="post-username">{Username}</p>
                </div>
            </div>

            <div className="post-image-div">
                <img
                    className="post-image"
                    src={imageUrl}
                    alt={`post from user ${Username}`}
                />
            </div>
            <div className="post-message-div">
                <button className="post-message-button" onClick={alert}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                    >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path
                            d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10H2l2.929-2.929A9.969 9.969 0 0 1 2 12zm4.828 8H12a8 8 0 1 0-8-8c0 2.152.851 4.165 2.343 5.657l1.414 1.414-.929.929zM8 13h8a4 4 0 1 1-8 0z"
                            strokeWidth="0"
                            strokeOpacity="1"
                            stroke="rgb(50,50,50)"
                            fill="rgb(50,50,50)"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default Post;

import React from "react";
import "./User.css";
import PostsInUserProfile from "./PostsInUserProfile/PostsInUserProfile";
// eslint-disable-next-line
import Post from "../Post/Post";

export default class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: props.username,
            realname: props.realname,
            bio: props.bio,
            gender: props.gender,
            livesIn: props.livesIn,
            profileImageLink: props.profileImageLink
        };
    }

    render() {
        return (
            <div className="user-section-outermost-div">
                <div
                    className="user-section-cover-photo"
                    style={{
                        backgroundImage: `url(${this.state.profileImageLink})`
                    }}
                ></div>
                <div className="d-flex user-section-profile-names-outermost-div">
                    <div className="user-section-profile-div">
                        <img
                            className="user-section-profile-image"
                            src={this.state.profileImageLink}
                            alt={`${this.state.realname} profile img`}
                        />
                    </div>
                    <div className="user-section-names-outer-div">
                        <div className="user-section-username">
                            {this.state.username}
                        </div>
                        <div className="user-section-realname">
                            {this.state.realname}
                        </div>
                    </div>
                </div>

                <div className="user-section-bio display-linebreak">
                    {this.state.bio}
                </div>
                <div className="d-flex user-section-gender-livesIn-outer-div">
                    <div className="user-section-gender">
                        {this.state.gender}
                    </div>
                    <div className="user-section-livesIn">
                        <strong>{this.state.livesIn}</strong>
                    </div>
                </div>
                {
                    // from here the posts will be added to profile section
                }
                <div className="user-section-posts-outmost-div container">
                    <div className="row">
                        <PostsList postIDs={this.props.postIDs} />
                    </div>
                </div>
            </div>
        );
    }
}

function PostsList({ postIDs }) {
    const listItems = postIDs.map((number) => (
        <PostsInUserProfile imageUrl={number} />
    ));
    return <>{listItems}</>;
}

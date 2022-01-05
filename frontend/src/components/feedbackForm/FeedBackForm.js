import React from "react";
import "./FeedBackForm.css";
import { Link } from "react-router-dom";

function FeedBackForm() {
    return (
        <div className="editFeedBackForm">
            <h1>Want a Change?</h1>
            <p>
                We guys will be pleased to work according to the suggested
                edits.
            </p>

            <div className="feedBackFormContainer">
                <div className="editLeftColumn">
                    <h3>Contact Information</h3>
                    <p>
                        Fill up the form to submit your feedback. Every feedback
                        is valuable for us.
                    </p>

                    <div className="icon-text">
                        <i class="fa fa-phone" aria-hidden="true" />
                        <span>9068805228</span>
                    </div>

                    <div className="icon-text">
                        <i class="fa fa-envelope" aria-hidden="true" />
                        <span>kr.aryan2307@gmail.com</span>
                    </div>

                    <div className="icon-text">
                        <i class="fa fa-map-marker-alt" aria-hidden="true" />
                        <span>Agra</span>
                    </div>

                    <div className="contactPlatforms">
                        <Link to="#" className="editIconsForm">
                            <i className="fab fa-facebook" aria-hidden="true" />
                        </Link>

                        <Link to="#" className="editIconsForm">
                            <i
                                className="fab fa-instagram"
                                aria-hidden="true"
                            />
                        </Link>

                        <Link to="#" className="editIconsForm">
                            <i
                                className="fab fa-linkedin-in"
                                aria-hidden="true"
                            />
                        </Link>
                    </div>
                </div>

                <form className="feedBackInput">
                    <div className="editRightColumn">
                        <div className="form-group">
                            <label className="feedForm-label">First Name</label>
                            <input className="feedForm-input" type="text" />
                        </div>

                        <div className="form-group">
                            <label className="feedForm-label">Last Name</label>
                            <input className="feedForm-input" type="text" />
                        </div>
                    </div>

                    <div className="editRightColumn">
                        <div className="form-group">
                            <label className="feedForm-label">E-mail</label>
                            <input className="feedForm-input" type="email" />
                        </div>

                        <div className="form-group">
                            <label className="feedForm-label">
                                Phone Number
                            </label>
                            <input className="feedForm-input" type="tel" />
                        </div>
                    </div>

                    <div className="editRightColumn">
                        <div className="form-group space">
                            <label className="feedForm-label">
                                Where do you want us to Improve?
                            </label>

                            <div className="editOptions">
                                <div className="radio-button">
                                    <input
                                        className="feedForm-opt"
                                        type="radio"
                                        id="radioChat"
                                        name="type"
                                        value="chat"
                                    />
                                    <label
                                        className="feedLabel"
                                        for="radioChat"
                                    >
                                        Chat Section
                                    </label>
                                </div>

                                <div className="radio-button">
                                    <input
                                        className="feedForm-opt"
                                        type="radio"
                                        id="radioCall"
                                        name="type"
                                        value="call"
                                    />
                                    <label
                                        className="feedLabel"
                                        for="radioCall"
                                    >
                                        Call Section
                                    </label>
                                </div>

                                <div className="radio-button">
                                    <input
                                        className="feedForm-opt"
                                        type="radio"
                                        id="radioVideo"
                                        name="type"
                                        value="vCall"
                                    />
                                    <label
                                        className="feedLabel"
                                        for="radioVideo"
                                    >
                                        Video Call
                                    </label>
                                </div>

                                <div className="radio-button">
                                    <input
                                        className="feedForm-opt"
                                        type="radio"
                                        id="radioProfile"
                                        name="type"
                                        value="profile"
                                    />
                                    <label
                                        className="feedLabel"
                                        for="radioProfile"
                                    >
                                        Profiles
                                    </label>
                                </div>

                                <div className="radio-button">
                                    <input
                                        className="feedForm-opt"
                                        type="radio"
                                        id="radioOthers"
                                        name="type"
                                        value="other"
                                    />
                                    <label
                                        className="feedLabel"
                                        for="radioOthers"
                                    >
                                        Others
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="editRightColumn">
                        <div className="form-group space">
                            <label className="feedForm-label">
                                Suggested Edit:
                            </label>
                            <textarea
                                placeholder="Write your edit here"
                                className="feedForm-input"
                            ></textarea>
                        </div>
                    </div>

                    <div className="editRightColumn">
                        <div className="form-group space">
                            <button className="sendFeedBack" type="submit">
                                Submit Feedback
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FeedBackForm;

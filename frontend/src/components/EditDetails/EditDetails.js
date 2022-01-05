import * as React from "react";
import "./EditDetails.scss";

class EditDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "you@emample.com",
            phone: "+91 9876543210",
            username: "newuser",
            about: "bio . . . . ",
            currentlyliving: "somewhere",
            home: "everywhere"
        };
        this.onInputchange = this.onInputchange.bind(this);
        this.submitButton = this.submitButton.bind(this);
    }

    submitButton(e) {
        console.log(this.state);
    }

    onInputchange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <div id="edit-details-root">
                <div id="edit-details-page">
                    <h1>Edit Details</h1>
                    <form className="container">
                        <InputEditPage
                            label="Userame"
                            name="username"
                            updateFuntion={this.onInputchange}
                            value={this.state.username}
                            disabled="true"
                        />
                        <InputEditPage
                            label="E-mail"
                            name="email"
                            type="email"
                            updateFuntion={this.onInputchange}
                            value={this.state.email}
                        />
                        <InputEditPage
                            label="Phone"
                            name="phone"
                            updateFuntion={this.onInputchange}
                            value={this.state.phone}
                        />
                        <InputEditPage
                            label="About"
                            name="about"
                            type="textarea"
                            updateFuntion={this.onInputchange}
                            value={this.state.about}
                        />
                        <InputEditPage
                            label="Currently Living"
                            name="currentlyliving"
                            type="textarea"
                            updateFuntion={this.onInputchange}
                            value={this.state.currentlyliving}
                        />
                        <InputEditPage
                            label="Home"
                            name="home"
                            type="textarea"
                            updateFuntion={this.onInputchange}
                            value={this.state.home}
                        />
                        {/**
                         * The submit section
                         */}
                        <div className="submit-div">
                            <button
                                className="col"
                                type="submit"
                                onClick={this.submitButton}
                            >
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

function InputEditPage({ label, type, name, value, updateFuntion, disabled }) {
    return (
        <>
            <div className="input-section-div row">
                <label className="col-12 col-sm-3">{label}</label>
                <TextInput
                    type={type}
                    updateFuntion={updateFuntion}
                    name={name}
                    value={value}
                    disabled={disabled}
                />
            </div>
        </>
    );
}

function TextInput({ type, updateFuntion, name, value, disabled }) {
    if (type === "textarea") {
        return (
            <textarea
                className="col-12 col-sm-9"
                onChange={updateFuntion}
                name={name}
                value={value}
                style={{ pointerEvents: disabled === "true" ? "none" : "all" }}
            ></textarea>
        );
    } else {
        return (
            <input
                className="col-12 col-sm-9"
                type={
                    type === undefined || type === null || type === ""
                        ? "text"
                        : type
                }
                onChange={updateFuntion}
                name={name}
                value={value}
                style={{
                    pointerEvents: disabled === "true" ? "none" : "all",
                    backgroundColor:
                        disabled === "true"
                            ? "rgba(0, 0, 0, 0.05)"
                            : "transparent",
                    fontWeight: disabled === "true" ? "bold" : "normal"
                }}
            ></input>
        );
    }
}

export default EditDetails;

import React from "react";
import FormSignup from "./FormSignup";
import { useState } from "react";
import FormSuccess from "./FormSuccess";
import "./Form.scss";
import imageLeft from "../../images/Blue-Robot.min.svg";

function Form() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        <>
            <div className="form-container container">
                <span className="close-btn">×</span>
                <div className="row">
                    <div className="form-content-left col-md-6">
                        <img
                            className="form-img"
                            src={imageLeft}
                            alt="spaceship"
                        />
                    </div>
                    {!isSubmitted ? (
                        <FormSignup submitForm={submitForm} />
                    ) : (
                        <FormSuccess />
                    )}
                </div>
            </div>
        </>
    );
}

export default Form;

import React from "react";
import SuccessImage from "../../images/download.jpg";

function FormSuccess() {
    return (
        <div className="form-content-right col-md-6">
            <h1 className="form-success">We have received your request!</h1>
            <img className="form-img-2" src={SuccessImage} alt="successImage" />
        </div>
    );
}

export default FormSuccess;

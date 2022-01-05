import React from "react";
import { Link } from "react-router-dom";
import useForm from "./useForm";
import validate from "./validateInfo";

function FormSignup({ submitForm }) {
    const { handleChange, values, handleSubmit, errors } = useForm(
        validate,
        submitForm
    );

    return (
        <div className="form-content-right col-md-6">
            <form onSubmit={handleSubmit} className="form" noValidate>
                <h1> Create Account</h1>
                <div className="form-inputs">
                    <label className="form-label">Username</label>
                    <input
                        className="form-input"
                        type="text"
                        autoComplete="off"
                        name="username"
                        id="username"
                        placeholder="Enter your username"
                        value={values.username}
                        onChange={handleChange}
                    />
                </div>
                {errors.username && <p>{errors.username}</p>}

                <div className="form-inputs">
                    <label className="form-label">Email Id</label>
                    <input
                        className="form-input"
                        type="email"
                        autoComplete="off"
                        name="email"
                        id="email"
                        placeholder="Enter your Email address"
                        value={values.email}
                        onChange={handleChange}
                    />
                </div>
                {errors.email && <p>{errors.email}</p>}

                <div className="form-inputs">
                    <label className="form-label">Password</label>
                    <input
                        className="form-input"
                        type="password"
                        autoComplete="off"
                        name="password"
                        id="password"
                        placeholder="Enter your password"
                        value={values.password}
                        onChange={handleChange}
                    />
                </div>
                {errors.password && <p>{errors.password}</p>}

                <div className="form-inputs">
                    <label className="form-label">Confirm Password</label>
                    <input
                        className="form-input"
                        type="password"
                        autoComplete="off"
                        name="checkPassword"
                        id="checkPassword"
                        placeholder="Confirm your Password"
                        value={values.checkPassword}
                        onChange={handleChange}
                    />
                </div>
                {errors.checkPassword && <p>{errors.checkPassword}</p>}

                <button className="form-input-btn" type="submit">
                    Sign up
                </button>
                <div className="form-login-btn">
                    <p>Already have an account ?</p>
                    <div className="button-box">
                        <Link to="/login">
                            <button className="login-btn">Login</button>
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default FormSignup;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
    faGoogle
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import APIService from "../../APIService";

function Login() {
    const [details, setDetails] = useState({
        username: "",
        password: ""
    });

    const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setDetails({ ...details, [name]: value });
    };

    const [token, setToken] = useCookies(["Token"]);
    let navigate = useNavigate();

    useEffect(() => {
        if (token["Token"]) {
            navigate("/editInfo");
        }
    }, [token, navigate]);

    const handleLoginSubmit = (e) => {
        e.preventDefault();

        APIService.LoginUser(details)
            .then((resp) => {
                resp.token
                    ? setToken("Token", resp.token)
                    : console.log("Invalid Credentials");
            })
            .catch((err) => console.log(err));
    };

    return (
        <div>
            <form
                onSubmit={handleLoginSubmit}
                className="login-container"
                id="login-form"
            >
                <div className="heading">Login to MATCHMAKE</div>
                <div className="left">
                    <label className="login-label" for="username">
                        Username
                    </label>
                    <br />
                    <input
                        className="login-input"
                        type="text"
                        autoComplete="off"
                        name="username"
                        id="username"
                        value={details.username}
                        onChange={handleLoginChange}
                    />
                    <br />
                    <label className="login-label" for="password">
                        Password
                    </label>
                    <br />
                    <input
                        className="login-input"
                        type="password"
                        autoComplete="off"
                        name="password"
                        id="pass"
                        value={details.password}
                        onChange={handleLoginChange}
                    />
                    <br />
                    <button className="login-btn" type="submit">
                        Login
                    </button>
                    <div className="SignupConnection">
                        Dont have an account?
                        <br />
                        <div className="login-main-linking">
                            <Link to="/signup">
                                <button type="button" id="Signup-linking">
                                    Redirect to Sign-Up
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="right">
                    <div className="connect">Connect with</div>
                    <a href="https://google.com" className="facebook">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>{" "}
                    <br />
                    <a href="https://google.com" className="google">
                        <FontAwesomeIcon icon={faGoogle} />
                    </a>{" "}
                    <br />
                    <a href="https://google.com" className="instagram">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </div>
            </form>
        </div>
    );
}

export default Login;

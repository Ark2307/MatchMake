import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

import Chats from "./components/Chats/Chats";
import InfoSection from "./components/aboutUs/InfoSection";
import Login from "./components/loginForm/Login";
import Subscriptions from "./components/subscriptions/Subscriptions";
import FeedBackForm from "./components/feedbackForm/FeedBackForm";
import EditDetails from "./components/EditDetails/EditDetails";
import HomePage from "./pages/HomePage";
import Feed from "./pages/Feed";
import PrivateChat from "./pages/PrivateChat";
import UserProfile from "./pages/UserProfile";
import Images from "./pages/Images";

function Routers() {
    return (
        <CookiesProvider>
            <Router>
                <Routes>
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/" element={<HomePage />} />
                    <Route exact path="/about" element={<InfoSection />} />
                    <Route exact path="/chat" element={<Chats />} />
                    <Route
                        exact
                        path="/subscriptions"
                        element={<Subscriptions />}
                    />
                    <Route exact path="/contact" element={<FeedBackForm />} />
                    <Route exact path="/editInfo" element={<EditDetails />} />
                    <Route exact path="/wall" element={<Feed />} />
                    <Route exact path="/post" element={<Images />} />
                    <Route exact path="/user" element={<UserProfile />} />
                    <Route path="/chat/:person" element={<PrivateChat />} />
                </Routes>
            </Router>
        </CookiesProvider>
    );
}

ReactDOM.render(
    <React.StrictMode>
        <Routers />
    </React.StrictMode>,
    document.getElementById("root")
);

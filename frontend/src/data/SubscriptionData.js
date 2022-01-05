import React from "react";
import { GiCrystalBars } from "react-icons/gi";
import { GiCutDiamond, GiRock } from "react-icons/gi";

export const SubscriptionData = [
    {
        icon: <GiRock />,
        path: "/login",
        name: "Starter Pack",
        price: "$99.99",
        valid: "per month",
        feature1: "1",
        feature2: "2",
        feature3: "3",
        feature4: "4",
        button: "Choose Plan"
    },

    {
        icon: <GiCrystalBars />,
        path: "/login",
        name: "Gold Pack",
        price: "$199.99",
        valid: "per month",
        feature1: "1",
        feature2: "2",
        feature3: "3",
        feature4: "4",
        button: "Choose Plan"
    },

    {
        icon: <GiCutDiamond />,
        path: "/login",
        name: "Diamond Pack",
        price: "$299.99",
        valid: "per month",
        feature1: "1",
        feature2: "2",
        feature3: "3",
        feature4: "4",
        button: "Choose Plan"
    }
];

import { Link } from "react-router-dom";
import styled from "styled-components";

export const PricingSection = styled.div`
    padding: 30px 10px 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: rgb(130, 191, 243);
`;

export const PricingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;

    @media screen and (max-width: 1060px) {
        margin: 20px 0px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const PricingHeading = styled.h1`
    color: #fff;
    font-size: 48px;
    margin-bottom: 34px;
`;

export const PricingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1060px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
`;

export const PricingCard = styled(Link)`
    background: #242424;
    box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
    width: 280px;
    height: 530px;
    text-decoration: none;
    border-radius: 4px;

    &:nth-child(2) {
        margin: 24px;
    }

    &:hover {
        transform: scale(1.06);
        transition: all 0.3s ease-out;
        color: #1c2237;
    }

    @media screen and (max-width: 960px) {
        width: 90%;

        &:hover {
            transform: none;
        }
    }
`;

export const PricingCardInfo = styled.div`
    display: flex;
    flex-direction: column;
    height: 500px;
    padding: 24px;
    align-items: center;
    color: #fff;
`;

export const PricingCardIcon = styled.div`
    margin: 24px 0;
`;

export const PricingCardPlan = styled.h3`
    margin-bottom: 5px;
    font-size: 24px;
`;

export const PricingCardCost = styled.h4`
    font-size: 40px;
`;

export const PricingCardLength = styled.p`
    font-size: 14px;
    margin-bottom: 24px;
`;

export const PricingCardFeatures = styled.ul`
    margin: 16px 0 32px;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #a9b3c1;
`;

export const PricingCardFeature = styled.li`
    margin-bottom: 10px;
`;

export const Button = styled.button`
    border-radius: 4px;
    background: ${({ primary }) => (primary ? "#4B59F7" : "#0467FB")};
    white-space: nowrap;
    padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
    color: #fff;
    font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
    outline: none;
    border: none;
    cursor: pointer;

    &:hover {
        transition: all 0.3s ease-out;
        background: #fff;
        background-color: ${({ primary }) => (primary ? "#0467FB" : "#4B59F7")};
    }

    @media screen and (max-width: 960px) {
        width: 100%;
    }
`;

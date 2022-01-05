import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
    background: ${({ primary }) => (primary ? "#000d1a" : "CD853F")};
    white-space: nowrap;
    outline: none;
    display: flex ;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    border-radius: 10px;
    min-width: 120px;
    max-width: auto;
    transition: 0.8s;

    padding: ${({ big }) => (big ? "10px 20px" : "8px 20px")};
    color: ${({ primary }) => (primary ? "#fff" : "#000d1a")};;
    font-size:  padding: ${({ big }) => (big ? "20px" : "14px")};

    &:hover{
        transform: translateY(4px);
    };
    
`;

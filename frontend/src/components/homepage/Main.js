import React, { useEffect, useState, useRef } from "react";
import styled, { css } from "styled-components/macro";
import { HomeData } from "../../data/HomeData";
import { Button } from "./Button";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";

const ItemsSection = styled.section`
    height: 100vh;
    max-height: 1000px;
    position: relative;
    overflow: hidden;
`;

const ItemsWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
`;

const ItemsSlide = styled.div`
    z-index: 10;
    width: 100%;
    height: 100%;
`;

const ItemsSlider = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &::before {
        content: "";
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 100vh;
        bottom: 0vh;
        left: 0;
        overflow: hidden;
        opacity: 0.5;

        background: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.2) 0%,
            rgba(0, 0, 0, 0.4) 50%,
            rgba(0, 0, 0, 0.6) 100%
        );
    }
`;

const ItemsContent = styled.div`
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    max-width: 1500px;
    width: calc(100% - 100px);
    color: white;

    h1 {
        font-size: clamp(1rem, 8vw, 2rem);
        font-weight: 400;
        text-transform: uppercase;
        text-shadow: 3px 0px 7px rgba(226, 177, 16, 0.8),
            -3px 0px 7px rgba(203, 169, 56, 0.8),
            0px 4px 7px rgba(35, 30, 12, 0.8);

        text-align: left;
        margin-bottom: 1rem;
    }
`;

const ItemsImage = styled.img`
    top: 0;
    left: 0;
    position: absolute;
    object-fit: cover;
    height: 100vh;
    width: 100vw;
`;

const Arrow = styled(IoMdArrowRoundForward)`
    margin-left: 6px;
`;

const SliderButtons = styled.div`
    position: absolute;
    bottom: 50px;
    right: 50px;
    display: flex;
    z-index: 10;
`;

const arrowButtons = css`
    width: 50px;
    height: 50px;
    color: white;
    cursor: pointer;
    background: #000d1a;
    border-radius: 50px;
    padding: 15px;
    margin-right: 1rem;
    user-select: none;
    transition: 0.8s;

    &:hover {
        background: #cd853f;
        transform: scale(1.05);
    }
`;

const PrevArrow = styled(IoArrowBack)`
    ${arrowButtons}
`;

const NextArrow = styled(IoArrowForward)`
    ${arrowButtons}
`;

function Main() {
    const [current, setCurrent] = useState(0);
    const length = HomeData.length;
    const timeout = useRef(null);

    useEffect(() => {
        function nextSlideAuto() {
            setCurrent((current) => (current === length - 1 ? 0 : current + 1));
        }

        timeout.current = setTimeout(nextSlideAuto, 2500);

        return function () {
            if (timeout.current) {
                clearTimeout(timeout.current);
            }
        };
    }, [current, length]);

    function nextSlide() {
        if (timeout.current) {
            clearTimeout(timeout.current);
        }
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    function prevSlide() {
        if (timeout.current) {
            clearTimeout(timeout.current);
        }
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    return (
        <ItemsSection>
            <ItemsWrapper>
                {HomeData.map((slide, index) => {
                    return (
                        <ItemsSlide key={index}>
                            {index === current && (
                                <ItemsSlider>
                                    <ItemsImage
                                        src={slide.image}
                                        alt={slide.alt}
                                    />

                                    <ItemsContent>
                                        <h1>{slide.title}</h1>
                                        <Button
                                            to={slide.path}
                                            primary="true"
                                            css={`
                                                max-width: 160px;
                                            `}
                                        >
                                            {slide.label}
                                            <Arrow />
                                        </Button>
                                    </ItemsContent>
                                </ItemsSlider>
                            )}
                        </ItemsSlide>
                    );
                })}
                <SliderButtons>
                    <PrevArrow onClick={prevSlide} />
                    <NextArrow onClick={nextSlide} />
                </SliderButtons>
            </ItemsWrapper>
        </ItemsSection>
    );
}

export default Main;

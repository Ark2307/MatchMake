import React from "react";
import "./Slider.css";
import { useInView } from "react-intersection-observer";
import { Button } from "../homepage/Button";

const Slider = ({ imageSrc, title, subtitle, path, label, flipped }) => {
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0.4
    });

    const renderContent = () => {
        if (!flipped) {
            return (
                <>
                    <img
                        src={imageSrc}
                        alt="Travel"
                        className="slider__image"
                    />
                    <div className="slider__content">
                        <h1 className="slider__title">{title}</h1>
                        <h2>{subtitle}</h2>
                        <h3>
                            <Button primary="true" to={path}>
                                {label}
                            </Button>
                        </h3>
                    </div>
                </>
            );
        } else {
            return (
                <>
                    <div className="slider__content">
                        <h1 className="slider__title">{title}</h1>
                        <h2>{subtitle}</h2>
                        <h3>
                            <Button primary="true" to={path}>
                                {label}
                            </Button>
                        </h3>
                    </div>
                    <img
                        src={imageSrc}
                        alt="Travel"
                        className="slider__image"
                    />
                </>
            );
        }
    };

    return (
        <div className={inView ? "slider slider--zoom" : "slider"} ref={ref}>
            {renderContent()}
        </div>
    );
};

export default Slider;

import React from "react";
import Slider from "./Slider";
import ImageOne from "../../images/dataImageOne.jpg";
import ImageTwo from "../../images/dataImageTwo.jpg";
import ImageThree from "../../images//Upload.jpg";
import ImageFour from "../../images/dataImageFour.jpg";
import ImageFive from "../../images/dataImageFive.jpg";
import ImageSix from "../../images/dataImageSix.jpg";
import ImageSeven from "../../images/dataImageSeven.jpg";
import "./InfoSection.css";

function InfoSection() {
    return (
        <div className="Data-Container">
            <Slider
                imageSrc={ImageOne}
                title={"Find Your Match."}
                subtitle={"What are you waiting for!"}
                path={"/signup"}
                label={"Signup"}
            />

            <Slider
                flipped={true}
                imageSrc={ImageTwo}
                title={"Chat With Your Match."}
                subtitle={"Welcome back Friend!"}
                path={"/Login"}
                label={"Login"}
            />

            <Slider
                imageSrc={ImageThree}
                title={"Upload Your photos to attract people."}
                subtitle={"What are you waiting for!"}
                path={"/signup"}
                label={"Signup"}
            />

            <Slider
                flipped={true}
                imageSrc={ImageFour}
                title={"View Other people's Profile."}
                subtitle={"Welcome back Friend!"}
                path={"/Login"}
                label={"Login"}
            />

            <Slider
                imageSrc={ImageFive}
                title={"Call your favorite Match."}
                subtitle={"Get on Board!"}
                path={"/signup"}
                label={"Signup"}
            />

            <Slider
                flipped={true}
                imageSrc={ImageSix}
                title={"Video call with Your Match."}
                subtitle={"Welcome back Friend!"}
                path={"/Login"}
                label={"Login"}
            />

            <Slider
                imageSrc={ImageSeven}
                title={"Go on a Romantic Date With Your Match."}
                subtitle={"What are you waiting for!"}
                path={"/signup"}
                label={"Signup"}
            />
        </div>
    );
}

export default InfoSection;

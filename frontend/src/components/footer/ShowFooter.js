import React from "react";
import Footer from ".";
import Icon from "./returnIcons";

function ShowFooter() {
    return (
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                    <Footer.Column>
                        <Footer.Title>About Us</Footer.Title>
                        <Footer.Link href="/about">Features</Footer.Link>
                        <Footer.Link href="#">Users</Footer.Link>
                        <Footer.Link href="#">Countries Supported</Footer.Link>
                    </Footer.Column>

                    <Footer.Column>
                        <Footer.Title>Contact Us</Footer.Title>

                        <Footer.Link href="#">
                            <Icon className="fab fa-facebook-f" />
                            Facebook
                        </Footer.Link>

                        <Footer.Link href="#">
                            <Icon className="fab fa-instagram" />
                            Instagram
                        </Footer.Link>

                        <Footer.Link href="#">
                            <Icon className="fab fa-twitter" />
                            Twitter
                        </Footer.Link>

                        <Footer.Link href="#">
                            <Icon className="fab fa-linkedin-in" />
                            LinkedIn
                        </Footer.Link>
                    </Footer.Column>

                    <Footer.Column>
                        <Footer.Title>Visit Us</Footer.Title>

                        <Footer.Link href="#">
                            <Icon className="fas fa-map-marker-alt" />
                            Banglore
                        </Footer.Link>

                        <Footer.Link href="#">
                            <Icon className="fas fa-map-marker-alt" />
                            Agra
                        </Footer.Link>

                        <Footer.Link href="#">
                            <Icon className="fas fa-map-marker-alt" />
                            Tundla
                        </Footer.Link>

                        <Footer.Link href="#">
                            <Icon className="fas fa-map-marker-alt" />
                            Allahabad
                        </Footer.Link>
                    </Footer.Column>
                </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    );
}

export default ShowFooter;

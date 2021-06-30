import React from "react";
import "./index.scss";

const Banner = () => {

    return (
        <section id="banner-home" className="banner-section style-one">
            <div className="banner-carousel owl-theme owl-carousel">
                <div className="slide-item">
                    <div id="banner-1" className="image-layer"></div>
                    <div className="auto-container">
                        <div className="content-box">
                            <h2>Global <br />Expertise in Sanitizing</h2>
                            <p>Indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment</p>
                            <div className="btn-box">
                                <a href="about.html" className="theme-btn-two thm-btn">About Company</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slide-item">
                    <div id="banner-2" className="image-layer"></div>
                    <div className="auto-container">
                        <div className="content-box">
                            <h2>The Fine <br />Experience of Cleaning</h2>
                            <p>Must explain to you how all this mistaken idea  denouncing pleasure and praising pain was born  will give you.</p>
                            <div className="btn-box">
                                <a href="service.html" className="theme-btn-two thm-btn">Our Services</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slide-item">
                    <div id="banner-3" className="image-layer"></div>
                    <div className="auto-container">
                        <div className="content-box">
                            <h2>Clean <br />and Safe Office <br />From Today</h2>
                            <p>Indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.</p>
                            <div className="btn-box">
                                <a href="about.html" className="theme-btn-two thm-btn">About Company</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
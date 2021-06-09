import React from "react";

import FooterLogo from "../../images/template/footer-logo.png";
import Award1Img from "../../images/template/resource/award-1.png";
import Award2Img from "../../images/template/resource/award-2.png";
import Award3Img from "../../images/template/resource/award-3.png";

const Footer = () => {

    return (
        <footer className="main-footer bg-color-2">
            <div className="auto-container">
                <div className="footer-top">
                    <div className="row clearfix">
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget logo-widget">
                                <figure className="footer-logo" style={{ textAlign: 'center' }}>
                                    <a href="index.html">
                                        <img src={FooterLogo} style={{ width: '100px' }} alt="" />
                                    </a>
                                </figure>
                                <div className="text">
                                    <p>Indignation and dislike men who are so beguiled and demoralized moment by desire.</p>
                                </div>
                                <ul className="award-list clearfix">
                                    <li><img src={Award1Img} alt="" /></li>
                                    <li><img src={Award2Img} alt="" /></li>
                                    <li><img src={Award3Img} alt="" /></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget links-widget">
                                <div className="widget-title">
                                    <h4>Company</h4>
                                </div>
                                <div className="widget-content">
                                    <ul className="links-list clearfix">
                                        <li><a href="index.html">Home</a></li>
                                        <li><a href="index.html">About Us</a></li>
                                        <li><a href="index.html">Our Team</a></li>
                                        <li><a href="index.html">How it Work</a></li>
                                        <li><a href="index.html">Partners</a></li>
                                        <li><a href="index.html">Projects</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget links-widget">
                                <div className="widget-title">
                                    <h4>Our Services</h4>
                                </div>
                                <div className="widget-content">
                                    <ul className="links-list clearfix">
                                        <li><a href="index.html">Commercial</a></li>
                                        <li><a href="index.html">Residential</a></li>
                                        <li><a href="index.html">Industries</a></li>
                                        <li><a href="index.html">Service Area</a></li>
                                        <li><a href="index.html">Why Sanito</a></li>
                                        <li><a href="index.html">Reviews</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget links-widget">
                                <div className="widget-title">
                                    <h4>Essentials</h4>
                                </div>
                                <div className="widget-content">
                                    <ul className="links-list clearfix">
                                        <li><a href="index.html">FAQ’s</a></li>
                                        <li><a href="index.html">Pricing Plan</a></li>
                                        <li><a href="index.html">Feedback</a></li>
                                        <li><a href="index.html">Policies</a></li>
                                        <li><a href="index.html">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget contact-widget">
                                <div className="widget-title">
                                    <h4>Get In Touch</h4>
                                </div>
                                <ul className="info clearfix">
                                    <li>
                                        <a href="tel:4412345678">+44 123-456-78</a>
                                        <a href="mailto:support@info.com">support@info.com</a>
                                    </li>
                                    <li>191 Integer Road, Unit 4 Avalon, Los Angeles - 90003</li>
                                </ul>
                                <ul className="footer-social clearfix">
                                    <li><a href="index.html"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="index.html"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="index.html"><i className="fab fa-linkedin-in"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom centred">
                    <p>&copy; {new Date().getFullYear()} Prisma Qila, Covid 19 Cleaning Solutions. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
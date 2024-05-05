import React, { useEffect } from 'react'
import { BiLogoFacebook } from "react-icons/bi";
import { IoLogoInstagram } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
const Webbanner = () => {
    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            const navbar = document.querySelector('.navbar');
            const navLinks = document.querySelectorAll('.nav-links li');
            const logoImg = document.querySelector('.nav-logo img');
            if (offset > 80) { // You can adjust this value based on your design
                navbar.classList.add('scrolled');
                navLinks.forEach(link => {
                    link.style.color = 'black'; // Change to the desired color
                });
                logoImg.src = "https://isocietymanager.com/fronts/images/Final_Logo_grey.png";
            } else {
                navbar.classList.remove('scrolled');
                navLinks.forEach(link => {
                    link.style.color = 'white'; // Change to the desired color
                });
                logoImg.src = "https://isocietymanager.com/fronts/images/Final_Logo_white.png";
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);
    return (
        <>
            <header >
                <nav className='navbar fixed-top navbar-expand-lg navbar-dark bg-tra'>
                    <div className='nav-header d-flex justify-content-between align-items-center w-100'>
                        <div className="container">
                            <div className="nav-logo">
                                <img src="https://isocietymanager.com/fronts/images/Final_Logo_white.png" alt="" />
                            </div>
                            <div className="nav-links ml-auto">
                                <ul className='d-flex justify-content-between align-items-center  m-0 p-0'>
                                    <li>
                                        Products
                                    </li>
                                    <li>
                                        Pricing
                                    </li>
                                    <li>
                                        Clients
                                    </li>
                                    <li>
                                        Know More
                                    </li>
                                    <li>
                                        Why ISM
                                    </li>
                                    <li>
                                        Career
                                    </li>
                                    <li>
                                        Sign In
                                    </li>
                                    <li className='header-social-links'>
                                        <div className='fb'>
                                            <span>
                                                <BiLogoFacebook />
                                            </span>
                                        </div>
                                        <div className='ins'>
                                            <span>
                                                <IoLogoInstagram />
                                            </span>
                                        </div>
                                        <div className='twi'>
                                            <span>
                                                <FaTwitter />
                                            </span>
                                        </div>
                                        <div className='lik'>
                                            <span>
                                                <FaLinkedin />
                                            </span>
                                        </div>
                                        <div className='yt'>
                                            <span>
                                                <FaYoutube />
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <div className="banner-img">
                <div className="container   ">
                    <div className="row  justify-content-center align-items-center banner-content">
                        <div className="col-md-6 col-lg-5">
                            <img className='w-100' src="https://ismdoc.s3.amazonaws.com/ismpartner/isocietymanager/main_image.png" alt="" />
                        </div>
                        <div className="col-md-6 col-lg-6 offset-lg-1 banner-text">
                            <div className="banner-main-text">
                                <h1 className='letter-spacing'>
                                    iSociety Manager
                                </h1>
                            </div>
                            <div className="banner-para">
                                Be SMARTER. DELIGHT RESIDENTS. Increase convenience and trust of Residents. Flawless operation with minimal Human Intervention. Single Window for All Society Operations.
                                No Ads, No Noise, Only Value
                            </div>
                            <div className="banner-btns d-flex jusitfy-content-center  align-items-center ">
                                <button className='request-btn'>REQUEST A DEMO</button>
                                <button className='request-btn'>START FREE</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-dark p-2'>
                <div className="container">
                    <div className='row'>
                        <div className='col-md-6 col-xs-12 d-flex jusitfy-content-center align-items-center '>
                            <h4 className="text-white m-0">AVAILABLE ON APP STORE AND PLAY STORE </h4>
                        </div>
                        <div className='col-md-6  col-xs-12 text-center p-3' >
                            <img className='mx-2' src="https://isocietymanager.com/fronts/images/appstore.png" alt="" width={150} height={50} />
                            <img className='mx-2' src="https://isocietymanager.com/fronts/images/googleplay.png" alt="" width={150} height={50} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='whatsappicon'>
                <FaWhatsapp size={40} />
            </div>
            <div className='chaticon'>
                Start Free <FaUserCircle  size={25} />
            </div>
        </>
    )
}

export default Webbanner
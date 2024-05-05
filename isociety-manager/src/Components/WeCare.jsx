import React from 'react'
import Slider from "react-slick";
const WeCare = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };
    return (
        <section>
            <div className="content-2 content-6">
                <div className="container">
                    <div className="row " style={{ flexDirection: "column" }}>
                        <h3 className='text-white'>
                            We care about the details
                        </h3>
                        <p>
                            Better user experience, and lucid layouts.
                        </p>

                    </div>

                    <div className="slider-container">
                        <Slider {...settings}>
                            <div>
                                <div className='d-flex justify-content-center align-items-center '>
                                    <div>
                                        <img src="https://isocietymanager.com/fronts/images/portfolio/screen-4.jpg" alt="" />
                                    </div>
                                    <div>
                                        <img src="https://isocietymanager.com/fronts/images/portfolio/screen-5.jpg" alt="" />
                                    </div>
                                    <div>
                                        <img src="https://isocietymanager.com/fronts/images/portfolio/screen-6.jpg" alt="" />
                                    </div>
                                    <div>
                                        <img src="	https://isocietymanager.com/fronts/images/portfolio/screen-7.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='d-flex justify-content-center align-items-center'>
                                <div>
                                        <img src="https://isocietymanager.com/fronts/images/portfolio/screen-4.jpg" alt="" />
                                    </div>
                                    <div>
                                        <img src="https://isocietymanager.com/fronts/images/portfolio/screen-5.jpg" alt="" />
                                    </div>
                                    <div>
                                        <img src="https://isocietymanager.com/fronts/images/portfolio/screen-6.jpg" alt="" />
                                    </div>
                                    <div>
                                        <img src="	https://isocietymanager.com/fronts/images/portfolio/screen-7.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WeCare
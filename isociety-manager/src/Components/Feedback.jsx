import React from 'react'
import Slider from "react-slick";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
const Feedback = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        customPaging: function (i) {
            return (
                <button className="slick-dot">
                    {i + 1}
                </button>
            );
        }
    };
    const data = [
        {
            id: 1,
            content: `This is with Reference to performance of Society Management Software Provided by iSociety Manager (Sumasamu IT Services Pvt. Ltd). Sumasamu team continue to Stand head and shoulders above other software vendors that we deal with as for as quality of the product , quality of support, and knowledge of the technology domain & solution finding is concerned. Sumasamu has greatly reduced the time it takes for our Facility Management activities. Thank You for Good Quality and service Support.`,
            img: "https://isocietymanager.com/fronts/images/testimonial/RohitJain.png",
            name: "Mr. Rohit Jain",
            designation: "Estate Manager - Conscient",
        },
        {
            id: 2,
            content: `This is with Reference to performance of Society Management Software Provided by iSociety Manager (Sumasamu IT Services Pvt. Ltd). Sumasamu team continue to Stand head and shoulders above other software vendors that we deal with as for as quality of the product , quality of support, and knowledge of the technology domain & solution finding is concerned. Sumasamu has greatly reduced the time it takes for our Facility Management activities. Thank You for Good Quality and service Support.`,
            img: "https://isocietymanager.com/fronts/images/testimonial/review-author-3.jpg",
            name: "Sandeep",
            designation: "Estate Manager - Conscient",
        },
        {
            id: 3,
            content: `This is with Reference to performance of Society Management Software Provided by iSociety Manager (Sumasamu IT Services Pvt. Ltd). Sumasamu team continue to Stand head and shoulders above other software vendors that we deal with as for as quality of the product , quality of support, and knowledge of the technology domain & solution finding is concerned. Sumasamu has greatly reduced the time it takes for our Facility Management activities. Thank You for Good Quality and service Support.`,
            img: "https://isocietymanager.com/fronts/images/testimonial/review-author-2.jpg",
            name: "Col Arvind Govil",
            designation: "GM Facility (Jaypee Greens)",
        },
        {
            id: 4,
            content: `This is with Reference to performance of Society Management Software Provided by iSociety Manager (Sumasamu IT Services Pvt. Ltd). Sumasamu team continue to Stand head and shoulders above other software vendors that we deal with as for as quality of the product , quality of support, and knowledge of the technology domain & solution finding is concerned. Sumasamu has greatly reduced the time it takes for our Facility Management activities. Thank You for Good Quality and service Support.`,
            img: "https://isocietymanager.com/fronts/images/testimonial/review-author-1.jpg",
            name: "Jaipuria's Sunrise Greens",
            designation: "Addl. General Manager",
        },
    ]
    return (
        <section>
            <div className="content-2 " style={{ background: "#f5f5f5" }}>
                <div className="container">
                    <div className="row " style={{ flexDirection: "column" }}>
                        <h2 >
                            Our Customers Feedback
                        </h2>

                    </div>
                    <div className="slider-feedback-container">
                        <Slider {...settings}>
                            {data.map((item) => {
                                return (
                                    <div className='slider-feedback-item p-3' key={item.id}>
                                        < div className='slider-feedback-item-content'>
                                            <p>
                                                <FaQuoteLeft />{item.content}<FaQuoteRight />
                                            </p>
                                        </div>
                                        <div className='slider-content-container '>
                                            {/* <div className='line-center'></div> */}
                                            <hr className='line-center' />
                                            <div className='owner-sl'>
                                                <div>
                                                    <img src={item.img} alt="" />
                                                </div>
                                                <div className='text-center mt-2 text-white'>
                                                    <p className='p-0 m-0' style={{ fontWeight: 600 }}>
                                                        {item.name}
                                                    </p>
                                                    <span>
                                                        {item.designation}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                            }
                        </Slider>
                    </div>
                </div>
            </div >
        </section >
    )
}

export default Feedback
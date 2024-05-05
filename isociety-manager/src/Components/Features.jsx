import React from 'react'
import { FaPiedPiperPp } from "react-icons/fa";
import { FaHornbill } from "react-icons/fa6";
import { MdScreenSearchDesktop } from "react-icons/md";
import { FaScrewdriverWrench } from "react-icons/fa6";
const Features = () => {
    const data = [
        {
            icon: <FaPiedPiperPp size={80} color={"#48af4b"} />,
            heading: "Enterprise Dashboard",
            para: "iSociety Manager provides the enterprise dashboard where management user can check and see statistics and a summary of billing, recharge collection, complaints, notices etc. on drill down basis."
        },
        {
            icon: <FaHornbill size={80} color={"#48af4b"} />,
            heading: "Billing Dashboard",
            para: "iSociety Manager provides the enterprise dashboard where management user can check and see statistics and a summary of billing, recharge collection, complaints, notices etc. on drill down basis."
        },
        {
            icon: <MdScreenSearchDesktop size={80} color={"#48af4b"} />,
            heading: "Customized Report",
            para: "iSociety Manager provides the enterprise dashboard where management user can check and see statistics and a summary of billing, recharge collection, complaints, notices etc. on drill down basis."
        },
        {
            icon: <MdScreenSearchDesktop size={80} color={"#48af4b"} />,
            heading: "Online Billing System",
            para: "iSociety Manager provides the enterprise dashboard where management user can check and see statistics and a summary of billing, recharge collection, complaints, notices etc. on drill down basis."
        },
        {
            icon: <FaScrewdriverWrench size={80} color={"#48af4b"} />,
            heading: "Complaint Management",
            para: "iSociety Manager provides the enterprise dashboard where management user can check and see statistics and a summary of billing, recharge collection, complaints, notices etc. on drill down basis."
        },
        {
            icon: <MdScreenSearchDesktop size={80} color={"#48af4b"} />,
            heading: "Online Billing System",
            para: "iSociety Manager provides the enterprise dashboard where management user can check and see statistics and a summary of billing, recharge collection, complaints, notices etc. on drill down basis."
        },
        {
            icon: <FaPiedPiperPp size={80} color={"#48af4b"} />,
            heading: "Enterprise Dashboard",
            para: "iSociety Manager provides the enterprise dashboard where management user can check and see statistics and a summary of billing, recharge collection, complaints, notices etc. on drill down basis."
        },
        {
            icon: <FaHornbill size={80} color={"#48af4b"} />,
            heading: "Billing Dashboard",
            para: "iSociety Manager provides the enterprise dashboard where management user can check and see statistics and a summary of billing, recharge collection, complaints, notices etc. on drill down basis."
        },
        {
            icon: <MdScreenSearchDesktop size={80} color={"#48af4b"} />,
            heading: "Customized Report",
            para: "iSociety Manager provides the enterprise dashboard where management user can check and see statistics and a summary of billing, recharge collection, complaints, notices etc. on drill down basis."
        },
        {
            icon: <MdScreenSearchDesktop size={80} color={"#48af4b"} />,
            heading: "Online Billing System",
            para: "iSociety Manager provides the enterprise dashboard where management user can check and see statistics and a summary of billing, recharge collection, complaints, notices etc. on drill down basis."
        },
        {
            icon: <FaPiedPiperPp size={80} color={"#48af4b"} />,
            heading: "Enterprise Dashboard",
            para: "iSociety Manager provides the enterprise dashboard where management user can check and see statistics and a summary of billing, recharge collection, complaints, notices etc. on drill down basis."
        },
        {
            icon: <FaHornbill size={80} color={"#48af4b"} />,
            heading: "Billing Dashboard",
            para: "iSociety Manager provides the enterprise dashboard where management user can check and see statistics and a summary of billing, recharge collection, complaints, notices etc. on drill down basis."
        },

    ]

    return (
        <section>
            <div className="content-2 feature">
                <div className="container">
                    <div className="row justify-content-between align-items-center text-center">
                        <h2 className=''>
                            Features
                        </h2>
                        <p className='float-right iSociety m-0 '>
                            iSociety Manager Features
                        </p>
                    </div>
                    <div className='listing-items-features mt-3'>
                        <div className="row">
                            {data.map((item, index) => {
                                return (
                                    <div className='col-md-6 col-lg-3' key={index}data-aos="flip-left">
                                        <div >
                                            <div className="icon mb-3">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <h4 className='h4-small letter-spacing'>
                                                    {item.heading}
                                                </h4>
                                            </div>
                                            <div>
                                                <p className='grey-color'>
                                                    {item.para}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Features
import React from 'react'
import { FaRegCheckSquare } from "react-icons/fa";
const Assets_Mangement = () => {
    return (
        <>
            <section>
                <div className="content-2">
                    <div className="container">
                        <div className="row d-flex align-items-center">
                            <div className="col-md-6 col-xl-5" data-aos="fade-right">
                                <h3>
                                    Asset Management & PPM
                                </h3>
                                <p>
                                    Manage Facility Assets & Operations
                                </p>
                                <ul className='content-2-list p-0 m-0'>
                                    <li className="cbox green-icon">
                                        <div>
                                            <FaRegCheckSquare size={14} color={"#48af4b"} />
                                        </div>
                                        <p>QR Based Asset Tagging
                                        </p>
                                    </li>
                                    <li className="cbox green-icon">
                                        <div>
                                            <FaRegCheckSquare size={14} color={"#48af4b"} />
                                        </div>
                                        <p>Asset Catalogue, Checklist, Maintenance History </p>
                                    </li>
                                    <li className="cbox green-icon">
                                        <div>
                                            <FaRegCheckSquare size={14} color={"#48af4b"} />
                                        </div>
                                        <p>Time Stamp & GPS Location Tagging </p>
                                    </li>
                                    <li className="cbox green-icon">
                                        <div>
                                            <FaRegCheckSquare size={14} color={"#48af4b"} />
                                        </div>
                                        <p>Net Asset Value (NAV), Depriciation</p>
                                    </li>
                                    <li className="cbox green-icon">
                                        <div>
                                            <FaRegCheckSquare size={14} color={"#48af4b"} />
                                        </div>
                                        <p>Planned Preventive Maintenance (PPM), Predective Maintenance</p>
                                    </li>
                                    <li className="cbox green-icon">
                                        <div>
                                            <FaRegCheckSquare size={14} color={"#48af4b"} />
                                        </div>
                                        <p>Automatic Work Orders, Tasks, Alerts, Approval, Escalations</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6 col-xl-6 offset-xl-1" data-aos="fade-left">
                                <div className='content-2-img '>
                                    <img className='img-fluid' src="https://isocietymanager.com/fronts/images/assetmanagement.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section >
                <div className="content-2" style={{ padding: "10px 0" }}>
                    <div className="container">
                        <div className="row  d-flex align-items-center" >
                            <div className="col-md-6 col-xl-5"data-aos="fade-right">
                                <h3>
                                    Helpdesk/Complaint Management (IVR)
                                </h3>
                                <p>
                                    Manage your complaints like never before! <b> IVR enabled</b>
                                </p>
                                <ul className='content-2-list p-0 m-0'>
                                    <li className="cbox green-icon">
                                        <div>
                                            <FaRegCheckSquare size={14} color={"#48af4b"} />
                                        </div>
                                        <p>Complaint get automatically assigned to the Staff based on slots and open complaints, Staff Leaves/ Work Slots configurable.
                                        </p>
                                    </li>
                                    <li className="cbox green-icon">
                                        <div>
                                            <FaRegCheckSquare size={14} color={"#48af4b"} />
                                        </div>
                                        <p>Customer can raise complaint 24*7 through Web, Mobile App and IVR (Interactive Voice Response)</p>
                                    </li>
                                    <li className="cbox green-icon">
                                        <div>
                                            <FaRegCheckSquare size={14} color={"#48af4b"} />
                                        </div>
                                        <p>Management can track their Staff Performance and take better decisions.</p>
                                    </li>
                                    <li className="cbox green-icon">
                                        <div>
                                            <FaRegCheckSquare size={14} color={"#48af4b"} />
                                        </div>
                                        <p>Complaint Escalation Levels to keep track of escalations.</p>
                                    </li>
                                    <li className="cbox green-icon">
                                        <div>
                                            <FaRegCheckSquare size={14} color={"#48af4b"} />
                                        </div>
                                        <p>Complaint Reporting Analytics , Graphs and Charts.</p>
                                    </li>
                                    <li className="cbox green-icon">
                                        <div>
                                            <FaRegCheckSquare size={14} color={"#48af4b"} />
                                        </div>
                                        <p>Automatic Job Cards and OTP for Complaint logging by staff.</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6 col-xl-6 offset-xl-1" data-aos="fade-left"  >
                                <div className='content-2-img'>
                                    <img className='img-fluid' src="https://isocietymanager.com/fronts/images/content-3-1-img.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default Assets_Mangement
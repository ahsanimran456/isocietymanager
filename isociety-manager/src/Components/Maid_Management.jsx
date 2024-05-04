import React from 'react'
import { FaRegCheckSquare } from "react-icons/fa";
const Maid_Management = () => {
    return (
        <section>
            <div className="content-2 " style={{ borderTop: "1px solid gray " }}>
                <div className="container">
                    <div className="row d-flex align-items-center">

                        <div className="col-md-6 col-xl-5 offset-xl-1">
                            <h3>
                                Maid Management - SMART Card Tracking
                            </h3>
                            <p>
                                Track Maid/Staff in the society, using Face Recognition ( AI) Smart Card (RFID) solution, Biometric & Face recognition
                            </p>
                            <ul className='content-2-list p-0 m-0'>
                                <li className="cbox green-icon">
                                    <div>
                                        <FaRegCheckSquare size={14} color={"#48af4b"} />
                                    </div>
                                    <p>Occupant master directory, occupancy detail, owner/tenant move IN/move OUT, analysis of updated data availablity
                                    </p>
                                </li>
                                <li className="cbox green-icon">
                                    <div>
                                        <FaRegCheckSquare size={14} color={"#48af4b"} />
                                    </div>
                                    <p>Latest status on tickets, Helpdesk team performance analysis, , Complaint nature statistics, TAT, System generated MIS, Auto email </p>
                                </li>
                                <li className="cbox green-icon">
                                    <div>
                                        <FaRegCheckSquare size={14} color={"#48af4b"} />
                                    </div>
                                    <p>Latest Notice &amp; Circular with attachment, Read acknoledgement report, Support HINDI, Email/SMS/App Message to Individual/Tower/Block/ALL </p>
                                </li>
                                <li className="cbox green-icon">
                                    <div>
                                        <FaRegCheckSquare size={14} color={"#48af4b"} />
                                    </div>
                                    <p><b>Face Recognition</b> / ESSL Biometric Attendance, Maid/Staff tracking by SMART CARD (RFID), Intimation to Occupant</p>
                                </li>
                                <li className="cbox green-icon">
                                    <div>
                                        <FaRegCheckSquare size={14} color={"#48af4b"} />
                                    </div>
                                    <p>Vehicle tracking, Parking management, Sticker distribution &amp; MIS Children safety system, Boom barrier integration, Access control system, PPM, DG monitoring</p>
                                </li>
                                <li className="cbox green-icon">
                                    <div>
                                        <FaRegCheckSquare size={14} color={"#48af4b"} />
                                    </div>
                                    <p>Asset Tagging &amp; Management, Planned Preventive Maintenance ( PPM ), Inventory, Billing, Leasing, Online Payment</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-xl-6">
                            <div className='content-2-img'>
                                <img className='img-fluid' src="https://isocietymanager.com/fronts/images/smart-card.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Maid_Management
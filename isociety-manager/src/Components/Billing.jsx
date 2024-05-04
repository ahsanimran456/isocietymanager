import React from 'react'
import { FaRegCheckSquare } from "react-icons/fa";
const Billing = () => {
    return (
        <section>
            <div className="content-2 content-5">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-6 col-xl-6">
                            <div className='content-2-img'>
                                <img className='img-fluid' src="https://isocietymanager.com/fronts/images/content-3-2-img.png" alt="" />
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-5">
                            <h3>
                                Billing & Payment Collection
                            </h3>
                            <ul className='content-2-list p-0 m-0'>
                                <li className="cbox green-icon">
                                    <div>
                                        <FaRegCheckSquare size={14} color={"#48af4b"} />
                                    </div>
                                    <p>Automatic Payment Reminders to the Occupants.
                                    </p>
                                </li>
                                <li className="cbox green-icon">
                                    <div>
                                        <FaRegCheckSquare size={14} color={"#48af4b"} />
                                    </div>
                                    <p>Admin can see the Bill Preview to mitigate any wrong bill. </p>
                                </li>
                                <li className="cbox green-icon">
                                    <div>
                                        <FaRegCheckSquare size={14} color={"#48af4b"} />
                                    </div>
                                    <p>Tally and SAP integration to automate the posting of bills and receipts to prevent human errors and time.</p>
                                </li>
                                <li className="cbox green-icon">
                                    <div>
                                        <FaRegCheckSquare size={14} color={"#48af4b"} />
                                    </div>
                                    <p>Automatic Reading from your Smart Meters.</p>
                                </li>
                                <li className="cbox green-icon">
                                    <div>
                                        <FaRegCheckSquare size={14} color={"#48af4b"} />
                                    </div>
                                    <p>Cheque Parking and Cheque Bounce Handling.</p>
                                </li>
                                <li className="cbox green-icon">
                                    <div>
                                        <FaRegCheckSquare size={14} color={"#48af4b"} />
                                    </div>
                                    <p>Transfer Unit Ownership taken care with very Simple interface.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Billing
import React from 'react'
import { FaRegCheckSquare } from "react-icons/fa";

const Account_Management = () => {
    return (
        <section>
            <div className="content-2 content-6">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-6 col-xl-6"data-aos="fade-left">
                            <div className='content-2-img'>
                                <img className='img-fluid' src="https://isocietymanager.com/fronts/images/content-4-img.png" alt="" />
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-5" data-aos="fade-right">
                            <h3 className='text-white'>
                                Accounting Management
                            </h3>
                            <ul className='content-2-list p-0 m-0'>
                                <li className="cbox green-icon">
                                    <div>
                                        <FaRegCheckSquare size={14} color={"#48af4b"} />
                                    </div>
                                    <p>Maintain your Society Accounts online and get financial Statements automatically updated.
                                    </p>
                                </li>
                                <li className="cbox green-icon">
                                    <div>
                                        <FaRegCheckSquare size={14} color={"#48af4b"} />
                                    </div>
                                    <p>Journal Entry Posting and General Ledger – for any Account.</p>
                                </li>
                                <li className="cbox green-icon">
                                    <div>
                                        <FaRegCheckSquare size={14} color={"#48af4b"} />
                                    </div>
                                    <p>Trial Balance at any point of Time.</p>
                                </li>
                                <li className="cbox green-icon">
                                    <div>
                                        <FaRegCheckSquare size={14} color={"#48af4b"} />
                                    </div>
                                    <p>Income and Expense Account automatically prepared.</p>
                                </li>
                                <li className="cbox green-icon">
                                    <div>
                                        <FaRegCheckSquare size={14} color={"#48af4b"} />
                                    </div>
                                    <p>Balance Sheet automatically prepared.</p>
                                </li>
                                <li className="cbox green-icon">
                                    <div>
                                        <FaRegCheckSquare size={14} color={"#48af4b"} />
                                    </div>
                                    <p>Bulk Posting of Billing & Payments.</p>
                                </li>
                                <li className="cbox green-icon">
                                    <div>
                                        <FaRegCheckSquare size={14} color={"#48af4b"} />
                                    </div>
                                    <p>Integration with Accounting System like SAP/ Tally.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Account_Management
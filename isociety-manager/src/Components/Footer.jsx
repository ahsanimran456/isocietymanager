import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className="container footer mt-5">
                <div className="row mb-5">
                    <div className='col-md-9 col-lg-3 pr-3'>
                        <img className='mb-4' src="https://isocietymanager.com/fronts/images/Final_Logo_grey.png" width={245} height={60} alt="" />
                        <p>
                            Make your Condominium, Society, Apartment, or Community SMARTER.<br />
                            Take informed decisions about your income, expenses, inventory, vendors, maintenance, helpdesk, employees on top of real time data. <br />
                            <b>Delight your Residents</b>  with Ads free Complete Society Management App.
                        </p>
                    </div>
                    <div className='col-md-4 col-lg-3'>
                        <h4 className="h4-small">Quick Links</h4>
                        <ul className='m-0 p-0'>
                            <li>Facility Management- CAFM</li>
                            <li>Billing Software</li>
                            <li>Complaint Management</li>
                            <li>Attendance Management</li>
                            <li>Inventory Management</li>
                            <li>Visitor Management</li>
                            <li>Vendor Management</li>
                        </ul>
                    </div>
                    <div className='col-md-3 col-lg-2'>
                        <h4 className="h4-small">About Us</h4>
                        <ul className='m-0 p-0'>
                            <li>Facility Management- CAFM</li>
                            <li>Billing Software</li>
                            <li>Complaint Management</li>
                            <li>Attendance Management</li>
                            <li>Inventory Management</li>
                            <li>Visitor Management</li>
                            <li>Vendor Management</li>
                        </ul>
                    </div>
                    <div className='col-md-6 col-lg-4'>
                        <h4 className="h4-small">Contact Us:</h4>
                        <ul className='m-0 p-0' style={{ listStyle: "none" }}>
                            <li>+91 8448869708</li>
                            <li> contact@factech.co.in</li>
                            <li>91 SpringBoard C2, Block C, Sector 1, Noida,</li>
                            <li>Sign In</li>
                            <li>Partner With Us</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className='row bottom-footer'>
                    <div className="col-sm-6">
                        <div>
                            <p className="m-bottom-0">© 2021 <strong>Factech</strong> All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
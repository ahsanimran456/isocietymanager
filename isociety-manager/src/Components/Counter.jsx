import React from 'react'
import { IoDocumentTextOutline } from "react-icons/io5";
import { GiTicket } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";
import { PiIdentificationCardBold } from "react-icons/pi";
export const Counter = () => {
    return (
        <div className="content-3 bg-dark">
            <div className="container text-white">
                <div className="row" data-aos="fade-up-right">
                    <div className="col-md-3">
                        <div className="statistic-block text-center">
                            <h4 class="h4-lg letter-spacing">Billing Generated(Cr)</h4>
                            <p className='text-center' style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                                <div style={{ border: "3px solid #ffff", padding: 4, borderRadius: "50%", width: "fit-content" }}>
                                    <IoDocumentTextOutline size={35} color='#ffff' />
                                </div>
                            </p>
                            <div class="statistic-number">548</div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="statistic-block text-center">
                            <h4 class="h4-lg letter-spacing">Helpdesk Ticket/IVR</h4>
                            <p className='text-center' style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                                <div style={{ border: "3px solid #ffff", padding: 4, borderRadius: "50%", width: "fit-content" }}>
                                    <GiTicket size={35} color='#ffff' />
                                </div>
                            </p>
                            <div class="statistic-number">150000</div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="statistic-block text-center">
                            <h4 class="h4-lg letter-spacing">Units Managed</h4>
                            <p className='text-center' style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                                <div style={{ border: "3px solid #ffff", padding: 4, borderRadius: "50%", width: "fit-content" }}>
                                    <FaUsers  size={35} color='#ffff' />
                                </div>
                            </p>
                            <div class="statistic-number">81000</div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="statistic-block text-center">
                            <h4 class="h4-lg letter-spacing">Visitors</h4>
                            <p className='text-center' style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                                <div style={{ border: "3px solid #ffff", padding: 4, borderRadius: "50%", width: "fit-content" }}>
                                    <PiIdentificationCardBold  size={35} color='#ffff' />
                                </div>
                            </p>
                            <div class="statistic-number">485000</div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

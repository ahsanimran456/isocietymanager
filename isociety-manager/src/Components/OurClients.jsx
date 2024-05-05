import React from 'react'

const OurClients = () => {
    const data = [
        { img: "https://isocietymanager.com/fronts/images/blog/cbre.png" },
        { img: "https://isocietymanager.com/fronts/images/blog/jaypee.png" },
        { img: "https://isocietymanager.com/fronts/images/blog/dlf-camellias.jpg" },
        { img: "https://isocietymanager.com/fronts/images/blog/dlf.jpeg" },
        { img: "https://isocietymanager.com/fronts/images/blog/ambience-caitriona.jpg" },
        { img: "https://isocietymanager.com/fronts/images/blog/avj.jpeg" },
        { img: "https://isocietymanager.com/fronts/images/blog/godrej.jpg" },
        { img: "https://isocietymanager.com/fronts/images/blog/ireo.jpg" },
        { img: "https://isocietymanager.com/fronts/images/blog/ajnara.jpg" },
        { img: "https://isocietymanager.com/fronts/images/blog/jaypee.png" },
        { img: "https://isocietymanager.com/fronts/images/blog/dlf-camellias.jpg" },
        { img: "https://isocietymanager.com/fronts/images/blog/dlf.jpeg" },
        { img: "https://isocietymanager.com/fronts/images/blog/ambience-caitriona.jpg" },
        { img: "https://isocietymanager.com/fronts/images/blog/avj.jpeg" },
        { img: "https://isocietymanager.com/fronts/images/blog/godrej.jpg" },
        { img: "https://isocietymanager.com/fronts/images/blog/ireo.jpg" },
        { img: "https://isocietymanager.com/fronts/images/blog/ajnara.jpg" },
        { img: "https://isocietymanager.com/fronts/images/blog/dlf.jpeg" },
        { img: "https://isocietymanager.com/fronts/images/blog/ambience-caitriona.jpg" },
        { img: "https://isocietymanager.com/fronts/images/blog/avj.jpeg" },
    ]
    return (
        <section>
            <div className="content-2 ">
                <div className="container">
                    <div className="row " style={{ flexDirection: "column" }}>
                        <h2 >
                            Our Clients & Partners
                        </h2>
                        <p style={{ fontWeight: 700, color: "#666", fontSize: "1.1rem" }}>
                            100+ Clients and 80k+ Units
                        </p>
                    </div>
                    <div className="our-clients">
                        <div className="row">
                            {data.map((item, index) => {
                                return (
                                    <div className="col-sm-4 col-md-3 col-xs-6 mb-2 "data-aos="flip-right"  key={index}>
                                        <img style={{ border: '3px solid gray' }} className='img-fluid' src={item.img} alt="" />
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

export default OurClients
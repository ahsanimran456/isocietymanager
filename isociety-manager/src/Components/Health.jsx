import React from 'react'
import VideoComponent from './VideoComponent'

const Health = () => {
    return (
        <>
            <section className='video-section'>
                <div className="container">
                    <VideoComponent
                        title={'Know your Site Health in 5 Minutes'}
                        video={'https://www.youtube.com/embed/FC0ZfvQzcJo?autoplay=1&mute=1&ecver=1&iv_load_policy=1&rel=0'}
                    />

                </div>
            </section>
            <section className='refer'data-aos="fade-right">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 col-xs-12">
                            <h3 className="letter-spacing">Refer to earn Rewards</h3>
                            <div>
                                <img src="https://isocietymanager.com/fronts/images/refer.png" alt="" width={180} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Health
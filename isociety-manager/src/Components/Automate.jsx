import React from 'react'
import VideoComponent from './VideoComponent'

const Automate = () => {
    return (
        <section className='video-section'>
            <div className="container">
                <VideoComponent
                    title={'Automate and Simplify Your RWA Operations and Management'}
                    video={'https://www.youtube.com/embed/A_5e95i8PJo?autoplay=1&amp;mute=1&amp;ecver=1&amp;iv_load_policy=1&amp;rel=0'}
                />

            </div>
        </section>
    )
}

export default Automate
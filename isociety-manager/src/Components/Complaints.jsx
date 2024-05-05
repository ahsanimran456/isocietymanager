import React from 'react'
import VideoComponent from './VideoComponent'

const Complaints = () => {
    return (
        <section className='video-section'>
            <div className="container">
                <VideoComponent
                    title={'Manage Complaints, Escalations, Reopen & Track Activity'}
                    video={'https://www.youtube.com/embed/4q0RYlXD6eg?autoplay=1&mute=1&ecver=1&iv_load_policy=1&rel=0'}
                />
            </div>
        </section>
    )
}

export default Complaints
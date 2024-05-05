import React from 'react'
import VideoComponent from './VideoComponent'

const Electricity = () => {
    return (
        <section className='video-section v-2'>
            <div className="container">
                <VideoComponent
                    title={'Automate Your Maintenance, Electricity, Other Billings and Online Payment'}
                    video={'https://www.youtube.com/embed/jnr96aSlnn8?autoplay=1&mute=1&ecver=1&iv_load_policy=1&rel=0'}
                />
            </div>
        </section>
    )
}

export default Electricity
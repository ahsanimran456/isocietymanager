import React from 'react'

const VideoComponent = ({ title,video }) => {
    return (
        <div className='row m-0 p-0 '>
            <div className="col-md-10 col-xl-10 col-sm-12 offset-md-1 offset-xl-1 white-color text-white">
                <div className="video-titles">
                    <h2>
                        {title}
                    </h2>
                </div>
                <div className='youtube-embed'>
                    <iframe allowfullscreen="allowFullScreen" src={video} width="100%" height="100%" allowtransparency="true" frameborder="0">
                    </iframe>
                </div>
            </div>
        </div>
    )
}

export default VideoComponent
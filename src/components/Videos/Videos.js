import React from "react"
import './Videos.css'

function Videos() {
    return (
        <div className="container mt-5">
            <iframe className='video-port' width="335" height="315" src="https://www.youtube.com/embed/AJMxw_FsGZo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}

export default Videos
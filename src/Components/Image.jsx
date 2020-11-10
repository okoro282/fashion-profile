import React from 'react'
import photo from './images/dimples.jpg'
import './image.css'

function Image() {
    return (
        <div className='people'>
            <img src={photo}></img>
        </div>
    )
}

export default Image

import './ImageList.css'
import React from 'react'
import ImageCard from './ImageCard'

// need to use keys in lists
const ImageList = (props) => {
    // this is now destructured with the {} .. was images
    //const images = props.images.map((images) => { then image.id
    const images = props.images.map((image) => {
        return <ImageCard key={image.id} image={image} />
    })
    console.log(images)
    return <div className="image-list">{images}</div>
}

export default ImageList
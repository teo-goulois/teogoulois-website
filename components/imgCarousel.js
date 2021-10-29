import React, { useEffect } from 'react'

const ImgCarousel = (props) => {
  console.log('test', props)
const { text, img } = props

  return (
    <div className="carouselImgContainer">
      <div style={{ padding: 8 }}>
        <img
          src={img}
          alt="placeholder"
          style={{ width: '100%' }}
        />
      </div>
      <div className="carouselInfo">
        <p>{text}</p>
      </div>
    </div>
  )
}

export default ImgCarousel

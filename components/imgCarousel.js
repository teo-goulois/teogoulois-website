import React, { useEffect } from 'react'

const ImgCarousel = props => {
  console.log('test', props)
  const { text, img } = props

  return (
    <div className="carouselImgContainer">
      <div
        style={{
          padding: 8,
          objectFit: 'cover',
          width: '100%',
          height: '100%'
        }}
      >
        <img
          src={img}
          alt="placeholder"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      <div className="carouselInfo">
        <h2>{text}</h2>
      </div>
    </div>
  )
}

export default ImgCarousel

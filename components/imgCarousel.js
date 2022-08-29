import React, { useEffect } from 'react'
import { Link } from '@chakra-ui/react'
const ImgCarousel = props => {
  console.log('test', props)
  const { text, img, url } = props

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
      <Link href={`/works/${url}`} className="carouselInfo">
        <h2>{text}</h2>
      </Link>
    </div>
  )
}

export default ImgCarousel

import React from 'react'
import './index.scss'

const ImageFrame = ({title, buttonName, buttonFn, index}) => {
  const getImageWithIndex = (index) => {
    switch(index) {
      case 0: {
        return 'assets/images/my-record/recommend-1.png'
      }
      case 1: {
        return 'assets/images/my-record/recommend-2.png'
      }
      case 2: {
        return 'assets/images/my-record/recommend-3.png'
      }
      default: {
        return 'assets/images/my-record/recommend-1.png'
      }
    }
  }

  return (
    <div className="image-frame">
      <div className="image-frame__container" style={{
        backgroundImage: `url(${getImageWithIndex(index)})`
      }}>
        <div className="image-frame__content">
          <p>{title}</p>
          <button onClick={buttonFn}>{buttonName}</button>
        </div>
      </div>
    </div>
  )
}

export default ImageFrame
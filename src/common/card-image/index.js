import React from 'react'
import './index.scss'

const CardImage = ({imgSrc, label}) => {
  return (
    <div className="card-image">
      <img src={imgSrc} alt={label} />
      <div className="card-image__label">
        <p>{label}</p>
      </div>
    </div>
  )
}

export default CardImage
import React from 'react'
import './index.scss'

const HexItem = ({iconType, label, setFilter}) => {
  /**
   * Get Image string with icon type
   * @param {string} type type of icon
   * @returns {string} image path
   */
  const getImageWithIconType = (type) => {
    switch(type) {
      case 'fork': {
        return 'assets/images/top-page/hex-fork.png'
      }
      case 'cup': {
        return 'assets/images/top-page/hex-cup.png'
      }
      default: {
        return 'assets/images/top-page/hex-fork.png'
      }
    }
  }

  const onClickHex = () => {
    setFilter(label)
  }

  return (
    <div className="hex">
      <div className="hex__wrapper" onClick={onClickHex}>
        <div className="hex__image">
          <img src={getImageWithIconType(iconType)} alt="fork-icon" width="100%" height="100%"/>
        </div>
        <p className="hex__label">{label ?? 'None'}</p>
      </div>
    </div>
  )
}

export default HexItem
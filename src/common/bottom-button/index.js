import React from 'react'

const BottomButton = ({ text, onClick}) => {
  return (
    <div className="bottom-button">
      <button onClick={onClick} style={{
        width: "296px",
        height: "56px",
        background: "linear-gradient(32.95deg, #FFCC21 8.75%, #FF963C 86.64%)",
        outline: "none",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
      }}>{text}</button>
    </div>
  )
}

export default BottomButton
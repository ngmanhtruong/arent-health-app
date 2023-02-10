import React from 'react'
import './index.scss'

const Page404 = () => {
  const navigateToHome = () => {
    window.location.href = '/'
  }

  return (
    <div className="page-404">
      <h6>
        404 Not Found
      </h6>
      <p className="page-404__description">
        The page you are looking for is not exist
      </p>
      <button className="page-404__button" onClick={navigateToHome}>
        Back to Home
      </button>
    </div>
  )
}

export default Page404
import React from 'react'
import Logo from '../images/histandro.jpeg'

function BodyContent() {
  return (
    <>
      <div className='Logo'>
      <img className='img-logo' src={Logo} alt="histandro" />
      </div>
      <div className='BodyContent'>
        <p className='description-content'>
          Para o público que gosta de gêneros como:<br></br> terror, fantasia, suspense, drama, aventura e romance
          Garanto a vocês, grandes emoções      </p>
      </div>
    </>
  )
}

export default BodyContent
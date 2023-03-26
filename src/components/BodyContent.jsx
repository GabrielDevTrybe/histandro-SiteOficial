import React from 'react'
import Logo from '../images/histandro.jpeg'
import May from '../images/May.jpeg'

function BodyContent() {
  return (
    <>
      <div className='Logo'>
        <div className='container-may'>
          <div className='May-and-img'>
            <img className='img-may' src={May} alt="May" />
            <p className='Mayara'>MAYARA</p>
          </div>
        </div>
        <img className='img-logo' src={Logo} alt="histandro" />
      </div>
      <div className='BodyContent'>
        <p className='description-content'>
          Para o público que gosta de gêneros como: terror, fantasia, suspense, drama, aventura e romance
          <br></br> Garanto a vocês, grandes emoções 👻      </p>
      </div>
    </>
  )
}

export default BodyContent
import React from 'react'
import { Link } from 'react-router-dom'

function HistoryContentButton() {
  return (
    <div  className='history-button-container'>
    <Link to='/historias' className='link'>CONTOS</Link>
    </div>
  )
}

export default HistoryContentButton
import React from 'react'
import BodyContent from './BodyContent'
import HistoryContentButton from './HistoryContentButton'

function Home() {
  return (
    <>
      <header id='Header'>
        <h1 id='Titulo'>HISTORIAS ANTES DE DORMIR</h1>
      </header>
      <BodyContent />
      <HistoryContentButton />
    </>
  )
}

export default Home
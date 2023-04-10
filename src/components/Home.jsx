import React from 'react'
import BodyContent from './BodyContent'
import HistoryContentButton from './HistoryContentButton'


function Home() {
  return (
    <>
      <header id='Header'>
        <h1 id='Titulo'>HISTORIAS ANTES DE DORMIR</h1>
          <i id='burguer' class="material-icons">
            menu
          </i>
        <nav class="menu-navigation">
          <menu>

            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Sobre</a></li>
              <li><a href="#">Serviços</a></li>
              <li><a href="#">Contato</a></li>
            </ul>
          </menu>
        </nav>
      </header>
      <BodyContent />
      <HistoryContentButton />
    </>
  )
}

export default Home
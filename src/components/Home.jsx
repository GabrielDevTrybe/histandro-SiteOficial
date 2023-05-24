import React, {useState} from 'react'
import BodyContent from './BodyContent'
import HistoryContentButton from './HistoryContentButton'


function Home() {
  let [openNavBar, setOpenNavBar] = useState(false); 

  const toggleNavBar = () => {
    setOpenNavBar(!openNavBar);
    const navBar = document.getElementById("navbar-default");
    if(openNavBar === true){
      navBar.classList.remove("hidden");

    }else {
      navBar.classList.add("hidden");
    }

  }

  return (
    <>
      <header id='Header'>
        <div className='fix-div'></div>
        {/* <h1 id='Titulo'>HISTORIAS ANTES DE DORMIR</h1> */}
          {/* <i id='burguer' class="material-icons">
            menu
          </i> */}
        {/* <nav class="menu-navigation">
          <menu>

            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Sobre</a></li>
              <li><a href="#">Serviços</a></li>
              <li><a href="#">Contato</a></li>
            </ul>
          </menu>
        </nav> */}
        
<nav id='teste' className="bg-white border-gray-200 dark:bg-gray-900 fixed">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" className="flex items-center">
        {/* <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" /> */}
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">HISTORIAS ANTES DE DORMIR</span>
    </a>
    <button onClick={toggleNavBar} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border-2 border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-black-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-black-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">About</a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-black-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Services</a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-black-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Pricing</a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-black-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

      </header>
      <BodyContent />
      <HistoryContentButton />
    </>
  )
}

export default Home

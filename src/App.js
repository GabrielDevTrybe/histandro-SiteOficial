import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Historias from './pages/Historias';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/historias' element={<Historias />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

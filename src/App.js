import { Routes, Route } from 'react-router-dom'

import NavBar from './components/global/NavBar/NavBar'
import Home from './pages/Home'
import MovieDetail from './pages/MovieDetail'

import './App.scss'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home pageName={`Home`}/>}/>
        <Route path='/movies/:id' element={<MovieDetail pageName={`Movie Detail`}/>}/>
      </Routes>
    </>
    
  );
}

export default App;

import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css'
import Header from '../Header/Header'
import Main from '../Main/Main'
import Movies from '../Movies/Movies';

function App() {

  const location = useLocation()

  return (
    <div className='App'>
      <Header location={location}/>
      <Routes>
        <Route path='/' element={ <Main /> }  />
        <Route path='/movies' element={ <Movies /> }  />
      </Routes> 
    </div>
  );
}

export default App;

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import SingUp from './components/SingUp';
function App() {
  return (
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/singup' element={<SingUp/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    
  );
}

export default App;

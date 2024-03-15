import logo from './logo.svg';
import './App.css';
import Menu from './Menu';
import About from './About';
import Gallary from './Gallary'
import { BrowserRouter,Route,Routes,Router } from 'react-router-dom';
function App() {
  return (
    <>
    <BrowserRouter>
    <Menu/>
    {/* hello */}
      <Routes>
       <Route path="/gallary"element={<Gallary/>}/>
       <Route path="/about"element={<About/>}/>
      </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;

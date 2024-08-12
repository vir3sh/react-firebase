import logo from './logo.svg';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import {BrowserRouter,Route,Routes} from 'react-router-dom';


function App() {
  return (
    // <>
    //  <Navbar/>
    //  <Login/>
    // </>
   <BrowserRouter>
   <Routes>
    <Route exact path='/signup' element={<Signup/>}/>
    <Route exact path='/login' element={<Login/>}/>
    <Route exact path='/' element={<user/>}/>
   </Routes>
   </BrowserRouter>


  );
}

export default App;


import Login from './components/Login';
import Signup from './components/Signup';
import User from './components/User';
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
    <Route exact path='/' element={<User/>}/>
   </Routes>
   </BrowserRouter>


  );
}

export default App;

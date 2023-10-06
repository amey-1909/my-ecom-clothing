
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Home from './components/routes/home';
import NavBar from './components/navBar/navBar';
import Authentication from "./components/routes/authentication/Authentication";
import Shop from './components/routes/shop/shop';
import Checkout from './components/routes/checkout/checkout';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setCurrentUser } from './Store/userReducer/userAction';
function App() {
  let dispatch=useDispatch();
  useEffect(()=>{
    const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    dispatch(setCurrentUser(user))
  } 
  else {
    dispatch(setCurrentUser(null))
  }
});
  },[dispatch])
  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<NavBar/>}>
    <Route index element={<Home/>}/>
    <Route path='shop/*' element={<Shop/>}/>
    <Route path='contact' element=<h1>contact</h1>/>
    <Route path='signIn' element={<Authentication/>}/>
    <Route path='checkout' element={<Checkout/>}/>
    </Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;
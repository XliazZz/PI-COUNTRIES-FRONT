import './App.css';
import Nav from './Components/Nav/Nav';
import Landing from './Components/Landing/Landing';
import Searches from './Components/Searches/Searches';
import Home from './Components/Home/Home';
import DetailCountry from './Components/DetailCountry/DetailCountry';
import FormActivity from './Components/FormActivity/FormActivity';
import FavoriteCountry from './Components/FavoriteCountry/FavoriteCountry';
import Register from './Components/Register/Register';
import Terms from './Components/Terms/Terms';
import Login from './Components/Login/Login';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import FavoriteActivity from './Components/FavoriteActivity/FavoriteActivity';
import About from './Components/About/About';
import Message from './Components/Message/Message';
import Footer from './Components/Footer/Footer';
import FAQ from './Components/FAQ/FAQ';

function App() {
  const [access, setAccess] = useState(false);
  const [failed, setFailed] = useState(null); 
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const login = async (userData) => {
    const { email, password } = userData;
    const URL = 'https://pi-countries-back-production-ea0f.up.railway.app/login';
  
    try {
      let endpoint = URL;
      if (email) {
        endpoint += `?email=${email}&password=${password}`;
      } 
  
      const { data } = await axios.get(endpoint);
      const { access } = data;
      setAccess(access);
      setFailed('')
      access && navigate('/home');
    } catch (error) {
      setFailed('An error occurred during login. Please try again.');
    }
  };

  useEffect(() => {
    setFailed(null); // Reset the error message when the route changes
  }, [window.location.pathname]);

  useEffect(() => {
    if (!access && pathname !== '/login' && pathname !== '/' && pathname !== "/register" && pathname !== '/faq' && pathname !== '/message' && pathname !== '/terms') {
      navigate('/login');
    } else if (access && (pathname === '/login' || pathname === '/')) {
      navigate('/home');
    }
  }, [access, navigate, pathname]);

  const logOut = () => {
    setAccess(false);
  };

  return (
    <div className="App">
    {!(pathname === '/message' && !access || pathname === '/faq' && !access || pathname === '/terms' && !access || pathname === '/about' && !access) && pathname !== '/register' && pathname !== '/login' && <Nav logOut={logOut} />}
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/searches' element={<Searches/>}/>
        <Route path='/detail/:id' element={<DetailCountry />}/>
        <Route path='/activity' element={<FormActivity />}/>
        <Route path='/favorites/country' element={<FavoriteCountry />}/>
        <Route path='/favorites/activity' element={<FavoriteActivity />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/terms' element={<Terms />}/>
        <Route path='/login' element={<Login login={login} failed={failed}  />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/message' element={<Message />}/>
        <Route path='/faq' element={<FAQ />}/>
      </Routes>
      { pathname !== '/register' && pathname !== '/login' && <Footer />}
    </div>
  );
}

export default App;

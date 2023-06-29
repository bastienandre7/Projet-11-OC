import './App.css';
import {BrowserRouter , Routes, Route } from 'react-router-dom';
import Header from './Components/Header/header';
import Footer from './Components/Footer/footer';
import Home from './Pages/Home/home';
import SignIn from './Pages/Sign-In/signIn';
import User from './Pages/User/user'

function App() {
  return (
      <BrowserRouter>

        <Header />

        <Routes>

          <Route path='/' element={<Home />} />

          <Route path='/signIn' element={<SignIn />} />

          <Route path='/user' element={<User />} />

        </Routes>
      
        <Footer />
      
      </BrowserRouter>
  

  );
}

export default App;

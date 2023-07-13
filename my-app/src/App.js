import './App.css';
import {BrowserRouter , Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/footer';
import Home from './Pages/Home/home';
import SignIn from './Pages/Sign-In/signIn';
import User from './Pages/User/user';
import Edit from './Pages/Edit/edit';

function App() {
  return (
      <BrowserRouter>

        <Routes>

          <Route path='/' element={<Home />} />

          <Route path='/signIn' element={<SignIn />} />

          <Route path='/user' element={<User />} />

          <Route path='/user/edit' element={<Edit />} />

        </Routes>
      
        <Footer />
      
      </BrowserRouter>
  

  );
}

export default App;

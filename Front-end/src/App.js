
import { useSelector } from 'react-redux';
import { Route, Routes,Navigate } from 'react-router-dom';
import Main from "./components/pages/Main";
import Login from "./components/pages/Login";
import User from "./components/pages/User";
import Nav from './components/Nav';
import Footer from './components/Footer';
import './App.css';
function App() {
  const token = useSelector(state => state.userToken.token)
  return (
    <div className="App">
      
        <Nav />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/Login" element={<Login />} />
          <Route path='/User' element={token ?<User /> : <Navigate to="/Login" />}/>
        </Routes>
        <Footer />
     
    </div>
  );
}

export default App;

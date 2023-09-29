import { BrowserRouter as Router, } from 'react-router-dom';
import Routers from './components/theRouter/Routers';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './App.css';
function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routers />
        <Footer />
      </Router>
    </div>
  );
}

export default App;

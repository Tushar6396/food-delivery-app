import './App.css';
import Home from './screens/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './screens/Login';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Signup from './screens/Signup.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/createuser' element={<Signup />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

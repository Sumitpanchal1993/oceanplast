// import logo from './logo.svg';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from '../src/Pages/Home'
import Products from '../src/Pages/Products'
import Customers from '../src/Pages/Customers'
import Aboutus from '../src/Pages/Aboutus';
import Contactus from '../src/Pages/Contactus'
import Career from '../src/Pages/Career'
import Other from '../src/Pages/Other'
import Footer from './Components/Footer';
import Login from './Pages/Login';
import TableFetch from './Pages/TableFetch';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/product' element={<Products />} />
          <Route path='/customer' element={<Customers />} />
          <Route path='/aboutus' element={<Aboutus />} />
          <Route path='/contactus' element={<Contactus />} />
          <Route path='/career' element={<Career />} />
          <Route path='/login' element={<Login />} />
          <Route path='/other' element={<Other />} />
          <Route path='/tablefetch' element={<TableFetch />} />
        </Routes>
        <Footer />
      </Router>

    </>
  );
}

export default App;
import './App.css';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/signup';
import Navbar from './Components/Products/Navbar';
import SectionOne from './Components/Products/Sectionone';
import View from './Components/Products/view';
import Categories from './Components/Products/Categories';
import Views from './Components/Products/Views';
import Items from './Components/Products/Items';
import SubscribeFooter from './Components/Products/SubscribeFooter';
import MainFooter from './Components/Products/MainFooter';
import Contact from './Components/nav-items/Contact';
import About from './Components/nav-items/AboutUs';
import Shop from './Components/nav-items/Shop';
import Header from './Components/nav-items/Discounts/Header';
import Category from './Components/nav-items/Discounts/Category';
import Product from './Components/nav-items/Discounts/Product';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
         <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>}/> 
          <Route path="/" element={
            <>
              <Navbar />
              <SectionOne />
              <View/>
              <Categories/>
              <Views/>
              <Items/>
              <SubscribeFooter/>
              <MainFooter/>
            </>
          } />
          <Route path="/Contact" element={
            <>
              <Navbar/>
              <Contact/>
              <SubscribeFooter/>
              <MainFooter/>
            </>
          } />
          <Route path="/AboutUs" element={
            <>
              <Navbar/>
              <About/>
              <SubscribeFooter/>
              <MainFooter/>
            </>
          } />
          <Route path="/Shop" element={
            <>
              <Navbar/>
              <Shop/>
              <SubscribeFooter/>
              <MainFooter/>
            </>
          } />
          <Route path="/Discounts" element={
            <>
              <Navbar/>
              <Header/>
              <Category/>
              <Product/>
              <SubscribeFooter/>
              <MainFooter/>
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
};
export default App;

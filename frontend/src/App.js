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

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
         <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/" element={<Login/>} />  
          <Route path="/Products" element={
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
        </Routes>
      </div>
    </Router>
  );
};
export default App;

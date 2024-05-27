import './App.css';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/signup';
function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
        <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/" element={<Login/>} /> 
        </Routes>
      </div>
    </Router>
  );
};
export default App;

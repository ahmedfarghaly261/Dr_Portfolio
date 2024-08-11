import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Header from './components/header/header';
import Sec1 from './components/sections/section 1/sec1';
import Dashboard from './dashboard/dashboard';
import Card_for_sec3 from './components/card/card_for_sec3';
import Form from './components/booking_form/form';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/header' element={<Header/>} />
          <Route path='/sec1' element={<Sec1/>} />
          <Route path='/' element={<Dashboard/>} />
          <Route path='/card' element={<Card_for_sec3/>} />
          <Route path='/booking an appointment' element={<Form/>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import { Route, Routes } from 'react-router';
import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Details from './pages/Details';
import CreateCar from './pages/CreateCar';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:carId' element={<Details />} />
        <Route path='/new' element={<CreateCar mode='create' />} />
        <Route path='/update/:carId' element={<CreateCar mode='update' />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

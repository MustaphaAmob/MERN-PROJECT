import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Product from './component/Product';
import ProductLanding from './component/ProductLanding';
import Card from './component/Card';
import Checkout from './component/Checkout';

function App() {
  return (
    <>
      <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path='/products/:_id' element={<ProductLanding />} />
          <Route path='/card' element={<Card />} />
          <Route path="/checkout" element={<Checkout />} /> 
        </Routes>
      
    </>
  );
}

export default App;

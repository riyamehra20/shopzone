import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Contact from './pages/Contact';

function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '8rem 2rem' }}>
      <h1 style={{ fontFamily: 'Syne', fontSize: '4rem', color: 'var(--accent)' }}>404</h1>
      <p style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>Page not found</p>
      <a href="/" style={{
        background: 'var(--accent)', color: '#fff', padding: '10px 24px',
        borderRadius: '8px', fontWeight: 600,
      }}>Go Home</a>
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
